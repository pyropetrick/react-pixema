import { createSelector } from "reselect";
import { RootState } from "store";

const selectMovies = (state: RootState) => state.movies;

export const getMovies = createSelector(selectMovies, (state) => state);
