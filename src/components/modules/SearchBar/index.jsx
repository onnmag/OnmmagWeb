import React, { useState } from 'react';

import Icon from '../../common/Icon';
import ICON_NAME from '../../common/Icon/enum';

import { useAppState } from '../../../App';

import { STATICS } from '../../../constants/STATICS';
import styles from './index.scss';

function SearchBar() {
  const { onSearch, setSearchValue } = useAppState();
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.keyCode) {
      if (e.keyCode === 13 && inputValue.length) {
        setSearchValue(inputValue);
        onSearch.callBack();
      }
    } else if (inputValue.length) {
      setSearchValue(inputValue);
      onSearch.callBack();
      }
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="navSearch">
        <input
          id="navSearch"
          type="search"
          className={styles.searchBox}
          placeholder={STATICS.INPUT_PLACEHOLDER}
          value={inputValue}
          onChange={handleInputValue}
          onKeyDown={handleSearch}
        />
        <button className={styles.btn} onClick={handleSearch}>
          <Icon
            name={ICON_NAME.SEARCH}
            className={styles.icon}
            size={5}
          />
        </button>
      </label>
    </div>
  );
}

export default SearchBar;
