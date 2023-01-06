import styled from "styled-components";
import { Media } from "ui";
import { fallback } from "assets";
import { Color } from "config";

export const StyledMovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  ${Media.LG} {
    gap: 32px;
  }
  ${Media.SM} {
    gap: 32px 0;
    justify-content: center;
  }
`;

export const Fallback = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: ${Color.SECONDARY};
`;

export const Image = styled.div`
  width: 400px;
  height: 400px;
  background: url(${fallback}) center no-repeat;
  background-size: contain;
  ${Media.LG} {
    width: 336px;
    height: 298px;
  }
  ${Media.SM} {
    width: 202px;
    height: 180px;
  }
`;
