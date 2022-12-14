import styled from "styled-components";
import { Media } from "ui";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  & button {
    align-self: center;
    margin-top: 64px;
    padding: 8px 24px;
    border-radius: 40px;
    ${Media.MD} {
      margin-top: 56px;
    }
    ${Media.SM} {
      margin-top: 48px;
    }
  }
`;
