import React from 'react';

import Pages from './partials/Pages';
import Categories from './partials/Categories';
import styles from './index.scss';

import Icon, { ICON_NAME } from '../../common/Icon';
import { useAppState } from '../../../App';

function SideBar() {
  const { toggleTheme } = useAppState();
  return (
      <div className={styles.container}>
        <div className={styles.menuContainer}>
          <Pages />
          <Categories />
        </div>
        <Icon name={ICON_NAME.SUN} className={styles.toggleTheme} onClick={toggleTheme} />
      </div>
    );
}

export default SideBar;

