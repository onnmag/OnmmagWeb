import React from 'react';

import Icon from '../../../../common/Icon';
import Avatar from '../../../../common/Avatar';
import ICON_NAME from '../../../../common/Icon/enum';

import styles from './index.scss';

function Navigation() {
  return (
    <div className={styles.container}>
      <Icon name={ICON_NAME.FRIENDS} />
      <Icon name={ICON_NAME.MESSAGE} />
      <Icon name={ICON_NAME.NOTIFICATION} />
      <Avatar />
    </div>
  );
}

export default Navigation;
