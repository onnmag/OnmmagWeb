import React from 'react';

import NavBar from '../../modules/Navbar';

import Routes from './Routes';

import styles from './index.scss';

function Home() {
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
