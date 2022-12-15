import { CSSObject } from "styled-components";
import { StyledButton } from "./styles";

export type VariantButton = "primary" | "secondary";

type TypeButton = "button" | "submit" | "reset";

interface IProps {
  text: string;
  variant: VariantButton;
  onClick?: () => void;
  type?: TypeButton;
  style?: CSSObject;
}

export const Button = ({ text, variant, onClick, type, style }: IProps) => {
  return (
    <StyledButton style={style} $variant={variant} onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};
