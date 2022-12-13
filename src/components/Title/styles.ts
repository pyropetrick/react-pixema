import styled from "styled-components";
import { typography } from "ui";
export type VariantTitle = "h1" | "h2" | "h3";

interface IProps {
  $variant: VariantTitle;
}

export const StyledTitle = styled.div`
  ${(props: IProps) => typography[props.$variant]};
`;
