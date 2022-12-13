import { LoadingBar, MovieCard } from "components";
import { IMovie } from "types";
import { StyledMovieList } from "./styles";

interface IProps {
  movies: IMovie[];
  isLoading: boolean;
}
export const MovieList = ({ movies, isLoading }: IProps) => {
  if (isLoading) return <LoadingBar />;
  return (
    <StyledMovieList>
      {movies &&
        movies.map(({ imdbID, title, poster }) => (
          <MovieCard key={imdbID} title={title} img={poster} id={imdbID} />
        ))}
    </StyledMovieList>
  );
};
