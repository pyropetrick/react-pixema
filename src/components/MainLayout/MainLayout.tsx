import { Header, LoadingBar, SideBar } from "components";
import { Outlet } from "react-router-dom";
import { getUser, useAppSelector } from "store";
import { Content, StyledMainLayout } from "./styles";

export const MainLayout = () => {
  const { isLoading } = useAppSelector(getUser);
  if (isLoading) <LoadingBar />;
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
