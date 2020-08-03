import React from 'react';
import { Link } from 'react-router-dom';


import { useAppState } from '../../../../../App';
import { ROUTES_NAME } from '../../../../pages/Home/Routes/Enums';

import styles from './index.scss';

function Categories() {
  const { activePage } = useAppState();
  if (activePage.id === ROUTES_NAME.HOME) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Link
        to={activePage.link}
      >
        Explore More
      </Link>
    </div>
  );
}

export default Categories;
