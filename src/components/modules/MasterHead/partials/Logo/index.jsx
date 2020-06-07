import React from 'react';

import styles from './index.scss';

function Logo() {
  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Meo_logo.svg/799px-Meo_logo.svg.png"
        alt="logo"
      />
    </div>
  );
}

export default Logo;
