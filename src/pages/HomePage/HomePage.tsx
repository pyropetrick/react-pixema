import { useEffect, useState } from "react";
import { Button, MovieList } from "components";
import { fetchHomeMovies, getMovies, useAppDispatch, useAppSelector } from "store";
import { MainPageBlock } from "ui";

export const HomePage = () => {
  const { movies, isLoading, error } = useAppSelector(getMovies);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const handleShowMore = () => setPage((prevPage) => ++prevPage);
  useEffect(() => {
    dispatch(fetchHomeMovies());
  }, [dispatch]);
  return (
    <MainPageBlock>
      <MovieList movies={movies} isLoading={isLoading} error={error} />
      {!isLoading && !!movies.length && (
        <Button text="Show more" type="button" variant="secondary" onClick={handleShowMore} />
      )}
    </MainPageBlock>
  );
};
