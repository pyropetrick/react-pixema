import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { moviesApi, transformMovies } from "services";
import { IMovie, IRequestOption, IResponseSearchAPI } from "types";

export const fetchSearchMovies = createAsyncThunk<
  IResponseSearchAPI | undefined,
  IRequestOption,
  { rejectValue: string }
>("movies/fetchSearchMovies", async (options, { rejectWithValue }) => {
  try {
    return await moviesApi.getSearchMovies(options);
  } catch (error) {
    const errorResponse = error as AxiosError;
    rejectWithValue(errorResponse.message);
  }
});

interface IMoviesState {
  movies: IMovie[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

const searchMovies = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSearchMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSearchMovies.fulfilled, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = null;
        state.movies = transformMovies(payload.Search);
      }
    });
    builder.addCase(fetchSearchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchMovies.reducer;
