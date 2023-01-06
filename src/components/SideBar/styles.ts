import { Color } from "config";
import styled from "styled-components";
import { typography } from "ui";

export const StyledSideBar = styled.aside`
  display: grid;
  grid-template-rows: 40px 1fr 24px;
  grid-row-gap: 64px;
`;

export const Copyright = styled.p`
  ${typography.b};
  color: ${Color.LIGHT};
  align-self: center;
`;
