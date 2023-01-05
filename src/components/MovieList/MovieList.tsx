import { LoadingBar, MovieCard, Title } from "components";
import { IMovie } from "types";
import { Fallback, StyledMovieList, Image } from "./styles";

interface IProps {
  movies: IMovie[] | null;
  isLoading: boolean;
}
export const MovieList = ({ movies, isLoading }: IProps) => {
  if (isLoading) return <LoadingBar />;
  if (!movies) {
    return (
      <Fallback>
        <Image />
        <Title variant={"h3"} text={"Empty state text"} />
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
