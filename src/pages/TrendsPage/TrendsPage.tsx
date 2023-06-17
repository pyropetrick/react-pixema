import { useEffect, useState } from "react";
import { Button, MovieList } from "components";
import { useAppSelector, useAppDispatch, getTrends, fetchTrends } from "store";
import { MainPageBlock } from "ui";
import { PAGE_ELEMENTS } from "config";

export const TrendsPage = () => {
  const { trends, isLoading, error } = useAppSelector(getTrends);
  const [elementCount, setElementCount] = useState<number>(PAGE_ELEMENTS);
  const handleShowMore = () => setElementCount((prevPage) => prevPage + PAGE_ELEMENTS);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchTrends());
  }, [dispatch]);
  return (
    <MainPageBlock>
      <MovieList movies={trends.slice(0, elementCount)} isLoading={isLoading} error={error} />
      {!isLoading && !!trends.length && elementCount < trends.length && (
        <Button text="Show more" type="button" variant="secondary" onClick={handleShowMore} />
      )}
    </MainPageBlock>
  );
};
