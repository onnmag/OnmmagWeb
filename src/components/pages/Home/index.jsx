import React from 'react';

import NavBar from '@modules/Navbar';

import styles from './index.scss';

function Home() {
    return (
        <div className={styles.container}>
          <NavBar />
        </div>
    );
}

export default Home;
