import React from 'react';
import PropTypes from 'prop-types';

import { Header, Post, Footer } from './partials/index';

import styles from './index.scss';

function PostCard({ name, title, contentType, profileImage, content, id }) {
  return (
    <div className={styles.container}>
      <Header
        name={name}
        profileImage={profileImage}
        title={title}
      />
      <Post
        type={contentType}
        content={content}
      />
      <Footer
        id={id}
      />
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
