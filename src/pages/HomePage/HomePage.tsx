import { useEffect } from "react";
import { Button, MovieList } from "components";
import { StyledHome } from "./styles";
import { fetchHomeMovies, getMovies, useAppDispatch, useAppSelector } from "store";

export const HomePage = () => {
  const { movies, isLoading } = useAppSelector(getMovies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHomeMovies({ name: "batman", type: "movie" }));
  }, [dispatch]);
  return (
    <>
      <StyledHome>
        <MovieList movies={movies} isLoading={isLoading} />
      </StyledHome>
      <Button
        text="Show more"
        type="button"
        variant="secondary"
        onClick={() => console.log("button")}
      />
    </>
  );
};
