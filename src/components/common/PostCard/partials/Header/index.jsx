import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES_LINKS } from '../../../../pages/Home/Routes/Enums';

import styles from './index.scss';

function Header({ title, name }) {
  const [imageUrl, setImageUrl] = useState('');
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://picsum.photos/40/40.jpg')
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
      <div className={styles.about}>
        {
          isLoading && !isImageLoaded ?
            <span className={styles.loader} /> :
            <img src={imageUrl} alt={name} className={styles.image} />
        }
        <Link to={`${ROUTES_LINKS.PROFILE}/ester_exposito`} className={styles.profileNav}>
          <span className={styles.name}>{name}</span>
        </Link>
      </div>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,

};

Header.defaultProps = {
  title: '',
  name: '',
};

export default Header;
