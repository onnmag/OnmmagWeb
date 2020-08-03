import React from 'react';

import Pages from './partials/Pages';
import Categories from './partials/Categories';
import styles from './index.scss';

function SideBar() {
  return (
      <div className={styles.menuContainer}>
        <Pages />
        <Categories />
      </div>
    );
}

export default SideBar;

