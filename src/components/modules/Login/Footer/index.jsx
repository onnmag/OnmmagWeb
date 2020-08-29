import React from 'react';

import { LANGUAGES } from './Enums';

import styles from './index.scss';

function Footer() {
  return (
    <div className={styles.container}>
      {LANGUAGES.map((lan) => (
        <div key={lan}>
          {lan}
        </div>
      ))}
    </div>
  );
}

export default Footer;
