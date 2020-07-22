import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames';

import { ROUTES_NAME, ROUTES_LINKS } from '../../../../pages/Home/Routes/Enums';
import Icon, { ICON_NAME } from '../../../../common/Icon';

import styles from './index.scss';

const NAV_CONFIG = [{
  icon: ICON_NAME.HOME,
  link: ROUTES_LINKS[ROUTES_NAME.FEEDS],
}, {
  icon: ICON_NAME.MESSAGE,
  link: ROUTES_LINKS[ROUTES_NAME.PROFILE],
}, {
  icon: ICON_NAME.SEARCH,
  link: ROUTES_LINKS[ROUTES_NAME.RECYCLE_AND_REUSE],
}, {
  icon: ICON_NAME.NOTIFICATION,
  link: ROUTES_LINKS[ROUTES_NAME.POLL],
}, {
  icon: ICON_NAME.MENU,
  link: ROUTES_LINKS[ROUTES_NAME.TWITTER],
}];

function NavBar() {
  const location = useLocation();
  return (
    <div className={styles.container}>
      {
        NAV_CONFIG.map(navElement => (
          <Link
            to={navElement.link}
            className={cx(styles.nav, {
              [styles.active]: location.pathname === navElement.link,
            })}
          >
            <Icon name={navElement.icon} onClick />
          </Link>
        ))
      }
    </div>
  );
}

export default NavBar;
