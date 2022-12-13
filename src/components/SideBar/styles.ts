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

export const Image = styled.img`
  width: 158px;
  height: 40px;
  ${Media.SM} {
    width: 147px;
    height: 38px;
  }
`;
export const Copyright = styled.p`
  ${typography.b};
  color: ${Color.LIGHT};
  align-self: end;
`;
