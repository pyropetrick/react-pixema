import { useParams } from "react-router";
import { useAppSelector, useAppDispatch, getMovie, getMovieById } from "store";
import { useEffect } from "react";
import {
  Details,
  EncyclopedicRow,
  EncyclopedicTable,
  Genres,
  Plot,
  Poster,
  PosterWrapper,
  Ratings,
  StyledDetailsMoviePage,
  TextCell,
  WrapperRate,
} from "./styles";
import { LoadingBar, Title } from "components";
import { IMDBIcon } from "assets";

export const DetailsMoviePage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { movie, isLoading } = useAppSelector(getMovie);
  useEffect(() => {
    if (id) dispatch(getMovieById(id));
  }, [dispatch, id]);
  const tableValues = [
    { title: "Year", value: movie.year },
    { title: "Released", value: movie.released },
    { title: "BoxOffice", value: movie.boxOffice },
    { title: "Country", value: movie.country },
    { title: "Production", value: movie.production },
    { title: "Actors", value: movie.actors },
    { title: "Director", value: movie.director },
    { title: "Writers", value: movie.writer },
  ];
  if (isLoading) return <LoadingBar />;
  return (
    <StyledDetailsMoviePage>
      <PosterWrapper>
        <Poster src={movie.poster} alt={`poster ${movie.title}`} />
      </PosterWrapper>
      <Details>
        <Genres>
          {movie.genres && movie.genres.map((genre) => <span key={genre}>{genre}</span>)}
        </Genres>
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
              <EncyclopedicRow key={row.title}>
                <TextCell variant="title">{row.title}</TextCell>
                <TextCell>{row.value}</TextCell>
              </EncyclopedicRow>
            ))}
          </tbody>
        </EncyclopedicTable>
      </Details>
    </StyledDetailsMoviePage>
  );
};
