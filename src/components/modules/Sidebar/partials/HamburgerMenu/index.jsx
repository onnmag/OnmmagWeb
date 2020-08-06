import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './index.scss';

function HamburgerMenu({ handleIsOpen, isOpen }) {
  const handleOnChange = () => {
    handleIsOpen(!isOpen);
  };
  return (
    <div className={styles.navigation}>
      <label
        className={cx(styles.button, {
          [styles.inActive]: !isOpen,
        })}
        htmlFor="navi-toggle"
      >
        <span
          className={cx(styles.icon, {
            [styles.isActive]: isOpen,
          })}
        />
        <input className={styles.checkbox} type="checkbox" id="navi-toggle" onChange={handleOnChange} />
      </label>
    </div>
  );
}

HamburgerMenu.propTypes = {
  handleIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default HamburgerMenu;
