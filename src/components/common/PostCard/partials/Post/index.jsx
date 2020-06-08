import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

function Post({ content, title }) {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://picsum.photos/600/600.jpg')
      .then(res => {
        setImageUrl(res.url);
        setIsLoading(false);
      });
  }, []);
  return (
    <figure className={styles.container}>
      {
        isLoading ?
          <span className={styles.loader} /> :
          <img src={imageUrl} alt={title} />
      }
    </figure>
  );
}

Post.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Post.defaultProps = {
  title: '',
};

export default Post;
