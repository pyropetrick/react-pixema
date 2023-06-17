import { useEffect, useState } from "react";
import { Button, MovieList } from "components";
import { fetchHomeMovies, getMovies, useAppDispatch, useAppSelector } from "store";
import { MainPageBlock } from "ui";
import { PAGE_ELEMENTS } from "config";

export const HomePage = () => {
  const { movies, isLoading, error } = useAppSelector(getMovies);
  const dispatch = useAppDispatch();
  const [elementCount, setElementCount] = useState<number>(PAGE_ELEMENTS);
  const handleShowMore = () => setElementCount((prevPage) => prevPage + PAGE_ELEMENTS);
  useEffect(() => {
    dispatch(fetchHomeMovies());
  }, [dispatch]);
  return (
    <MainPageBlock>
      <MovieList movies={movies.slice(0, elementCount)} isLoading={isLoading} error={error} />
      {!isLoading && !!movies.length && elementCount < movies.length && (
        <Button text="Show more" type="button" variant="secondary" onClick={handleShowMore} />
      )}
    </MainPageBlock>
  );
};
