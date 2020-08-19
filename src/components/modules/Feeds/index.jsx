import React, { useEffect, useState } from 'react';
import { usePostApi } from '../../../hooks/useApi';
import { getFeeds } from './FeedsApi';

import Feeds from './Feeds';

function FeedsPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const [feeds, setFeeds] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const { makeRequest, inProgress, failed } = usePostApi();

  useEffect(() => {
    makeRequest(getFeeds({ pageNumber }))
      .then((response) => {
        setFeeds(prevFeeds => ([
          ...prevFeeds,
          ...response,
        ]));
        setHasMore(response.length > 0);
      });
  }, [makeRequest, pageNumber]);
  return (
    <Feeds
      feeds={feeds}
      hasMore={hasMore}
      isLoading={inProgress}
      failed={failed}
      setPageNumber={setPageNumber}
    />
  );
}
export default FeedsPage;
