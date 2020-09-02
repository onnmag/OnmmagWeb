import React, { useEffect, useState } from 'react';

import { useGetApi } from '../../../../../hooks/useApi';
import { VideosListApi } from '../../api';

import Videos from '../../../../modules/Videos';

function Video() {
  const { makeRequest, inProgress } = useGetApi({ defaultInProgress: false });
  const [data, setData] = useState({
    items: [],
  });
  const [pageToken, setPageToken] = useState(null);

  useEffect(() => {
    const extraParams = pageToken ? { pageToken } : {};
    makeRequest(VideosListApi({
      part: 'snippet',
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
  }, [makeRequest, pageToken]);

  return (
    <Videos data={data} inProgress={inProgress} callback={setPageToken} />
  );
}

export default Video;
