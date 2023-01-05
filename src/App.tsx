import { LoadingBar } from "components";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "router";
import { getTheme, getUser, setUser, useAppDispatch, useAppSelector } from "store";

export const App = () => {
  const { theme } = useAppSelector(getTheme);
  const { isLoading } = useAppSelector(getUser);
  const auth = getAuth();
  const dispatch = useAppDispatch();
  useEffect(() => document.documentElement.setAttribute("theme", theme), [theme]);
  useEffect(() => onAuthStateChanged(auth, (user) => dispatch(setUser(user))), [dispatch, auth]);
  if (isLoading) return <LoadingBar />;
  return <RouterProvider router={router} />;
};
