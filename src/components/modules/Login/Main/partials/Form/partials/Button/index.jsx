import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

function Button({ text, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      className={styles.btn}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
