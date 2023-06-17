import { createSelector } from "reselect";
import { RootState } from "store";

const selectTheme = (state: RootState) => state.theme;

export const getTheme = createSelector(selectTheme, (state) => state);
