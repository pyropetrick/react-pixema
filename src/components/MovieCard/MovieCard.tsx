import { ROUTE } from "router";
import { generatePath } from "react-router-dom";
import { StyledMovieCard, Poster, Title } from "./styles";
import { RouterLink } from "components";

interface IProps {
  id: string;
  title: string;
  img: string;
}
export const MovieCard = ({ id, title, img }: IProps) => {
  return (
    <StyledMovieCard>
      <RouterLink to={generatePath(`/${ROUTE.MOVIE}`, { id })}>
        {img === "N/A" ? (
          <Poster src={`https://via.placeholder.com/250.png?text=${title}`} alt="fallback image" />
        ) : (
          <Poster src={img} alt={`poster ${title}`} />
        )}
        <Title>{title}</Title>
      </RouterLink>
    </StyledMovieCard>
  );
};
