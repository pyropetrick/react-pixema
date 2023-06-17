import { createSelector } from "reselect";
import { RootState } from "store";

const selectUser = (state: RootState) => state.user;

export const getUser = createSelector(selectUser, (state) => state);
