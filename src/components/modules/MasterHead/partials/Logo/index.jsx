import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_LINKS, ROUTES_NAME } from '../../../../pages/Home/Routes/Enums';

import styles from './index.scss';

function Logo() {
  return (
    <Link to={ROUTES_LINKS[ROUTES_NAME.FEEDS]} className={styles.link}>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Meo_logo.svg/799px-Meo_logo.svg.png"
          alt="logo"
        />
      </div>
    </Link>
  );
}

export default Logo;
