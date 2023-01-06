import { StyledAuthLayout, Content, Copyright } from "./styles";
import { Navigate, Outlet } from "react-router";
import { LoadingBar, Logo } from "components";
import { getUser, useAppSelector } from "store";
import { ROUTE } from "router";

export const AuthLayout = () => {
  const { name, isLoading } = useAppSelector(getUser);
  if (isLoading) <LoadingBar />;
  if (name) {
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
