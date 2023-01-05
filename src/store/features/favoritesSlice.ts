import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "types";

interface IFavoritesState {
  favorites: IMovie[] | null;
}

const initialState: IFavoritesState = {
  favorites: null,
};

const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<IMovie>) => {
      if (state.favorites) state.favorites.push(payload);
    },
    deleteFavorite: (state, { payload }: PayloadAction<string>) => {
      if (state.favorites)
        state.favorites = state.favorites.filter((movie) => movie.imdbID !== payload);
    },
  },
});

export default favorites.reducer;

export const { addFavorite, deleteFavorite } = favorites.actions;
