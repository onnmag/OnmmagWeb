import React from 'react';

import styles from './index.scss';

function Avatar() {
  return (
    <div className={styles.container}>
      <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="avatar"
        className={styles.avatar}
      />
    </div>
  );
}

export default Avatar;
