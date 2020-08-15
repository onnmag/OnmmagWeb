import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';
import { LINKS } from '../../../../../Enums/STATICS';

function Comment({ comment, userName }) {
  const [imageUrl, setImageUrl] = useState('');
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(LINKS.RANDOM_PROFILE_IMAGE)
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
    <div className={styles.container}>
      <a className={styles.profileLink}>
        <figure className={styles.image}>
          {isLoading && !isImageLoaded ?
            <span className={styles.loader} /> :
            <img src={imageUrl} alt={userName} />
          }
        </figure>
      </a>
      <div className={styles.content}>
        <a className={styles.userName}>
          {userName}
        </a>
        <p className={styles.comment}>{comment}</p>
      </div>
    </div>
  );
}


Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Comment;
