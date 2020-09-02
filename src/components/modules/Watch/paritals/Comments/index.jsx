import React from 'react';
import PropTypes from 'prop-types';

import Comment from './partials/Comment';
import { commaSeperatedNumber } from '../../../../../utils';

import { useInfiniteScrolling } from '../../../../../hooks/useInfiniteScrolling';

import { STATICS } from '../../STATICS';

import styles from './index.scss';

function Comments({ data, totalComments, inProgress, setPageToken }) {
  const lastCommentRef = useInfiniteScrolling({
    isLoading: inProgress,
    hasMore: !!data?.nextPageToken,
    callback: () => {
      setPageToken(prevState => ({
        ...prevState,
        commentsListToken: data.nextPageToken,
      }));
    },
  });
  if (inProgress && !data.items.length) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.totalCommentsWrapper}>
        <span className={styles.totalComments}>{`${commaSeperatedNumber(totalComments)} ${STATICS.COMMENTS}`}</span>
      </div>
      {data.items.map((comment, index) => (
        <div ref={index === data.items.length - 1 ? lastCommentRef : null}>
          <Comment data={comment} />
        </div>
      ))}
      {inProgress ? <div>Loading...</div> : null}
    </div>
  );
}

Comments.propTypes = {
  data: PropTypes.object.isRequired,
  totalComments: PropTypes.string,
  inProgress: PropTypes.bool.isRequired,
  setPageToken: PropTypes.func.isRequired,
};

Comments.defaultProps = {
  totalComments: '0',
};

export default Comments;
