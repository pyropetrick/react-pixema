import { MovieList } from "components";
import { getFavorites, useAppSelector } from "store";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorites);
  return <MovieList movies={favorites} isLoading={false} />;
};
