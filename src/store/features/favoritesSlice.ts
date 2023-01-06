import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovieInfo } from "types";
import { RootState } from "store";
import {
  addFavoriteToStore,
  deleteFavoriteFromStore,
  FirebaseErrorMessage,
  getFavoritesFromStore,
  getFirebaseErrorMessage,
} from "services";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

interface IFavoritesState {
  favorites: IMovieInfo[];
  isLoading: boolean;
}

const initialState: IFavoritesState = {
  favorites: [],
  isLoading: false,
};

export const addFavorite = createAsyncThunk<
  void,
  IMovieInfo,
  { rejectValue: FirebaseErrorMessage; state: RootState }
>("favorites/add", async (movieInfo, { rejectWithValue, getState }) => {
  try {
    const state = getState();
    const { id } = state.user;
    if (id) {
      await addFavoriteToStore(movieInfo, id);
    }
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError));
  }
});

export const fetchFavorites = createAsyncThunk<
  IMovieInfo[] | undefined,
  void,
  { rejectValue: FirebaseErrorMessage; state: RootState }
>("favorites/fetch", async (_, { rejectWithValue, getState }) => {
  try {
    const state = getState();
    const { id } = state.user;
    if (id) {
      return await getFavoritesFromStore(id);
    }
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError));
  }
});

export const deleteFavorite = createAsyncThunk<
  void,
  string,
  { rejectValue: FirebaseErrorMessage; state: RootState }
>("favorites/delete", async (movieId, { rejectWithValue, getState }) => {
  try {
    const state = getState();
    const { id } = state.user;
    id && (await deleteFavoriteFromStore(movieId, id));
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError));
  }
});

const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addFavorite.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addFavorite.fulfilled, (state, action) => {
      state.isLoading = false;
      toast.success("Success add to your Favorites");
    });
    builder.addCase(addFavorite.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
    builder.addCase(fetchFavorites.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFavorites.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.favorites = payload;
      }
    });
    builder.addCase(fetchFavorites.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
    builder.addCase(deleteFavorite.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteFavorite.fulfilled, (state, action) => {
      state.isLoading = false;
      toast.success("Movie delete from favorites");
    });
    builder.addCase(deleteFavorite.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export default favorites.reducer;
