import { Header, LoadingBar, SideBar } from "components";
import { useWindowSize } from "hooks";
import { Outlet } from "react-router-dom";
import { getUser, useAppSelector } from "store";
import { Content, StyledMainLayout } from "./styles";

export const MainLayout = () => {
  const { isLoading } = useAppSelector(getUser);
  const { width } = useWindowSize();
  if (isLoading) return <LoadingBar />;
  return (
    <StyledMainLayout>
      {width && width >= 1281 && <SideBar />}
      <Content>
        <Header />
        <Outlet />
      </Content>
    </StyledMainLayout>
  );
};
