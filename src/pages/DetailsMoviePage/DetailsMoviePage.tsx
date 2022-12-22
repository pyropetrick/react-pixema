import { useParams } from "react-router";
import { useAppSelector, useAppDispatch, getMovie, getMovieById } from "store";
import { useEffect } from "react";

export const DetailsMoviePage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { movie } = useAppSelector(getMovie);
  useEffect(() => {
    if (id) dispatch(getMovieById(id));
  }, [dispatch]);
  return (
    <div>
      <ul>
        <li>{movie.title}</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
