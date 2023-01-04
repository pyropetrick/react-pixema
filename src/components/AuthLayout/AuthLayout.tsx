import { StyledAuthLayout, Content, Copyright } from "./styles";
import { Navigate, Outlet } from "react-router";
import { Logo } from "components";
import { getUser, useAppSelector } from "store";
import { ROUTE } from "router";

export const AuthLayout = () => {
  const { isAuth } = useAppSelector(getUser);
  if (isAuth) {
    return <Navigate to={ROUTE.HOME} />;
  }
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
