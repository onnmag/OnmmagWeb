import React from 'react';

import { mediaQuery } from '../../../utils';

import NavBar from '../../modules/Home/Navbar';
import { MobileHeader, MobileNavBar } from '../../modules/Home/MobileView';


import Routes from './Routes';


import styles from './index.scss';

function Home() {
  if (mediaQuery(600)) {
    return (
      <div className={styles.mobileView}>
        <MobileHeader />
        <Routes />
        <MobileNavBar />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.routes}>
        <Routes />
      </div>
    </div>
  );
}

export default Home;
