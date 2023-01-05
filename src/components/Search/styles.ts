import { SearchFilterIcon } from "assets";
import styled from "styled-components";
import { Input } from "ui";

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchInput = styled(Input)`
  width: 100%;
`;

export const FilterMenuIcon = styled(SearchFilterIcon)`
  position: absolute;
  right: 20px;
  &:hover {
    cursor: pointer;
  }
`;
