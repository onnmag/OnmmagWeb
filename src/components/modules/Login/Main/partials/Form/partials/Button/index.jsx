import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

function Button({ children, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      className={styles.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
