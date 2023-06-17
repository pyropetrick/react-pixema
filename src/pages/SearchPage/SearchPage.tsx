import { Button, MovieList } from "components";
import { useEffect, useState } from "react";
import { fetchSearchMovies, getSearchMovies, useAppDispatch, useAppSelector } from "store";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { MainPageBlock } from "ui";

export const SearchPage = () => {
  const { title } = useParams();
  const [searchParams] = useSearchParams();
  const years = searchParams.get("years");
  const type = searchParams.get("type");
  const genres = searchParams.get("genres");
  const [page, setPage] = useState<number>(1);
  const handleShowMore = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    setPage((prevPage) => ++prevPage);
  };
  const dispatch = useAppDispatch();
  useEffect(() => {
    title && dispatch(fetchSearchMovies({ title, type, years, genres }));
  }, [dispatch, title, page, years, type, genres]);
  const { movies, isLoading, error } = useAppSelector(getSearchMovies);
  return (
    <MainPageBlock>
      <MovieList movies={movies} isLoading={isLoading} error={error} />
      {!error && !isLoading && movies.length >= 9 && (
        <Button text="Show more" type="button" variant="secondary" onClick={handleShowMore} />
      )}
    </MainPageBlock>
  );
};
