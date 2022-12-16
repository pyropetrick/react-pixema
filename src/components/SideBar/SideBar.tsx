import { Logo, MenuNav } from "components";
import { StyledSideBar, Copyright } from "./styles";

export const SideBar = () => {
  return (
    <StyledSideBar>
      <Logo />
      <MenuNav />
      <Copyright>© All Rights Reserved</Copyright>
    </StyledSideBar>
  );
};
