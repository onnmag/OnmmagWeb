import React from 'react';

import Logo from '../../../MasterHead/partials/Logo';
import Avatar from '../../../../common/Avatar';

import styles from './index.scss';

function Header() {
  return (
    <div>
      <Logo />
      <Avatar />
    </div>
  );
}

export default Header;

