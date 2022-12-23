import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "store/slices/themeSlice";
import moviesReducer from "store/slices/moviesSlice";
import trendsReducer from "store/slices/trendsSlice";
import movieReducer from "store/slices/movieSlice";
import favoritesReducer from "./slices/favoritesSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    movies: moviesReducer,
    trends: trendsReducer,
    movie: movieReducer,
    favorites: favoritesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
