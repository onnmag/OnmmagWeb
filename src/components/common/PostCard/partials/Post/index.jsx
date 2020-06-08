import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

function Post({ title }) {
  const [imageUrl, setImageUrl] = useState('');
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://picsum.photos/600/600.jpg')
      .then(res => {
        setImageUrl(res.url);
        const img = new Image();
        img.onload = () => {
          setImageLoaded(true);
        };
        img.src = res.url;
        setIsLoading(false);
      });
  }, []);
  return (
    <figure className={styles.container}>
      {
        isLoading && !isImageLoaded ?
          <span className={styles.loader} /> :
          <img src={imageUrl} alt={title} />
      }
    </figure>
  );
}

Post.propTypes = {
  title: PropTypes.string,
};

Post.defaultProps = {
  title: '',
};

export default Post;
