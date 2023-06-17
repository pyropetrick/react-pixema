import { BurgerMenu, FilterMenu, Logo, Profile, Search } from "components";
import { useDebounce, useInput, useToogle } from "hooks";
import { StyledHeader } from "./styles";
import { useAppSelector, getUser } from "store";
import { useEffect } from "react";
import { generatePath, useNavigate } from "react-router";
import { ROUTE } from "router";
import { useWindowSize } from "hooks";
import { AnimatePresence } from "framer-motion";

export const Header = () => {
  const { width } = useWindowSize();
  const search = useInput();
  const navigate = useNavigate();
  const debounceValue = useDebounce(search.value, 1000);
  const [isActive, toogleFilter] = useToogle();
  useEffect(() => {
    debounceValue && navigate(generatePath(ROUTE.SEARCH, { title: debounceValue }));
    //eslint-disable-next-line
  }, [debounceValue]);
  const { isAuth, name, email } = useAppSelector(getUser);
  return (
    <StyledHeader>
      {width && width <= 1280 && <Logo />}
      <Search {...search} onClick={toogleFilter} />
      {width && width >= 1281 ? (
        <Profile name={name || ""} email={email || ""} isAuth={isAuth} />
      ) : (
        <BurgerMenu />
      )}
      <AnimatePresence>{isActive && <FilterMenu toogleFilter={toogleFilter} />}</AnimatePresence>
    </StyledHeader>
  );
};
