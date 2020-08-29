import React from 'react';
import PropTypes from 'prop-types';

import useInputField from '../../../../../../../../hooks/useInputField';
import { INPUT_LABELS, STATICS, BUTTON, INPUT_PLACEHOLDERS, FORM_TYPE } from '../../../../enum';
import { INPUT_TYPES } from '../../../../../../../../constants/STATICS';
import Input from '../Input';
import Button from '../../../../../../../common/Button';
import { useAuth } from '../../../../../../../../core/authProvider';

import styles from './index.scss';

function Login({ setFormType }) {
  const { logIn } = useAuth();
  const userName = useInputField({ type: INPUT_TYPES.USER_NAME, initialValue: 'rraghav1' });
  const password = useInputField({ type: INPUT_TYPES.PASSWORD, initialValue: 'Raghav!@#123' });

  const handleLogin = () => {
    if (userName.inputValue && password.inputValue) {
      logIn({
        username: userName.inputValue,
        password: password.inputValue,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>{STATICS.LOG_IN}</p>
        <p>{STATICS.DESCRIPTION}</p>
      </div>
      <Input
        label={INPUT_LABELS.USER_NAME}
        value={userName.inputValue}
        onChange={userName.handleInputValue}
        validationObject={userName.validationObject}
        onBlur={userName.handleOnBlur}
        isTouched={userName.isTouched}
        placeholder={INPUT_PLACEHOLDERS.USER_NAME}
        type="input"
      />

      <Input
        label={INPUT_LABELS.PASSWORD}
        value={password.inputValue}
        onChange={password.handleInputValue}
        validationObject={password.validationObject}
        onBlur={password.handleOnBlur}
        isTouched={password.isTouched}
        type="password"
      />

      <div className={styles.forgotPassword}>
        <a>{STATICS.FORGOT_PASSWORD}</a>
      </div>

      <div className={styles.btnContainer}>
        <Button
          onClick={handleLogin}
        >
          {BUTTON.LOGIN}
        </Button>
      </div>
      <div className={styles.label}>
        <span className={styles.signUp}>
          {'Not a member yet? '}
          <a onClick={() => setFormType(FORM_TYPE.SIGN_UP)}>{BUTTON.SIGN_UP}</a>
          {' here'}
        </span>
      </div>

      <div className={styles.qrCodeContainer}>
        <div className={styles.qrCode}>
          <img src="https://pngimg.com/uploads/qr_code/qr_code_PNG26.png" alt="qrCode" />
        </div>
        <div className={styles.qrText}>
          <p className={styles.qrHeader}>{STATICS.QR_CODE_HEADER}</p>
          <p className={styles.qrDescription}>{STATICS.QR_DESCRIPTION}</p>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  setFormType: PropTypes.func.isRequired,
};

export default Login;
