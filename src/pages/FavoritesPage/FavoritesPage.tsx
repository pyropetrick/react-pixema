import { LoadingBar, MovieCard, Title } from "components";
import { useEffect } from "react";
import { fetchFavorites, getFavorites, useAppDispatch, useAppSelector } from "store";
import { Fallback, FavoriteList, Image } from "./styles";

export const FavoritesPage = () => {
  const { favorites, isLoading } = useAppSelector(getFavorites);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);
  if (isLoading) return <LoadingBar />;
  if (!favorites.length) {
    return (
      <Fallback>
        <Image />
        <Title variant={"h3"} text={"Favorites is empty"} />
      </Fallback>
    );
  }
  return (
    <FavoriteList>
      {favorites &&
        favorites.map(({ imdbID, title, poster, genres, imdbRating }) => (
          <MovieCard
            key={imdbID}
            title={title}
            img={poster}
            id={imdbID}
            genres={genres}
            rating={imdbRating}
            favorite
          />
        ))}
    </FavoriteList>
  );
};
