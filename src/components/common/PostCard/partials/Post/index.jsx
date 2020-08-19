import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { mediaQuery, BREAKPOINTS } from '../../../../../utils';
import { useGetApi } from '../../../../../hooks/useApi';
import { getPost500, getPost600 } from '../../../../modules/Feeds/FeedsApi';

import styles from './index.scss';

function Post({ title }) {
  const [imageUrl, setImageUrl] = useState('');
  const { makeRequest, inProgress } = useGetApi();
  useEffect(() => {
    let postSize = getPost600();
    if (mediaQuery(BREAKPOINTS.SMALL_SCREEN)) {
      postSize = getPost500();
    }
    makeRequest(postSize)
      .then(response => {
        setImageUrl(response);
      });
  }, [makeRequest]);

  return (
    <figure className={styles.container}>
      <div className={styles.backgroundBlur}>
        <img src={imageUrl} alt={title} className={styles.blurredImage} />
      </div>
      {
        inProgress ?
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
