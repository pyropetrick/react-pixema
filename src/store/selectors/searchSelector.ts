import { createSelector } from "reselect";
import { RootState } from "store";

const selectSearchMovies = (state: RootState) => state.searchMovies;

export const getSearchMovies = createSelector(selectSearchMovies, (state) => state);
