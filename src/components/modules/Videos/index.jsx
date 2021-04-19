import React from 'react';
import PropTypes from 'prop-types';

import Card, { SIZE } from '../../common/VideoCard';
import { useInfiniteScrolling } from '../../../hooks/useInfiniteScrolling';

import styles from './index.scss';

function Index({ data, inProgress, callback }) {
  const lastVideoRef = useInfiniteScrolling({
    isLoading: inProgress,
    hasMore: !!data.nextPageToken,
    callback: () => callback(data.nextPageToken),
  });

  if (!data.items.length) {
    return (
      <span>Loading...</span>
    );
  }

  const activeWidth = data.items[0].snippet.thumbnails[SIZE.HIGH].width;
  return (
    <div
      className={styles.container}
      style={{
        gridTemplateColumns: `repeat( auto-fill, minmax(${activeWidth}px,${activeWidth}px))`,
      }}
    >
      {data.items.map((item, index) => {
        const id = typeof item.id === 'string' ? item.id : item.id.videoId;
        console.log(id);
        return (
          <div ref={index === data.items.length - 1 ? lastVideoRef : null}>
            <Card data={item.snippet} id={id} key={id} />
          </div>
        );
      })}
      <div>Loading...</div>
    </div>
  );
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
  inProgress: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Index;
