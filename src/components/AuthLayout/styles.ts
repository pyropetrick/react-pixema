import { Color } from "config";
import styled from "styled-components";
import { Media, typography } from "ui";

export const StyledAuthLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4fr 1fr;
  grid-row-gap: 40px;
  height: 100%;
  padding: 48px 62px 64px;
  ${Media.MD} {
    padding: 47px 40px 56px;
    grid-template-columns: 1fr;
  }
  ${Media.SM} {
    padding: 32px 24px 48px;
    grid-template-rows: 1fr 6fr 1fr;
    grid-row-gap: 20px;
  }
`;

export const Image = styled.img`
  width: 158px;
  height: 40px;
  ${Media.SM} {
    width: 147px;
    height: 38px;
    justify-self: center;
  }
`;
export const Copyright = styled.p`
  ${typography.b};
  color: ${Color.PRIMARY_TEXT};
  justify-self: center;
  align-self: center;
`;
export const Content = styled.div`
  justify-self: center;
  min-width: 574px;
  ${Media.SM} {
    min-width: 274px;
  }
`;
