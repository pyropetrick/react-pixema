import { createSelector } from "reselect";
import { RootState } from "store";

const selectMovie = (state: RootState) => state.movie;

export const getMovie = createSelector(selectMovie, (state) => state);
