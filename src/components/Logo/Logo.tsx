import { getTheme, useAppSelector } from "store";
import { Image } from "./styles";
import logoLight from "assets/img/logo-light.png";
import logoDark from "assets/img/logo-dark.png";
import { RouterLink } from "components";
import { ROUTE } from "router";

export const Logo = () => {
  const { theme } = useAppSelector(getTheme);
  return (
    <RouterLink to={ROUTE.HOME}>
      <Image src={theme === "dark" ? logoLight : logoDark} />
    </RouterLink>
  );
};
