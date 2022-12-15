import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { getTheme, useAppSelector } from "store";
import { router } from "router";

export const App = () => {
  const { theme } = useAppSelector(getTheme);
  useEffect(() => document.documentElement.setAttribute("theme", theme), [theme]);

  return <RouterProvider router={router} />;
};
