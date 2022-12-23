import { Header, SideBar } from "components";
import { Outlet } from "react-router-dom";
import { Content, StyledMainLayout } from "./styles";
import { useEffect } from "react";
import { getTheme, setUser, useAppDispatch, useAppSelector } from "store";
import { getAuth } from "firebase/auth";

export const MainLayout = () => {
  const { theme } = useAppSelector(getTheme);
  useEffect(() => document.documentElement.setAttribute("theme", theme), [theme]);
  const dispatch = useAppDispatch();
  const auth = getAuth();
  useEffect(() => {
    auth.currentUser &&
      dispatch(
        setUser({ displayName: auth.currentUser.displayName, email: auth.currentUser.email }),
      );
  }, [auth.currentUser, dispatch]);
  return (
    <StyledMainLayout>
      <SideBar />
      <Content>
        <Header />
        <Outlet />
      </Content>
    </StyledMainLayout>
  );
};
