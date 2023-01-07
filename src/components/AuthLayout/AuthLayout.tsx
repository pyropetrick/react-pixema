import { StyledAuthLayout, Content, Copyright } from "./styles";
import { Navigate, Outlet } from "react-router";
import { LoadingBar, Logo } from "components";
import { getUser, useAppSelector } from "store";
import { ROUTE } from "router";
import { AnimatePresence } from "framer-motion";

export const AuthLayout = () => {
  const { name, isLoading } = useAppSelector(getUser);
  if (isLoading) return <LoadingBar />;
  if (name) {
    return <Navigate to={ROUTE.HOME} />;
  }
  return (
    <AnimatePresence>
      <StyledAuthLayout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <Logo />
        <Content>
          <AnimatePresence>
            <Outlet />
          </AnimatePresence>
        </Content>
        <Copyright>© All Rights Reserved</Copyright>
      </StyledAuthLayout>
    </AnimatePresence>
  );
};
