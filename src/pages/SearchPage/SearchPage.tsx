import { Button, MovieList } from "components";
import { useEffect } from "react";
import { fetchSearchMovies, getSearchMovies, useAppDispatch, useAppSelector } from "store";
import { useParams } from "react-router";

export const SearchPage = () => {
  const { name } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    name && dispatch(fetchSearchMovies({ name }));
  }, [dispatch, name]);
  const { movies, isLoading } = useAppSelector(getSearchMovies);
  return (
    <>
      <MovieList movies={movies} isLoading={isLoading} />
      <Button text="Show more" type="button" variant="secondary" onClick={() => {}} />
    </>
  );
};
