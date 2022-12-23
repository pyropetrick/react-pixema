import { MenuLink } from "components";
import { ROUTE } from "router";
import { StyledMenuNav } from "./styles";

const navs = [
  { to: ROUTE.HOME, title: "Home" },
  { to: ROUTE.TRENDS, title: "Trends" },
  { to: ROUTE.FAVORITES, title: "Favorites" },
  { to: ROUTE.SETTINGS, title: "Settings" },
];
/* Future select options
const options = [
  { value: "movies", label: "Movies" },
  { value: "series", label: "Series" },
  { value: "episode", label: "Episode" },
];
*/

export const MenuNav = () => {
  return (
    <StyledMenuNav>
      {navs.map(({ to, title }) => (
        <MenuLink key={title} to={to} title={title} />
      ))}
    </StyledMenuNav>
  );
};
