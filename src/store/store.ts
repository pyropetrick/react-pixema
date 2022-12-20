import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "store/slices/themeSlice";
import moviesReducer from "store/slices/moviesSlice";
import trendsReducer from "store/slices/trendsSlice";
import movieReducer from "store/slices/movieSlice";
import favoritesReducer from "store/slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    movies: moviesReducer,
    trends: trendsReducer,
    movie: movieReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
