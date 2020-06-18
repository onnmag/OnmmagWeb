import React, { useState } from 'react';
import cx from 'classnames';

import { SIDEBAR } from '../../../../../../../../../mocks';

import Icon from '../../../../../../../../common/Icon';

import styles from './index.scss';

function Pages() {
  const [activePage, setActivePage] = useState(SIDEBAR.PAGES[0].id);
  return (
    <div className={styles.container}>
      {
        SIDEBAR.PAGES.map(page => (
          <div
            role="presentation"
            onClick={() => setActivePage(page.id)}
            key={page.id}
            className={cx(styles.tabContainer, {
            [styles.active]: activePage === page.id,
          })}
          >
            <Icon name={page.icon} />
            <span className={styles.displayName}>{page.displayName}</span>
          </div>
        ))
      }
    </div>
  );
}

export default Pages;
