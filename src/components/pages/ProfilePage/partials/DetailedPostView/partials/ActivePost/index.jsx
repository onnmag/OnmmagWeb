import React from 'react';
import PropTypes from 'prop-types';

import Comments from '../../../../../../common/Comments';
import UserInfo from './partials/UserInfo';
import UserCommentSection from './partials/UserCommentSection';

import styles from './index.scss';


function ActivePost({ data, userInfo }) {
  const getBackgroundImage = () => ({
      backgroundImage: `url(${data.url})`,
    });
  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <img src={data.url} alt={data.id} className={styles.image} />
        <div
          className={styles.backgroundImage}
          style={getBackgroundImage()}
        />
      </figure>
      <div className={styles.postDetails}>
        <UserInfo data={userInfo} isLiked={data.isLiked} />
        <Comments id={data.id} />
        <UserCommentSection id={data.id} />
      </div>
    </div>
  );
}

ActivePost.propTypes = {
  data: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
};

export default ActivePost;
