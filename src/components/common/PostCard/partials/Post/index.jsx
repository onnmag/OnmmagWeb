import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { mediaQuery, BREAKPOINTS } from '../../../../../utils';

import styles from './index.scss';

function Post({ title }) {
  const [imageUrl, setImageUrl] = useState('');
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let url = 'https://picsum.photos/600/600.jpg';
    if (mediaQuery(BREAKPOINTS.SMALL_SCREEN)) {
      url = 'https://picsum.photos/500/500.jpg';
    }
    fetch(url)
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
      <div className={styles.backgroundBlur}>
        <img src={imageUrl} alt={title} className={styles.blurredImage} />
      </div>
      {
        isLoading && !isImageLoaded ?
          <span className={styles.loader} /> :
          <img src={imageUrl} alt={title} className={styles.image} />
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
