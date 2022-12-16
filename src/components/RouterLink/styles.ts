import { Color } from "config";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { typography } from "ui";

export const StyledLink = styled(Link)`
  ${typography.s1};
  color: ${Color.SECONDARY};
  transition: 0.3s color ease-in-out;
  &:hover {
    color: ${Color.PRIMARY_LIGHT};
  }
  &:disabled {
    color: ${Color.GRAPHITE};
  }
`;
