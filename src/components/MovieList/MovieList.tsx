import { Fallback, LoadingBar, MovieCard } from "components";
import { IMovie } from "types";
import { StyledMovieList } from "./styles";

interface IProps {
  movies: IMovie[];
  isLoading: boolean;
  error?: string | null;
}
export const MovieList = ({ movies, isLoading, error }: IProps) => {
  if (isLoading) return <LoadingBar />;
  if (movies.length === 0 || error) {
    return <Fallback text="Movies not found" />;
  }
  return (
    <StyledMovieList
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      {movies &&
        movies.map(({ imdbID, title, poster }) => (
          <MovieCard key={imdbID} title={title} img={poster} id={imdbID} />
        ))}
    </StyledMovieList>
  );
};
