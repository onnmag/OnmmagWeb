import React from 'react';
import PropTypes from 'prop-types';

import VideoCard from '../../../../common/VideoCard';
import { useInfiniteScrolling } from '../../../../../hooks/useInfiniteScrolling';

import styles from './index.scss';

function VideoList({ data, inProgress, setPageToken }) {
  const lastVideoRef = useInfiniteScrolling({
    isLoading: inProgress,
    hasMore: !!data?.nextPageToken,
    callback: () => {
      setPageToken(prevState => ({
        ...prevState,
        videoListToken: data.nextPageToken,
      }));
    },
  });
  if (inProgress && !data.items.length) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {
        data.items.map((item, index) => (
            <div
              className={styles.card}
              ref={index === data.items.length - 1 ? lastVideoRef : null}
            >
              <VideoCard id={item.id} data={item.snippet} key={item.id} />
            </div>
          ))
      }
      {inProgress ? <div>Loading...</div> : null}
    </div>
  );
}

VideoList.propTypes = {
  data: PropTypes.object.isRequired,
  inProgress: PropTypes.bool.isRequired,
  setPageToken: PropTypes.func.isRequired,
};

export default VideoList;
