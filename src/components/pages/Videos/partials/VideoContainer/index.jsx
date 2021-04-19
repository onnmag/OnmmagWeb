import React, { useEffect, useState } from 'react';

import { useGetApi } from '../../../../../hooks/useApi';
import { useAppState } from '../../../../../App';
import { VideosListApi, SearchApi } from '../../api';

import Videos from '../../../../modules/Videos';

function Video() {
  const { makeRequest, inProgress } = useGetApi({ defaultInProgress: false });
  const { searchInputValue, setSearchValue } = useAppState();
  const [data, setData] = useState({
    items: [],
  });
  const [pageToken, setPageToken] = useState(null);

  useEffect(() => {
    const extraParams = pageToken ? { pageToken } : {};
    if (searchInputValue) {
      makeRequest(SearchApi({
        part: 'snippet',
        q: searchInputValue,
      })).then(res => {
        setData(res);
      });
    } else {
      makeRequest(VideosListApi({
        part: 'snippet, statistics',
        chart: 'mostPopular',
        maxResults: 20,
        ...extraParams,
      }))
        .then(res => {
          setData(prevState => ({
            ...res,
            items: prevState.items.concat(res.items),
          }));
        }).catch(err => {
        console.log(err);
      });
    }
  }, [makeRequest, pageToken, searchInputValue]);

  return (
    <Videos data={data} inProgress={inProgress} callback={setPageToken} />
  );
}

export default Video;
