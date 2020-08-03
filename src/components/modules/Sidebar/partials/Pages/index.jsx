import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { SIDEBAR } from '../../../../../mocks';
import { useAppState } from '../../../../../App';

import Icon from '../../../../common/Icon';

import styles from './index.scss';
import { ROUTES_NAME } from '../../../../pages/Home/Routes/Enums';

function Pages() {
  const { setActivePage, activePage } = useAppState();
  function handleActivePage(id) {
    setActivePage(id);
  }
  return (
    <div className={styles.container}>
      {
        SIDEBAR.PAGES.map(page => (
          page.id === ROUTES_NAME.HOME ? (
            <div
              role="presentation"
              onClick={handleActivePage.bind(null, page)}
              key={page.id}
            >
              <Link
                to={page.link}
                className={cx(styles.tabContainer, {
                  [styles.active]: page.id === activePage.id,
                })}
              >
                <Icon name={page.icon} />
                <span className={styles.displayName}>{page.displayName}</span>
              </Link>
            </div>
          ) : (
            <div
              role="presentation"
              onClick={handleActivePage.bind(null, page)}
              key={page.id}
              className={cx(styles.tabContainer, {
                [styles.active]: page.id === activePage.id,
              })}
            >
              <Icon name={page.icon} />
              <span className={styles.displayName}>{page.displayName}</span>
            </div>
          )
        ))
      }
    </div>
  );
}

export default Pages;
