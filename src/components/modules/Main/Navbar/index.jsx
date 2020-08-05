import React from 'react';

import Navigation from './partials/Navigation';
import SearchBar from '../../SearchBar';
import MasterHeader from '../../MasterHead';

import styles from './index.scss';

function NavBar() {
  return (
    <div className={styles.container}>
      <MasterHeader />
      <SearchBar />
      <Navigation />
    </div>
  );
}

export default NavBar;
