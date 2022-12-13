import { Color } from "config";
import styled from "styled-components";
import { Media, typography, InputCSS } from "ui";

export const StyledForm = styled.form`
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
export const Input = styled.input`
  ${InputCSS}
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${Media.SM} {
    gap: 20px;
  }
`;

export const TextLink = styled.p`
  ${typography.b}
`;
