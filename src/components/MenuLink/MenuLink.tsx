import { useMatch } from "react-router";
import { StyledNavLink } from "./styles";

interface IProps {
  title: string;
  to: string;
}

export const MenuLink = ({ title, to }: IProps) => {
  const isActive = useMatch(to);
  return (
    <StyledNavLink to={to} $isActive={isActive}>
      {title}
    </StyledNavLink>
  );
};
