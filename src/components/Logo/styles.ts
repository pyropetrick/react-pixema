import { LogoIcon } from "assets";
import styled from "styled-components";
import { Media } from "ui";

export const Image = styled(LogoIcon)`
  width: 158px;
  height: 40px;
  ${Media.SM} {
    width: 147px;
    height: 38px;
  }
`;
