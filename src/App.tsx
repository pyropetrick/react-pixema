import { AppWrapper, MainView } from "ui";
import { useEffect } from "react";
import { AppRouter, Header } from "components";
import { BrowserRouter } from "react-router-dom";
import { SideBar } from "./components/SideBar/SideBar";
import { getTheme, useAppSelector } from "store";

export const App = () => {
  const { theme } = useAppSelector(getTheme);
  useEffect(() => document.documentElement.setAttribute("theme", theme), [theme]);

  return (
    <BrowserRouter>
      <AppWrapper>
        <SideBar />
        <MainView>
          <Header />
          <AppRouter />
        </MainView>
      </AppWrapper>
    </BrowserRouter>
  );
};
