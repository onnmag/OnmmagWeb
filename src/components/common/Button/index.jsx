import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './index.scss';

function Button({ onClick, className, children, isDisabled }) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={cx(styles.btn, {
        [styles.disabled]: isDisabled,
        [className]: className,
    })}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  isDisabled: false,
};

export default Button;
