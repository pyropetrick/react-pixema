import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { moviesApi, transformMovies } from "services";
import { IMovie, IResponseSearchAPI } from "types";
interface ITrendsState {
  trends: IMovie[] | null;
  isLoading: boolean;
  error: string | null;
}
export const fetchTrends = createAsyncThunk<IResponseSearchAPI, null, { rejectValue: string }>(
  "trends/fetchTrends",
  async (_, { rejectWithValue }) => {
    try {
      return await moviesApi.getSearchMovies({ name: "2022", type: "movie" });
    } catch (error) {
      const errorResponse = error as AxiosError;
      return rejectWithValue(errorResponse.message);
    }
  },
);

const initialState: ITrendsState = {
  trends: null,
  isLoading: false,
  error: null,
};

const trends = createSlice({
  name: "trends",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrends.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTrends.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.trends = transformMovies(payload.Search);
    });
    builder.addCase(fetchTrends.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default trends.reducer;
