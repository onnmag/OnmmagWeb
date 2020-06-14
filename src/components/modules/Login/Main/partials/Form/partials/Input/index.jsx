import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

function Input({ type, isValid, label, onChange, value, onBlur }) {
  return (
      <label htmlFor={type} className={styles.container}>
        <div className={styles.inputContainer}>
          <span className={styles.label}>{label}</span>
          <input
            className={styles.input}
            type={type}
            id={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
        {!isValid && <span />}
      </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  value: '',
};

export default Input;
