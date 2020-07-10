import React from 'react';

import Logo from './partials/Logo';
import SideBar from './partials/Sidebar';

import styles from './index.scss';

function MasterHeader() {
  return (
    <div className={styles.container}>
      <SideBar />
      <Logo />
    </div>
  );
}

export default MasterHeader;
