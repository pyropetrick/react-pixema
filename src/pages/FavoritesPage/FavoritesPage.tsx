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
    <FavoriteList
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
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
