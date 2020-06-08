import React from 'react';

import NavBar from '../../modules/Navbar';
import Feeds from '../../modules/Feeds';

import styles from './index.scss';

function Home() {
    return (
        <div className={styles.container}>
          <NavBar />
          <div className={styles.contentContainer}>
            <div />
            <Feeds />
            <div />
          </div>
        </div>
    );
}

export default Home;
