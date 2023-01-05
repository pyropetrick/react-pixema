import { Color } from "config";
import styled from "styled-components";
import { Media, typography } from "ui";

export const StyledMovieCard = styled.li`
  position: relative;
  max-width: 266px;
  max-height: 433px;
  ${Media.MD} {
    max-width: 208px;
    max-height: 379px;
  }
  ${Media.SM} {
    max-width: 272px;
    max-height: 437px;
  }
`;

export const Poster = styled.img`
  width: 266px;
  height: 357px;
  border-radius: 20px;
  margin-bottom: 8px;
  ${Media.MD} {
    width: 208px;
    height: 279px;
  }
  ${Media.SM} {
    margin-bottom: 20px;
    width: 272px;
    height: 365px;
  }
`;
export const Title = styled.h6`
  ${typography.s2};
`;

export const Genres = styled.div`
  color: ${Color.LIGHT};
  display: flex;
  gap: 13px;
  ${typography.s3};
  font-weight: 500;
  p {
    position: relative;
    &:after {
      content: "\u2022";
      display: block;
      position: absolute;
      right: -10px;
      top: 0;
    }
    &:last-child:after {
      display: none;
    }
  }
`;

export const Rate = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: ${Color.GREEN};
  color: ${Color.WHITE};
  border-radius: 6px;
  padding: 2px 8px;
  ${typography.s3};
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${Color.GRAPHITE};
  border: none;
  border-radius: 6px;
  padding: 2px 8px;

  path {
    fill: ${Color.PRIMARY};
    transition: 0.3s fill ease-in-out;
  }
  &:hover {
    cursor: pointer;
    path {
      fill: ${Color.PRIMARY_LIGHT};
    }
  }
`;
