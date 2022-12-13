import styled from "styled-components";
import { Color } from "config";
import { VariantButton } from "./Button";
import { typography } from "ui";

interface IProps {
  $variant: VariantButton;
}

export const StyledButton = styled.button`
  border-radius: 10px;
  border: none;
  padding: 15px 60px 15px;
  background-color: ${(props: IProps) =>
    props.$variant === "primary" ? Color.PRIMARY : Color.GRAPHITE};
  color: ${Color.WHITE};
  transition: 0.3s all ease-in-out;
  ${typography.s3};

  &:hover {
    background-color: ${(props: IProps) => props.$variant === "primary" && Color.PRIMARY_LIGHT};
    color: ${(props: IProps) => props.$variant === "secondary" && Color.LIGHT};
    cursor: pointer;
  }
  &:disabled {
    background-color: ${Color.SECONDARY};
    color: ${Color.LIGHT};
  }
`;
