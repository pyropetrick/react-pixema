import { ReactNode } from "react";
import { StyledLabel } from "./styles";
import { CSSObject } from "styled-components";

interface IProps {
  text: string;
  children: ReactNode;
  style?: CSSObject;
}

export const Label = ({ text, style, children }: IProps) => {
  return (
    <StyledLabel style={style}>
      {text}
      {children}
    </StyledLabel>
  );
};
