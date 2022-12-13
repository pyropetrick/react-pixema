import { MenuNav } from "components";
import { StyledSideBar, Image, Copyright } from "./styles";
import logo from "../../assets/images/logo.png";

export const SideBar = () => {
  return (
    <StyledSideBar>
      <Image src={logo} />
      <MenuNav />
      <Copyright>© All Rights Reserved</Copyright>
    </StyledSideBar>
  );
};
