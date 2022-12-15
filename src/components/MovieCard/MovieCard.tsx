import { ROUTE } from "router";
import { generatePath, Link } from "react-router-dom";
import { StyledMovieCard, Poster, Title } from "./styles";

interface IProps {
  id: string;
  title: string;
  img: string;
}
export const MovieCard = ({ id, title, img }: IProps) => {
  return (
    <StyledMovieCard>
      <Link to={generatePath(ROUTE.MOVIE, { id })}>
        <Poster src={img} alt={`poster ${title}`} />
        <Title>{title}</Title>
      </Link>
    </StyledMovieCard>
  );
};
