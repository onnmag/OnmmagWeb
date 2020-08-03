import React from 'react';

import Logo from './partials/Logo';

import styles from './index.scss';

function MasterHeader() {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  );
}

export default MasterHeader;
