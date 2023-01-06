import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovieInfo } from "types";
import { RootState } from "store";
import {
  addFavoriteToStore,
  FirebaseErrorMessage,
  getFavoritesFromStore,
  getFirebaseErrorMessage,
} from "services";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

interface IFavoritesState {
  favorites: IMovieInfo[] | null;
  isLoading: boolean;
}

const initialState: IFavoritesState = {
  favorites: null,
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

const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addFavorite.fulfilled, (state, action) => {
      toast.success("Success add to your Favorites");
    });
    builder.addCase(addFavorite.rejected, (state, { payload }) => {
      if (payload) toast.error(payload);
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
  },
});

export default favorites.reducer;
