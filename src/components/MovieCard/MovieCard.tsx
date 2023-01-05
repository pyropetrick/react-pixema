import { ROUTE } from "router";
import { generatePath } from "react-router-dom";
import { StyledMovieCard, Poster, Title, Genres, Rate, FavoriteButton } from "./styles";
import { RouterLink } from "components";
import { BookMarkIcon } from "assets";
import { toast } from "react-toastify";

interface IProps {
  id: string;
  title: string;
  img: string;
  genres?: string[];
  rating?: string;
  favorite?: boolean;
}
export const MovieCard = ({ id, title, img, genres, rating, favorite }: IProps) => {
  const handleFavorite = () => {
    toast.success(`Delete ${title} from Favorites`);
  };
  return (
    <StyledMovieCard>
      {rating && <Rate>{rating}</Rate>}
      {favorite && (
        <FavoriteButton onClick={handleFavorite}>
          <BookMarkIcon />
        </FavoriteButton>
      )}
      <RouterLink to={generatePath(`/${ROUTE.MOVIE}`, { id })}>
        {img === "N/A" ? (
          <Poster src={`https://via.placeholder.com/250.png?text=${title}`} alt="fallback image" />
        ) : (
          <Poster src={img} alt={`poster ${title}`} />
        )}
        <Title>{title}</Title>
        {genres && (
          <Genres>
            {genres.map((genre) => (
              <p key={genre}>{genre}</p>
            ))}
          </Genres>
        )}
      </RouterLink>
    </StyledMovieCard>
  );
};
