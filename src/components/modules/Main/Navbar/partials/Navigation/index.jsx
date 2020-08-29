import React from 'react';

import Icon from '../../../../../common/Icon';
import Avatar from '../../../../../common/Avatar';
import ICON_NAME from '../../../../../common/Icon/enum';

import { useAuth } from '../../../../../../core/authProvider';

import styles from './index.scss';

function Navigation() {
  const { logOut } = useAuth();
  return (
    <div className={styles.container}>
      <Icon name={ICON_NAME.FRIENDS} />
      <Icon name={ICON_NAME.MESSAGE} />
      <Icon name={ICON_NAME.NOTIFICATION} />
      <Icon
        name={ICON_NAME.LOG_OUT}
        onClick={logOut}
      />
      <Avatar />
    </div>
  );
}

export default Navigation;
