import { MenuNav } from "components";
import { StyledSideBar, Image, Copyright } from "./styles";
import logoLight from "assets/img/logo-light.png";
import logoDark from "assets/img/logo-dark.png";
import { getTheme, useAppSelector } from "store";

export const SideBar = () => {
  const { theme } = useAppSelector(getTheme);
  return (
    <StyledSideBar>
      <Image src={theme === "dark" ? logoLight : logoDark} />
      <MenuNav />
      <Copyright>© All Rights Reserved</Copyright>
    </StyledSideBar>
  );
};
