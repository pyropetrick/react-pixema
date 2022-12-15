import { Header, SideBar } from "components";
import { Outlet } from "react-router-dom";
import { Content, StyledMainLayout } from "./styles";

export const MainLayout = () => {
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
