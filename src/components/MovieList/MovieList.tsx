import { Fallback, LoadingBar, MovieCard } from "components";
import { ISearchMovie } from "types";
import { StyledMovieList } from "./styles";

interface IProps {
  movies: ISearchMovie[];
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
        movies.map(({ id, imDbRating, title, image }) => (
          <MovieCard key={id} title={title} img={image} id={id} rating={imDbRating} />
        ))}
    </StyledMovieList>
  );
};
