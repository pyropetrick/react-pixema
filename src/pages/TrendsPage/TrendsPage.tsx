import { useEffect } from "react";
import { Button, MovieList } from "components";
import { useAppSelector, useAppDispatch, getTrends, fetchTrends } from "store";
import { StyledTrends } from "./styles";

export const TrendsPage = () => {
  const { trends, isLoading } = useAppSelector(getTrends);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTrends(null));
  }, [dispatch]);
  return (
    <StyledTrends>
      <MovieList movies={trends} isLoading={isLoading} />;
      {!isLoading && (
        <Button text="Show more" type="button" variant="secondary" onClick={() => {}} />
      )}
    </StyledTrends>
  );
};
