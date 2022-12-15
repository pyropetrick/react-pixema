import styled from "styled-components";
import { Media } from "../../ui";

export const StyledMovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-height: 600px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  ${Media.MD} {
    gap: 32px;
  }
`;
