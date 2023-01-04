import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "types";

interface IFavoritesState {
  favorites: IMovie[];
}

const initialState: IFavoritesState = {
  favorites: [],
};

const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<IMovie>) => {
      state.favorites.push(payload);
    },
    deleteFavorite: (state, { payload }: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== payload);
    },
  },
});

export default favorites.reducer;

export const { addFavorite, deleteFavorite } = favorites.actions;
