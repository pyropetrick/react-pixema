import { Color } from "config";
import styled from "styled-components";
import { Media } from "ui";

export const Form = styled.form`
  background-color: ${Color.BLOCK_BG};
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
  border-radius: 10px;
  ${Media.SM} {
    padding: 24px;
    gap: 32px;
  }
`;
