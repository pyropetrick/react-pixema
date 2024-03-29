import { useParams } from "react-router";
import {
  useAppSelector,
  useAppDispatch,
  getMovie,
  getMovieById,
  addFavorite,
  getUser,
} from "store";
import { useEffect } from "react";
import {
  Details,
  EncyclopedicTable,
  FavoriteButton,
  Genres,
  Plot,
  Poster,
  PosterWrapper,
  Ratings,
  StyledDetailsMoviePage,
  TextCell,
  WrapperRate,
} from "./styles";
import { Fallback, LoadingBar, Title } from "components";
import { BookMarkIcon, IMDBIcon } from "assets";

export const DetailsMoviePage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { movie, isLoading, error } = useAppSelector(getMovie);
  const { isAuth } = useAppSelector(getUser);
  useEffect(() => {
    id && dispatch(getMovieById(id));
  }, [dispatch, id]);
  const tableValues = [
    { title: "Year", value: movie.year },
    { title: "Released", value: movie.released },
    { title: "BoxOffice", value: movie.boxOffice },
    { title: "Country", value: movie.country },
    { title: "Stars", value: movie.stars },
    { title: "Director", value: movie.director },
    { title: "Writers", value: movie.writer },
  ];
  const handleFavorite = () => {
    dispatch(addFavorite(movie));
  };
  if (isLoading) return <LoadingBar />;
  if (error) return <Fallback text="Movie is not found" />;
  return (
    <StyledDetailsMoviePage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <PosterWrapper>
        {movie.poster === "N/A" ? (
          <Poster
            src={`https://via.placeholder.com/250.png?text=${movie.title}`}
            alt="fallback image"
          />
        ) : (
          <Poster src={movie.poster} alt={`poster ${movie.title}`} loading="lazy" />
        )}
        <FavoriteButton onClick={handleFavorite} disabled={!isAuth}>
          <BookMarkIcon />
        </FavoriteButton>
      </PosterWrapper>
      <Details>
        <Genres>{movie.genres && movie.genres.map((genre) => <p key={genre}>{genre}</p>)}</Genres>
        <Title text={movie.title} variant="h1" />
        <Ratings>
          <WrapperRate $greenVariant>{movie.imdbRating}</WrapperRate>
          <WrapperRate>
            <IMDBIcon /> {movie.imdbRating}
          </WrapperRate>
          <WrapperRate>{movie.runTime}</WrapperRate>
        </Ratings>
        <Plot>{movie.plot}</Plot>
        <EncyclopedicTable>
          <tbody>
            {tableValues.map((row) => (
              <tr key={row.title}>
                <TextCell variant="title">{row.title}</TextCell>
                <TextCell>{row.value}</TextCell>
              </tr>
            ))}
          </tbody>
        </EncyclopedicTable>
      </Details>
    </StyledDetailsMoviePage>
  );
};
