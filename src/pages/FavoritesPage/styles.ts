import styled from "styled-components";
import { Media } from "ui";
import { fallback } from "assets";
import { Color } from "config";

export const FavoriteList = styled.ul`
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
  ${Media.MD} {
    width: 336px;
    height: 298px;
  }
  ${Media.SM} {
    width: 202px;
    height: 180px;
  }
`;
