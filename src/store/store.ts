import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "store/features/themeSlice";
import moviesReducer from "store/features/moviesSlice";
import trendsReducer from "store/features/trendsSlice";
import movieReducer from "store/features/movieSlice";
import favoritesReducer from "./features/favoritesSlice";
import userReducer from "./features/userSlice";
import searchReducer from "./features/searchSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    movies: moviesReducer,
    trends: trendsReducer,
    movie: movieReducer,
    favorites: favoritesReducer,
    user: userReducer,
    searchMovies: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
