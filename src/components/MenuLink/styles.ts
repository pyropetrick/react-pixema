import styled from "styled-components";
import { Color } from "config";
import { typography } from "ui";
import { NavLink, PathMatch } from "react-router-dom";

export const StyledNavLink = styled(NavLink)<{ $isActive: PathMatch<string> | null }>`
  ${typography.s1};
  color: ${({ $isActive }) => ($isActive ? Color.PRIMARY : Color.SECONDARY)};
  transition: 0.3s color ease-in-out;
  &:hover {
    color: ${Color.PRIMARY_LIGHT};
  }
  &:disabled {
    color: ${Color.GRAPHITE};
  }
`;
