import { AuthLayout, MainLayout, RequareAuth } from "components";
import {
  DetailsMoviePage,
  ErrorPage,
  FavoritesPage,
  HomePage,
  LoginPage,
  PasswordNewPage,
  PasswordResetPage,
  RegistrationPage,
  SearchPage,
  SettingsPage,
  TrendsPage,
} from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "router";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} errorElement={<ErrorPage />}>
      <Route element={<MainLayout />}>
        <Route index path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
        <Route path={ROUTE.MOVIE} element={<DetailsMoviePage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route element={<RequareAuth />}>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
          <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        </Route>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path={ROUTE.REGISTRATION} element={<RegistrationPage />} />
        <Route path={ROUTE.LOGIN} element={<LoginPage />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<PasswordResetPage />} />
        <Route path={ROUTE.NEW_PASSWORD} element={<PasswordNewPage />} />
      </Route>
    </Route>,
  ),
);
