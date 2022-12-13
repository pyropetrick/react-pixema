import { StyledTitle, VariantTitle } from "./styles";

interface IProps {
  variant: VariantTitle;
  text: string;
}

export const Title = ({ variant, text }: IProps) => {
  return (
    <StyledTitle as={variant} $variant={variant}>
      {text}
    </StyledTitle>
  );
};
