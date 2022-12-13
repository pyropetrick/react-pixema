import { css } from "styled-components";
import { Color } from "../config";

export const InputCSS = css`
  padding: 16px;
  padding-left: 20px;
  background-color: ${Color.SECONDARY_BG};
  border: 2px solid transparent;
  border-radius: 10px;
  color: ${Color.PRIMARY_TEXT};
  &::placeholder {
    color: ${Color.SECONDARY};
  }
  &:focus {
    border-color: ${Color.PRIMARY};
  }
  &:disabled {
    background-color: ${Color.SECONDARY};
    &::placeholder {
      color: ${Color.LIGHT};
    }
  }
  html[theme="light"] & {
    border: 2px solid ${Color.LIGHT};
  }
`;
