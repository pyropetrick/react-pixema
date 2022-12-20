import styled from "styled-components";
import { Color } from "config";
import { Media, typography } from "ui";

export const StyledDetailsMoviePage = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr;
  grid-column-gap: 42px;
`;
export const Details = styled.div``;

export const PosterWrapper = styled.div``;

export const Poster = styled.img`
  height: 356px;
  width: 266px;
  border-radius: 20px;
`;

export const Genres = styled.ul`
  color: ${Color.LIGHT};
`;

export const WrapperRate = styled.div<{ $greenVariant?: boolean }>`
  background-color: ${({ $greenVariant }) => ($greenVariant ? Color.GREEN : Color.GRAPHITE)};
  color: ${Color.WHITE};
  border-radius: 6px;
  padding: 2px 8px;
  ${typography.s3};
  svg {
    margin-right: 5px;
  }
`;

export const Ratings = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 26px;
`;

export const Plot = styled.p`
  ${typography.b};
  margin-top: 42px;
  margin-bottom: 40px;
`;

export const EncyclopedicTable = styled.table`
  border-collapse: collapse;
`;

export const EncyclopedicRow = styled.tr``;

export const TextCell = styled.td<{ variant?: "title" }>`
  padding: 0 40px 20px 0;
  ${typography.b};
  color: ${({ variant }) => (variant === "title" ? Color.LIGHT : Color.PRIMARY_TEXT)};
`;
