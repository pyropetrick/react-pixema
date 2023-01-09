import { Title } from "components";
import { StyledFallback, Image } from "./styles";

interface IProps {
  text: string;
}

export const Fallback = ({ text }: IProps) => {
  return (
    <StyledFallback>
      <Image />
      <Title variant={"h3"} text={text} />
    </StyledFallback>
  );
};
