import styled from "styled-components";
import { Media } from "ui";

export const StyledMainLayout = styled.div`
  padding: 60px;
  padding-top: 40px;
  padding-bottom: 0;
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 146px;
  height: 100vh;
  ${Media.MD} {
    padding: 40px;
    height: 100%;
    grid-template-columns: 1fr;
  }
  ${Media.SM} {
    padding: 32px 24px 48px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;
