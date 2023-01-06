import { Button, MovieList } from "components";
import { useEffect, useState } from "react";
import { fetchSearchMovies, getSearchMovies, useAppDispatch, useAppSelector } from "store";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { MainPageBlock } from "ui";

export const SearchPage = () => {
  const { name } = useParams();
  const [searchParams] = useSearchParams();
  const year = searchParams.get("year");
  const type = searchParams.get("type");
  const [page, setPage] = useState<number>(1);
  const handleShowMore = () => setPage((prevPage) => ++prevPage);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (year && type && name) {
      dispatch(fetchSearchMovies({ name, year, type, page }));
    } else name && dispatch(fetchSearchMovies({ name, page }));
  }, [dispatch, name, page, year, type]);
  const { movies, isLoading } = useAppSelector(getSearchMovies);
  return (
    <MainPageBlock>
      <MovieList movies={movies} isLoading={isLoading} />
      {!isLoading && !!movies.length && (
        <Button text="Show more" type="button" variant="secondary" onClick={handleShowMore} />
      )}
    </MainPageBlock>
  );
};
