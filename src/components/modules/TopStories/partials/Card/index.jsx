import React from 'react';
import PropTypes from 'prop-types';

import { STATICS } from '../../ENUMS';
import styles from './index.scss';

function Card({ data: { header, content } }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{header}</h2>
      {content.map(story => (
        <div id={story.id} className={styles.storyContainer}>
          <figure className={styles.storyThumbnail}>
            <img src={story.thumbnail} alt={story.header} />
          </figure>
          <div className={styles.storyDetails}>
            <h3 className={styles.storyHeader}>{story.header}</h3>
            <p className={styles.storySubHeader}>
              {story.subHeader}
              <span className={styles.readMore}>{STATICS.READ_MORE}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
};

export default Card;
