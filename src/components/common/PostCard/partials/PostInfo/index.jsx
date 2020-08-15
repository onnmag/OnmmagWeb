import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES_LINKS } from '../../../../pages/Main/Routes/Enums';
import { LINKS } from '../../../../../Enums/STATICS';

import MoreVertical from '../../../MoreVertical';
import Options from '../Options';

import styles from './index.scss';

function PostInfo({ title, name }) {
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
      <div>
        <div className={styles.about}>
          {
            isLoading && !isImageLoaded ?
              <span className={styles.loader} /> :
              <img src={imageUrl} alt={name} className={styles.image} />
          }
          <div className={styles.postInfo}>
            <Link to={`${ROUTES_LINKS.PROFILE}/ester_exposito`}>
              <span className={styles.name}>{name}</span>
            </Link>
            <span className={styles.location}>Spain</span>
          </div>
        </div>
        <div className={styles.title}>
          {title}
        </div>
      </div>
      <MoreVertical className={styles.moreInfo}>
        <Options />
      </MoreVertical>
    </div>
  );
}

PostInfo.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,

};

PostInfo.defaultProps = {
  title: '',
  name: '',
};

export default PostInfo;
