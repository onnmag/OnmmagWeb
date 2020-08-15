import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

function Card({ data: { description, header, thumbnail, id, category, cta } }) {
  return (
    <div className={styles.container}>
      <div id={id} className={styles.storyContainer}>
        <figure className={styles.storyThumbnail}>
          <img src={thumbnail} alt={header} />
        </figure>
        <div className={styles.storyDetails}>
          <h3 className={styles.storyHeader}>{header}</h3>
          <p className={styles.storySubHeader}>{description}</p>
        </div>
        <div className={styles.footer}>
          <p>{category}</p>
          <a>{cta.text}</a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
