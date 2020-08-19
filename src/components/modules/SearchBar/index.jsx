import React from 'react';

import Icon from '../../common/Icon';
import ICON_NAME from '../../common/Icon/enum';

import { STATICS } from '../../../constants/STATICS';
import styles from './index.scss';

function SearchBar() {
  return (
    <div className={styles.container}>
      <Icon name={ICON_NAME.SEARCH} className={styles.icon} size={3} />
      <input
        type="search"
        className={styles.searchBox}
        placeholder={STATICS.INPUT_PLACEHOLDER}
      />
    </div>
  );
}

export default SearchBar;
