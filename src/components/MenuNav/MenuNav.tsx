import { MenuLink } from "..";
import { Path } from "../../config";
import { StyledMenuNav } from "./styles";

const navs = [
  { to: Path.HOME, title: "Home" },
  { to: Path.TRENDS, title: "Trends" },
  { to: Path.FAVORITES, title: "Favorites" },
  { to: Path.SETTINGS, title: "Settings" },
];
const options = [
  { value: "movies", label: "Movies" },
  { value: "series", label: "Series" },
  { value: "episode", label: "Episode" },
];

export const MenuNav = () => {
  return (
    <StyledMenuNav>
      {navs.map(({ to, title }) => (
        <MenuLink key={title} to={to} title={title} />
      ))}
    </StyledMenuNav>
  );
};
