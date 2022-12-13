import styled from "styled-components";
import { Color } from "config";
import { typography } from "ui";

export const activeStyle = {
  color: Color.PRIMARY,
};

export const StyledNavItem = styled.li`
  & a {
    ${typography.s1};
    color: ${Color.SECONDARY};
    transition: 0.3s color ease-in-out;
    &:hover {
      color: ${Color.PRIMARY_LIGHT};
    }
    &:disabled {
      color: ${Color.GRAPHITE};
    }
  }
`;
