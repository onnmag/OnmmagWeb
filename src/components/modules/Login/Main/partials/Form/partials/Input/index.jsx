import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './index.scss';

function Input({ type, validationObject, label, onChange, value, onBlur, placeholder, isTouched }) {
  return (
      <label htmlFor={type} className={styles.container}>
        <div className={styles.inputContainer}>
          <span className={styles.label}>{label}</span>
          <input
            className={cx(styles.input, {
              [styles.inputError]: (!validationObject.isValid && isTouched),
            })}
            type={type}
            id={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        </div>
        {(!validationObject.isValid && isTouched) && (
          <span className={styles.errorMessage}>{validationObject.errorMessage}</span>
        )}
      </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  validationObject: PropTypes.object,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string,
  isTouched: PropTypes.bool,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  placeholder: '',
  validationObject: {
    isValid: true,
    errorMessage: '123',
  },
  isTouched: false,
};

export default memo(Input);
