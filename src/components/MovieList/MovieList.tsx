import { LoadingBar, MovieCard, Title } from "components";
import { IMovie } from "types";
import { Fallback, StyledMovieList, Image } from "./styles";

interface IProps {
  movies: IMovie[];
  isLoading: boolean;
  error?: string | null;
}
export const MovieList = ({ movies, isLoading, error }: IProps) => {
  if (isLoading) return <LoadingBar />;
  if (movies.length === 0 || error) {
    return (
      <Fallback>
        <Image />
        <Title variant={"h3"} text={"Movies not found"} />
      </Fallback>
    );
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
