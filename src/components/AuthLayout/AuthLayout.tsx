import { StyledAuthLayout, Image, Content, Copyright } from "./styles";
import logoLight from "assets/img/logo-light.png";
import logoDark from "assets/img/logo-dark.png";
import { getTheme, useAppSelector } from "store";
import { Outlet } from "react-router";

export const AuthLayout = () => {
  const { theme } = useAppSelector(getTheme);
  return (
    <StyledAuthLayout>
      <Image src={theme === "dark" ? logoLight : logoDark} />
      <Content>
        <Outlet />
      </Content>
      <Copyright>© All Rights Reserved</Copyright>
    </StyledAuthLayout>
  );
};
