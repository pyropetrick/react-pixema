import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { moviesApi, transformMovies } from "services";
import { IMovie, IResponseSearchAPI } from "types";
interface ITrendsState {
  trends: IMovie[];
  isLoading: boolean;
  error: string | null;
}
export const fetchTrends = createAsyncThunk<IResponseSearchAPI, number, { rejectValue: string }>(
  "trends/fetchTrends",
  async (page, { rejectWithValue }) => {
    try {
      return await moviesApi.getSearchMovies({ name: "superman", type: "movie", page });
    } catch (error) {
      const errorResponse = error as AxiosError;
      return rejectWithValue(errorResponse.message);
    }
  },
);

const initialState: ITrendsState = {
  trends: [],
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
      state.error = null;
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
        toast.error(payload);
      }
    });
  },
});

export default trends.reducer;
