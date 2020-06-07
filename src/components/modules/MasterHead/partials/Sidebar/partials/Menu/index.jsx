import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

function Menu({ isOpen }) {
  return (
    <div>
      Menu
    </div>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Menu;
