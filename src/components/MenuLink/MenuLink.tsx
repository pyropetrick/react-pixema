import { NavLink } from "react-router-dom";
import { activeStyle, StyledNavItem } from "./styles";

interface IProps {
  title: string;
  to: string;
}

export const MenuLink = ({ title, to }: IProps) => {
  return (
    <StyledNavItem>
      <NavLink to={to} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        {title}
      </NavLink>
    </StyledNavItem>
  );
};
