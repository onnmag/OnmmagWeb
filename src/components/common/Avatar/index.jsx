import React from 'react';

import { useAppState } from '../../../App';
import styles from './index.scss';

function Avatar() {
  const { toggleTheme } = useAppState();
  return (
    <div className={styles.container} onClick={toggleTheme} role="presentation">
      <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="avatar"
        className={styles.avatar}
      />
    </div>
  );
}

export default Avatar;
