import React from 'react';
import random from 'random-name';
import PropTypes from 'prop-types';

import PostCard from '../../common/PostCard';
import { LINKS, CONTENT_TYPE } from '../../../constants/STATICS';

import { useInfiniteScrolling } from '../../../hooks/useInfiniteScrolling';

import styles from './index.scss';

function Feeds({ feeds, hasMore, isLoading, error, setPageNumber }) {
  const lastFeedRef = useInfiniteScrolling({
    callback: () => setPageNumber(prevPageNumber => prevPageNumber + 1),
    isLoading,
    hasMore,
  });
  return (
    <div className={styles.container}>
      {feeds.map((feed, index) => {
        const Card = (
          <PostCard
            {...feed}
            name={`${random.first()} ${random.last()}`}
            profileImage={LINKS.RANDOM_PROFILE_IMAGE}
            content={LINKS.RANDOM_POST}
            contentType={CONTENT_TYPE.IMAGE}
          />
        );
        return (
          <div
            key={feed.id}
            className={styles.card}
            ref={index === feeds.length - 1 ? lastFeedRef : null}
          >
            {Card}
          </div>
        );
      })}
      <div>{isLoading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </div>
  );
}

Feeds.propTypes = {
  feeds: PropTypes.array.isRequired,
  hasMore: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  setPageNumber: PropTypes.func.isRequired,
};

export default Feeds;
