import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

function Header({ title, profileImage, name }) {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://picsum.photos/40/40.jpg')
      .then(res => {
        setImageUrl(res.url);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        {
          isLoading ?
            <span className={styles.loader} /> :
            <img src={imageUrl} alt={name} className={styles.image} />
        }
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,

};

Header.defaultProps = {
  title: '',
};

export default Header;
