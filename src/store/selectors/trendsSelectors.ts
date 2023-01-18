import { createSelector } from "reselect";
import { RootState } from "store";

const selectTrends = (state: RootState) => state.trends;

export const getTrends = createSelector(selectTrends, (state) => state);
