import { Header, SideBar } from "components";
import { Outlet } from "react-router-dom";
import { Content, StyledMainLayout } from "./styles";
import { useEffect } from "react";
import { getTheme, useAppSelector } from "store";

export const MainLayout = () => {
  const { theme } = useAppSelector(getTheme);
  useEffect(() => document.documentElement.setAttribute("theme", theme), [theme]);
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
