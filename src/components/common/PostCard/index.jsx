import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { PostInfo, Post, Footer } from './partials/index';

import styles from './index.scss';
import CommentBox from '../CommentBox';

function PostCard({ name, title, contentType, profileImage, content, id }) {
  const [isCommentSectionActive, setCommentSectionStatus] = useState(false);

  const handleComment = () => {
    console.log('entered');
    setCommentSectionStatus((prevState) => !prevState);
  };

  return (
    <div className={cx(styles.container, {
      [styles.raiseCard]: isCommentSectionActive,
    })}
    >
      <PostInfo
        name={name}
        profileImage={profileImage}
        title={title}
      />
      <Post
        type={contentType}
        content={content}
      />
      <div className={cx(styles.controls, {
        [styles.animateCommentBox]: isCommentSectionActive,
      })}
      >
        <Footer
          id={id}
          handleComment={handleComment}
        />
        {isCommentSectionActive && <CommentBox id={id} className={styles.commentBox} />}
      </div>
    </div>
  );
}

PostCard.propTypes = {
  name: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  title: PropTypes.string,
  profileImage: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

PostCard.defaultProps = {
  title: '',
};

export default PostCard;
