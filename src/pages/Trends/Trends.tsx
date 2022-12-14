import { useEffect } from "react";
import { MainLayout, MovieList } from "components";
import { StyledTrends } from "./styles";
import { useAppSelector, useAppDispatch, getTrends, fetchTrends } from "store";

export const Trends = () => {
  const { trends, isLoading, error } = useAppSelector(getTrends);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTrends(null));
  }, [dispatch]);
  return (
    <MainLayout>
      <StyledTrends>
        <MovieList movies={trends} isLoading={isLoading} />;
      </StyledTrends>
    </MainLayout>
  );
};
