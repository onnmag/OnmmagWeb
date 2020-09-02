import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import approx from 'approximate-number';

import Icon, { ICON_NAME } from '../../../../../../common/Icon';

import styles from './index.scss';

function Comment({ data: { id, snippet } }) {
  const commentData = snippet.topLevelComment.snippet;
  const {
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    textDisplay,
    likeCount,
  } = commentData;
  return (
    <div className={styles.container} key={id}>
      <figure className={styles.usersImage}>
        <img src={authorProfileImageUrl} alt={authorDisplayName} />
      </figure>

      <div className={styles.commentDetails}>
        <div className={styles.userInfo}>
          <span className={styles.userName}>{authorDisplayName}</span>
          <span className={styles.date}>{moment(publishedAt).fromNow()}</span>
        </div>

        <p className={styles.comment}>{textDisplay}</p>

        <div className={styles.actions}>
          <div className={styles.action}>
            <Icon name={ICON_NAME.VIDEO_LIKE} size={3} />
            {likeCount ? <span className={styles.count}>{approx(likeCount)}</span> : null}
          </div>
          <div className={styles.action}>
            <Icon name={ICON_NAME.DISLIKE} size={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Comment;
