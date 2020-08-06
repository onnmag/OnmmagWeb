import React from 'react';
import styles from './index.scss';
import { STATICS } from '../../enum';

function Header() {
  return (
    <div className={styles.content}>
      <h1 className={styles.header}>{STATICS.HEADER}</h1>
      <h2 className={styles.subHeader}>{STATICS.SUB_HEADER}</h2>
    </div>
  );
}

export default Header;
