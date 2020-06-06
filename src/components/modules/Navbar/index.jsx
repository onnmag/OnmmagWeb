import React from 'react';

import SideBar from '../Sidebar';
import Navigation from './partials/Navigation';
import Categories from './partials/Categories';

import styles from './index.scss';

function NavBar() {
  return (
    <div className={styles.container}>
      <SideBar />
      <Categories />
      <Navigation />
    </div>
  );
}

export default NavBar;
