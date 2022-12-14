import { useEffect } from "react";
import { AppRouter } from "components";
import { BrowserRouter } from "react-router-dom";
import { getTheme, useAppSelector } from "store";

export const App = () => {
  const { theme } = useAppSelector(getTheme);
  useEffect(() => document.documentElement.setAttribute("theme", theme), [theme]);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
