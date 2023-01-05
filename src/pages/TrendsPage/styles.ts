import styled from "styled-components";
import { Media } from "ui";

export const StyledTrends = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  & button {
    justify-self: center;
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
