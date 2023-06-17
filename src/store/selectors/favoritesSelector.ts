import { createSelector } from "reselect";
import { RootState } from "store";

const selectFavorites = (state: RootState) => state.favorites;

export const getFavorites = createSelector(selectFavorites, (state) => state);
