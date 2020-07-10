import React from 'react';
import PropTypes from 'prop-types';

import Controls from './partials/Controls';

import styles from './index.scss';

function Post({ data, expandPost }) {
  const getStyles = () => ({
    backgroundImage: `url(${data.url})`,
  });

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <Controls
          likes={data.likes}
          comments={data.comments}
          expandPost={expandPost}
          id={data.id}
        />
      </div>
      <figure className={styles.image}>
        <div style={getStyles()} className={styles.image} />
      </figure>
    </div>
  );
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  expandPost: PropTypes.func.isRequired,
};

export default Post;

