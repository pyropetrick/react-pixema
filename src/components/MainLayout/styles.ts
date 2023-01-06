import styled from "styled-components";
import { Media } from "ui";

export const StyledMainLayout = styled.div`
  min-height: 100vh;
  padding: 40px;
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 146px;
  ${Media.LG} {
    height: 100%;
    padding: 40px 60px;
    grid-template-columns: 1fr;
  }
  ${Media.SM} {
    align-items: center;
    padding: 15px;
    margin: 0 auto;
    /* padding: 32px 24px 48px; */
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;
