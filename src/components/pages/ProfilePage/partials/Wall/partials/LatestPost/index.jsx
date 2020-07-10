import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

function LatestPost({ data }) {
  const getImage = () => ({
    backgroundImage: `url(${data.postUrl})`,
  });
  return (
    <div className={styles.postMessage}>
      <p>{data.header}</p>
      <figure className={styles.post}>
        <div style={getImage()} />
      </figure>
    </div>
  );
}


LatestPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LatestPost;
