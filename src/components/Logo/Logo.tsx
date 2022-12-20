import { getTheme, useAppSelector } from "store";
import { Image } from "./styles";
import { RouterLink } from "components";
import { ROUTE } from "router";
import { logoDark, logoLight } from "assets";

export const Logo = () => {
  const { theme } = useAppSelector(getTheme);
  return (
    <RouterLink to={ROUTE.HOME}>
      <Image src={theme === "dark" ? logoLight : logoDark} alt="logo pixema" />
    </RouterLink>
  );
};
