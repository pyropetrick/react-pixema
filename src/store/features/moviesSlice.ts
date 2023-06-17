import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { moviesApi } from "services";
import { IResponseSearchAPI, ISearchMovie } from "types";

export const fetchHomeMovies = createAsyncThunk<IResponseSearchAPI, void, { rejectValue: string }>(
  "movies/fetchHomeMovies",
  async (_, { rejectWithValue }) => {
    try {
      return await moviesApi.getSearchMovies({ groups: "top_250" });
    } catch (error) {
      const errorResponse = error as AxiosError;
      return rejectWithValue(errorResponse.message);
    }
  },
);

interface IMoviesState {
  movies: ISearchMovie[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHomeMovies.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchHomeMovies.fulfilled, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = null;
        state.movies = payload.results;
      }
    });
    builder.addCase(fetchHomeMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
        toast.error(payload);
      }
    });
  },
});

export default movies.reducer;
