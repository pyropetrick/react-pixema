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
      <RouterLink to={generatePath(ROUTE.MOVIE, { id })}>
        <Poster src={img} alt={`poster ${title}`} />
        <Title>{title}</Title>
      </RouterLink>
    </StyledMovieCard>
  );
};
