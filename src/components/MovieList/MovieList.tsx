import { LoadingBar, MovieCard, Title } from "components";
import { IMovie } from "types";
import { Fallback, StyledMovieList, Image } from "./styles";

interface IProps {
  movies: IMovie[];
  isLoading: boolean;
}
export const MovieList = ({ movies, isLoading }: IProps) => {
  if (isLoading) return <LoadingBar />;
  if (movies.length === 0) {
    return (
      <Fallback>
        <Image />
        <Title variant={"h3"} text={"Movies not found"} />
      </Fallback>
    );
  }
  return (
    <StyledMovieList>
      {movies &&
        movies.map(({ imdbID, title, poster }) => (
          <MovieCard key={imdbID} title={title} img={poster} id={imdbID} />
        ))}
    </StyledMovieList>
  );
};
