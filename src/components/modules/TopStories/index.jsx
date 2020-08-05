import React from 'react';

import Card from './partials/Card';

import { STATICS } from './ENUMS';
import { TOP_STORIES } from '../../../mocks';

import styles from './index.scss';


function TopStories() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{STATICS.TOP_STORIES}</h1>
      <div className={styles.cardsContainer}>
        {TOP_STORIES.map(story => (
          <Card data={story} key={story.type} />
        ))}
      </div>
    </div>
  );
}

export default TopStories;
