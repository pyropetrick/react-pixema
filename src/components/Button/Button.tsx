import { StyledButton } from "./styles";

export type VariantButton = "primary" | "secondary";

type TypeButton = "button" | "submit" | "reset";

interface IProps {
  text: string;
  variant: VariantButton;
  onClick?: () => void;
  type?: TypeButton;
}

export const Button = ({ text, variant, onClick, type }: IProps) => {
  return (
    <StyledButton $variant={variant} onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};
