import React, { useEffect } from 'react';

import { useGetApi } from '../../../hooks/useApi';
import { VideosList } from './api';
// import { useAppState } from '../../../App';

import Videos from './Videos';

function Video() {
  const { makeRequest } = useGetApi();
  useEffect(() => {
    makeRequest(VideosList({
      part: 'snippet',
      chart: 'mostPopular',
    }))
      .then(res => {
        console.log({ res });
      }).catch(err => {
        console.log(err);
    });
  }, [makeRequest]);
  return (
    <Videos />
  );
}

export default Video;
