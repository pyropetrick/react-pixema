import { Button, MovieList } from "components";
import { useEffect } from "react";
import { fetchSearchMovies, getSearchMovies, useAppDispatch, useAppSelector } from "store";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

export const SearchPage = () => {
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const year = searchParams.get("year");
  const type = searchParams.get("type");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (year && type && name) {
      dispatch(fetchSearchMovies({ name, year, type }));
    } else name && dispatch(fetchSearchMovies({ name }));
  }, [dispatch, name]);
  const { movies, isLoading } = useAppSelector(getSearchMovies);
  return (
    <>
      <MovieList movies={movies} isLoading={isLoading} />
      <Button text="Show more" type="button" variant="secondary" onClick={() => {}} />
    </>
  );
};
