import { Header, Portal, SideBar } from "components";
import { Outlet } from "react-router-dom";
import { Content, StyledMainLayout } from "./styles";
import { useEffect } from "react";
import { getTheme, useAppSelector } from "store";
import { ToastContainer } from "react-toastify";
import { TargetPortal } from "config";

export const MainLayout = () => {
  const { theme } = useAppSelector(getTheme);
  useEffect(() => document.documentElement.setAttribute("theme", theme), [theme]);
  return (
    <StyledMainLayout>
      <Portal target={TargetPortal.TOAST}>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme={theme}
        />
      </Portal>
      <SideBar />
      <Content>
        <Header />
        <Outlet />
      </Content>
    </StyledMainLayout>
  );
};
