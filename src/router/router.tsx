import { AuthLayout, MainLayout } from "components";
import {
  DetailsMoviePage,
  ErrorPage,
  FavoritesPage,
  HomePage,
  LoginPage,
  RegistrationPage,
  SettingsPage,
  TrendsPage,
} from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "router";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path={ROUTE.HOME} element={<MainLayout />}>
        <Route index path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
        <Route path={ROUTE.MOVIE} element={<DetailsMoviePage />} />
      </Route>
      <Route path={ROUTE.HOME} element={<AuthLayout />}>
        <Route path={ROUTE.REGISTRATION} element={<RegistrationPage />} />
        <Route path={ROUTE.LOGIN} element={<LoginPage />} />
      </Route>
      <Route errorElement />
    </Route>,
  ),
);
