import React from 'react';

import FeedSlider from './partials/FeedSlider';
import Form from './partials/Form';
import { STATICS } from './enum';

import styles from './index.scss';

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.contentSlider}>
        <div className={styles.content}>
          <h1 className={styles.header}>{STATICS.HEADER}</h1>
          <h2 className={styles.subHeader}>{STATICS.SUB_HEADER}</h2>
          <p className={styles.disclaimer}>{STATICS.DISCLAIMER}</p>
        </div>
        <FeedSlider />
        <FeedSlider />
      </div>
      <div className={styles.signUpContainer}>
        <Form />
      </div>
    </div>
  );
}

export default Main;

