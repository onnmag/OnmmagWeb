import React from 'react';
import styles from './index.scss';

import { OPTIONS } from './ENUMS';

function Options() {
  return (
    <div className={styles.container}>
      {OPTIONS.map(option => (
        <button key={option.id} className={styles.button}>
          {option.displayText}
        </button>
      ))}
    </div>
  );
}

export default Options;
