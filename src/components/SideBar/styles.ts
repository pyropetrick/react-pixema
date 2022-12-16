import { Color } from "config";
import styled from "styled-components";
import { Media, typography } from "ui";

export const StyledSideBar = styled.aside`
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  ${Media.MD} {
    display: none;
  }
`;

export const Copyright = styled.p`
  ${typography.b};
  color: ${Color.LIGHT};
  align-self: center;
`;
