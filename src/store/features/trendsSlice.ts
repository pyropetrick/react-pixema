import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { moviesApi } from "services";
import { IResponseSearchAPI, ISearchMovie } from "types";
interface ITrendsState {
  trends: ISearchMovie[];
  isLoading: boolean;
  error: string | null;
}
export const fetchTrends = createAsyncThunk<IResponseSearchAPI, void, { rejectValue: string }>(
  "trends/fetchTrends",
  async (_, { rejectWithValue }) => {
    try {
      return await moviesApi.getSearchMovies({ groups: "now-playing-us" });
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
      state.trends = payload.results;
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
