import { Profile, Search } from "components";
import { useDebounce, useInput } from "hooks";
import { StyledHeader } from "./styles";
import { useAppSelector, getUser } from "store";
import { useEffect } from "react";
import { generatePath, useNavigate } from "react-router";
import { ROUTE } from "router";

export const Header = () => {
  const search = useInput();
  const navigate = useNavigate();
  const debounceValue = useDebounce(search.value, 1000);
  useEffect(() => {
    debounceValue && navigate(generatePath(ROUTE.SEARCH, { name: debounceValue }));
  }, [debounceValue]);
  const { isAuth, name } = useAppSelector(getUser);
  return (
    <StyledHeader>
      <Search {...search} />
      <Profile name={name || ""} isAuth={isAuth} />
    </StyledHeader>
  );
};
