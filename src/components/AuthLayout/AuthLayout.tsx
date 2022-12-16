import { StyledAuthLayout, Content, Copyright } from "./styles";
import { Outlet } from "react-router";
import { Logo } from "components";

export const AuthLayout = () => {
  return (
    <StyledAuthLayout>
      <Logo />
      <Content>
        <Outlet />
      </Content>
      <Copyright>© All Rights Reserved</Copyright>
    </StyledAuthLayout>
  );
};
