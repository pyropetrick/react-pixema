import { Color } from "config";
import styled from "styled-components";
import { typography } from "ui";

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${typography.s2};
  color: ${Color.PRIMARY_TEXT};
`;
