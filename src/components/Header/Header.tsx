import { FilterMenu, Profile, Search } from "components";
import { useDebounce, useInput, useToogle } from "hooks";
import { StyledHeader } from "./styles";
import { useAppSelector, getUser } from "store";
import { useEffect } from "react";
import { generatePath, useNavigate } from "react-router";
import { ROUTE } from "router";

export const Header = () => {
  const search = useInput();
  const navigate = useNavigate();
  const debounceValue = useDebounce(search.value, 1000);
  const [isActive, toogleFilter] = useToogle();
  useEffect(() => {
    debounceValue && navigate(generatePath(ROUTE.SEARCH, { name: debounceValue }));
    //eslint-disable-next-line
  }, [debounceValue]);
  const { isAuth, name } = useAppSelector(getUser);
  return (
    <StyledHeader>
      <Search {...search} onClick={toogleFilter} />
      <Profile name={name || ""} isAuth={isAuth} />
      {isActive && <FilterMenu toogleFilter={toogleFilter} />}
    </StyledHeader>
  );
};
