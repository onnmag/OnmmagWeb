import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import { useAppState } from '../../../../../App';
import { ROUTES_NAME } from '../../../../pages/Main/Routes/Enums';

import styles from './index.scss';

function Categories() {
  const [isActive, handleActiveState] = useState(true);
  const { activePage } = useAppState();

  useEffect(() => {
    handleActiveState(true);
  }, [activePage.id]);

  if (activePage.id === ROUTES_NAME.HOME || !isActive) {
    return null;
  }

  const handleExplore = () => {
    handleActiveState(false);
  };

  return (
    <div className={styles.container}>
      <Link
        to={activePage.link}
        onClick={handleExplore}
      >
        <span className={styles.explore}>Explore More</span>
      </Link>
    </div>
  );
}

export default Categories;
