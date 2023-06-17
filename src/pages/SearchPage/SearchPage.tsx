import { Button, MovieList } from "components";
import { useEffect, useState } from "react";
import { fetchSearchMovies, getSearchMovies, useAppDispatch, useAppSelector } from "store";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { MainPageBlock } from "ui";
import { PAGE_ELEMENTS } from "config";

export const SearchPage = () => {
  const { title } = useParams();
  const [searchParams] = useSearchParams();
  const years = searchParams.get("years");
  const type = searchParams.get("type");
  const genres = searchParams.get("genres");
  const [elementCount, setElementCount] = useState<number>(PAGE_ELEMENTS);
  const handleShowMore = () => setElementCount((prevPage) => prevPage + PAGE_ELEMENTS);
  const dispatch = useAppDispatch();
  useEffect(() => {
    title && dispatch(fetchSearchMovies({ title, type, years, genres }));
  }, [dispatch, title, years, type, genres]);
  const { movies, isLoading, error } = useAppSelector(getSearchMovies);
  return (
    <MainPageBlock>
      <MovieList movies={movies.slice(0, elementCount)} isLoading={isLoading} error={error} />
      {!error && !isLoading && elementCount < movies.length && (
        <Button text="Show more" type="button" variant="secondary" onClick={handleShowMore} />
      )}
    </MainPageBlock>
  );
};
