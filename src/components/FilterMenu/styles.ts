import { Color } from "config";
import styled from "styled-components";
import { Media } from "ui";

export const StyledFilterMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 6fr 3fr;
  ${Media.MD} {
    grid-template-columns: 1fr 4fr;
  }
  ${Media.SM} {
    grid-template-columns: 0 1fr;
  }
`;

export const Background = styled.div`
  background-color: ${Color.DARK};
  opacity: 0.5;
`;

export const Filters = styled.form`
  display: grid;
  grid-template-rows: 50px 1fr 60px;
  grid-gap: 40px;
  background-color: ${Color.DARK};
  border-radius: 10px 0 0 10px;
  padding: 48px 40px;
  ${Media.SM} {
    grid-template-rows: 50px 1fr 120px;
  }
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GroupButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  ${Media.SM} {
    flex-direction: column-reverse;
    align-items: stretch;
    gap: 16px;
  }
`;
