import styled from "styled-components";
import { Color } from "config";
import { Media, typography } from "ui";

export const StyledMovieCard = styled.li`
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
  margin-bottom: 24px;
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
  transition: 0.3s color ease-in-out;
  &:hover {
    color: ${Color.PRIMARY};
    cursor: pointer;
  }
`;
