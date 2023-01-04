import { MenuLink } from "components";
import { ROUTE } from "router";
import { getUser, useAppSelector } from "store";
import { StyledMenuNav } from "./styles";

// const navs = [
//   { to: ROUTE.HOME, title: "Home" },
//   { to: ROUTE.TRENDS, title: "Trends" },
//   { to: ROUTE.FAVORITES, title: "Favorites", isAuth: false },
//   { to: ROUTE.SETTINGS, title: "Settings", isAuth: false },
// ];
/* Future select options
const options = [
  { value: "movies", label: "Movies" },
  { value: "series", label: "Series" },
  { value: "episode", label: "Episode" },
];
*/

export const MenuNav = () => {
  const { isAuth } = useAppSelector(getUser);
  return (
    <StyledMenuNav>
      {/* {navs.map(({ to, title }) => (
        <MenuLink key={title} to={to} title={title} />
      ))} */}
      <MenuLink title="Home" to={ROUTE.HOME} />
      <MenuLink title="Trends" to={ROUTE.TRENDS} />
      {isAuth && (
        <>
          <MenuLink title="Favorites" to={ROUTE.FAVORITES} />
          <MenuLink title="Settings" to={ROUTE.SETTINGS} />
        </>
      )}
    </StyledMenuNav>
  );
};
