import { useEffect, useState } from 'react';
import axios from 'axios';
// TODO: Remove useFetchFeeds
function useFetchFeeds({ pageNumber }) {
  const [feeds, setFeeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    let cancel;
    axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/albums/${pageNumber}/photos`,
      cancelToken: new axios.CancelToken((c) => {
        cancel = c;
      }),
    })
      .then((res) => {
        setFeeds(prevFeeds => ([
          ...prevFeeds,
          ...res.data,
        ]));
        setHasMore(false);
        setHasMore(res.data.length > 0);
        // setIsLoading(false);
    }).catch(e => {
      if (axios.isCancel(e)) return;
      setIsError(true);
      setIsLoading(false);
    });
    return () => cancel();
  }, [pageNumber]);
  return {
    isLoading,
    isError,
    hasMore,
    feeds,
  };
}

export {
  useFetchFeeds as default,
};
