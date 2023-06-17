import { ROUTE } from "router";
import { generatePath } from "react-router-dom";
import { StyledMovieCard, Poster, Title, Genres, Rate, FavoriteButton } from "./styles";
import { RouterLink } from "components";
import { BookMarkIcon } from "assets";
import { deleteFavorite, useAppDispatch } from "store";
import { memo } from "react";

interface IProps {
  id: string;
  title: string;
  img: string;
  genres?: string[];
  rating?: string;
  favorite?: boolean;
}
export const MovieCard = memo(({ id, title, img, genres, rating, favorite }: IProps) => {
  const dispatch = useAppDispatch();
  const handleFavorite = () => {
    dispatch(deleteFavorite(id));
  };
  return (
    <StyledMovieCard>
      {rating && <Rate>{rating}</Rate>}
      {favorite && (
        <FavoriteButton onClick={handleFavorite}>
          <BookMarkIcon />
        </FavoriteButton>
      )}
      <RouterLink to={generatePath(`${ROUTE.HOME + ROUTE.MOVIE}`, { id })}>
        {img === "N/A" ? (
          <Poster src={`https://via.placeholder.com/250.png?text=${title}`} alt="fallback image" />
        ) : (
          <Poster src={img} alt={`poster ${title}`} width="266" height="357" loading="lazy" />
        )}
        <Title>{title}</Title>
        {genres && (
          <Genres>
            {genres.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </Genres>
        )}
      </RouterLink>
    </StyledMovieCard>
  );
});
