import { BookMarkIcon, FireIcon, HomeIcon, SettingsIcon } from "assets";
import { MenuLink } from "components";
import { ROUTE } from "router";
import { getUser, useAppSelector } from "store";
import { StyledMenuNav } from "./styles";

export const MenuNav = () => {
  const { isAuth } = useAppSelector(getUser);
  return (
    <StyledMenuNav>
      <MenuLink title="Home" to={ROUTE.HOME}>
        <HomeIcon />
      </MenuLink>
      <MenuLink title="Trends" to={ROUTE.TRENDS}>
        <FireIcon />
      </MenuLink>
      {isAuth && (
        <>
          <MenuLink title="Favorites" to={ROUTE.FAVORITES}>
            <BookMarkIcon />
          </MenuLink>
          <MenuLink title="Settings" to={ROUTE.SETTINGS}>
            <SettingsIcon />
          </MenuLink>
        </>
      )}
    </StyledMenuNav>
  );
};
