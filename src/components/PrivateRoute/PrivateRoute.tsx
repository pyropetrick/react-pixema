import { ReactNode } from "react";
import { Navigate, Route } from "react-router";
import { ROUTE } from "router";
import { getUser, useAppSelector } from "store";

interface IProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: IProps) => {
  const { isAuth } = useAppSelector(getUser);
  return isAuth ? <Route>{children}</Route> : <Navigate to={ROUTE.LOGIN} />;
};
