import { redirect, Route, Routes, useNavigate } from "react-router-dom";
import { Path } from "config";
import { Login, Home, Registration, Settings, Favorites, Trends, Movie } from "pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Path.REGISTRATION} element={<Registration />} />
      <Route path={Path.LOGIN} element={<Login />} />
      <Route path={Path.HOME} element={<Home />} />
      <Route path={Path.SETTINGS} element={<Settings />} />
      <Route path={Path.FAVORITES} element={<Favorites />} />
      <Route path={Path.TRENDS} element={<Trends />} />
      <Route path={`${Path.MOVIE}:id`} element={<Movie />} />
    </Routes>
  );
};
