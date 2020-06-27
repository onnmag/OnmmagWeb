import React from 'react';
import cx from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import { SIDEBAR } from '../../../../../../../../../mocks';
import { useAppState } from '../../../../../../../../../App';

import Icon from '../../../../../../../../common/Icon';

import styles from './index.scss';

function Pages() {
  const location = useLocation();
  const { setActivePage } = useAppState();
  function handleActivePage(id) {
    setActivePage(id);
  }
  return (
    <div>
      {
        SIDEBAR.PAGES.map(page => (
          <div
            role="presentation"
            onClick={handleActivePage.bind(null, page)}
            key={page.id}
          >
            <Link
              to={page.link}
              className={cx(styles.tabContainer, {
              [styles.active]: page.link === location.pathname,
            })}
            >
              <Icon name={page.icon} />
              <span className={styles.displayName}>{page.displayName}</span>
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default Pages;
