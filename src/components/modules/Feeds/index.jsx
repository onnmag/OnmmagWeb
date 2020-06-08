import React, { useRef, useCallback, useState } from 'react';
import random from 'random-name';

import PostCard from '../../common/PostCard';
import useFetchFeeds from '../../../hooks/useFetchFeeds';
import { LINKS, CONTENT_TYPE } from '../../../Enums/STATICS';

import styles from './index.scss';

function Feeds() {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, feeds, hasMore } = useFetchFeeds({ pageNumber });
  const observer = useRef();
  const lastFeedRef = useCallback((node) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  }, [isLoading, hasMore]);
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
        if (index === feeds.length - 1) {
          return (
            <div key={feed.id} className={styles.card} ref={lastFeedRef}>
              {Card}
            </div>
          );
        }
        return (
          <div key={feed.id} className={styles.card}>
            {Card}
          </div>
        );
      })}
      <div>{isLoading && 'Loading...'}</div>
      <div>{isError && 'Error'}</div>
    </div>
  );
}

export default Feeds;
