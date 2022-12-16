import { ReactNode } from "react";
import { StyledLink } from "./styles";

interface IProps {
  to: string;
  children: ReactNode;
}

export const RouterLink = ({ to, children }: IProps) => {
  return (
    <StyledLink to={to} relative="route">
      {children}
    </StyledLink>
  );
};
