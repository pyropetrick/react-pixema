import { ReactNode } from "react";
import { useMatch } from "react-router";
import { StyledNavLink } from "./styles";

interface IProps {
  title: string;
  to: string;
  children: ReactNode;
}

export const MenuLink = ({ children, title, to }: IProps) => {
  const isActive = useMatch(to);
  return (
    <StyledNavLink to={to} $isActive={isActive}>
      {children}
      {title}
    </StyledNavLink>
  );
};
