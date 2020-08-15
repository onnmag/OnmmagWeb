import React from 'react';

import { mediaQuery } from '../../../utils';

import NavBar from '../../modules/Main/Navbar';
import SideBar from '../../modules/Sidebar';
import { MobileHeader, MobileNavBar } from '../../modules/Main/MobileView';


import Routes from './Routes';


import styles from './index.scss';

function Main() {
  if (mediaQuery(600)) {
    return (
      <div className={styles.mobileView}>
        <MobileHeader />
        <Routes />
        <MobileNavBar />
      </div>
    );
  }
  // return (
  //   <Seats />
  // );
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.routes}>
        <SideBar />
        <Routes />
      </div>
    </div>
  );
}

export default Main;
