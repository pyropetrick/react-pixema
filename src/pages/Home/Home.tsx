import { useEffect } from "react";
import { Button, MainLayout, MovieList } from "components";
import { StyledHome } from "./styles";
import { fetchHomeMovies, getMovies, useAppDispatch, useAppSelector } from "store";

export const Home = () => {
  const { movies, isLoading } = useAppSelector(getMovies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHomeMovies({ name: "batman", type: "movie" }));
  }, [dispatch]);
  return (
    <MainLayout>
      <StyledHome>
        <MovieList movies={movies} isLoading={isLoading} />
        <Button
          text="Show more"
          type="button"
          variant="secondary"
          onClick={() => console.log("button")}
        />
      </StyledHome>
    </MainLayout>
  );
};
