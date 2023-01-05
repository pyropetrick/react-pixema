import { useEffect, useState } from "react";
import { Button, MovieList } from "components";
import { useAppSelector, useAppDispatch, getTrends, fetchTrends } from "store";
import { MainPageBlock } from "ui";

export const TrendsPage = () => {
  const { trends, isLoading } = useAppSelector(getTrends);
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const handleShowMore = () => setPage((prevPage) => ++prevPage);
  useEffect(() => {
    dispatch(fetchTrends(page));
  }, [dispatch, page]);
  return (
    <MainPageBlock>
      <MovieList movies={trends} isLoading={isLoading} />;
      {!isLoading && (
        <Button text="Show more" type="button" variant="secondary" onClick={handleShowMore} />
      )}
    </MainPageBlock>
  );
};
