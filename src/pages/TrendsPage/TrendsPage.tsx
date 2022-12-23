import { useEffect } from "react";
import { MovieList } from "components";
import { useAppSelector, useAppDispatch, getTrends, fetchTrends } from "store";

export const TrendsPage = () => {
  const { trends, isLoading } = useAppSelector(getTrends);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTrends(null));
  }, [dispatch]);
  return <MovieList movies={trends} isLoading={isLoading} />;
};
