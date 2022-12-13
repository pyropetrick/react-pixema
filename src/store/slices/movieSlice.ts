import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { moviesApi, transformMovieInfo } from "services";
import { IMovieInfo, IMovieInfoAPI } from "types";

interface IMovieState {
  movie: IMovieInfo;
  isLoading: boolean;
  error: null | string;
}

export const getMovieById = createAsyncThunk<IMovieInfoAPI, string, { rejectValue: string }>(
  "movies/getMovie",
  async (id: string, { rejectWithValue }) => {
    try {
      return await moviesApi.getMovie(id);
    } catch (error) {
      const errorResponse = error as AxiosError;
      return rejectWithValue(errorResponse.message);
    }
  },
);

const initialState: IMovieState = {
  movie: {} as IMovieInfo,
  isLoading: false,
  error: null,
};

const movie = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMovieById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMovieById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movie = transformMovieInfo(payload);
    });
    builder.addCase(getMovieById.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default movie.reducer;
