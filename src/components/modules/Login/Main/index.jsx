import React from 'react';

import FeedSlider from './partials/FeedSlider';
import Form from './partials/Form';
import Header from './partials/Header';

import styles from './index.scss';

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.contentSlider}>
        <div>
          <Header />
          <FeedSlider />
        </div>
        <div />
      </div>
      <div className={styles.signUpContainer}>
        <Form />
      </div>
    </div>
  );
}

export default Main;

