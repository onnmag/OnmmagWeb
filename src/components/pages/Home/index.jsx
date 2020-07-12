import React from 'react';

import { mediaQuery } from '../../../utils';

import NavBar from '../../modules/Home/Navbar';
import Footer from '../../modules/Home/Footer';

import Routes from './Routes';


import styles from './index.scss';

function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.routes}>
        <Routes />
      </div>
      {mediaQuery(600) && <Footer />}
    </div>
  );
}

export default Home;
