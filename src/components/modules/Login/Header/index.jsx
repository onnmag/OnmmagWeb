import React from 'react';

import { STATICS } from '../../../../constants/STATICS';
import styles from './index.scss';

function Header() {
  return (
    <div className={styles.container}>
      {STATICS.ONNMAG}
    </div>
  );
}

export default Header;
