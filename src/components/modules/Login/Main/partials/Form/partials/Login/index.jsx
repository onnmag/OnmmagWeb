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
  const email = useInputField({ type: INPUT_TYPES.EMAIL });
  const password = useInputField({ type: INPUT_TYPES.PASSWORD });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>{STATICS.LOG_IN}</p>
        <p>{STATICS.DESCRIPTION}</p>
      </div>
      <Input
        label={INPUT_LABELS.EMAIL}
        value={email.inputValue}
        onChange={email.handleInputValue}
        isValid={email.isValid}
        onBlur={email.handleOnBlur}
        type="input"
        placeholder={INPUT_PLACEHOLDERS.EMAIL}
      />

      <Input
        label={INPUT_LABELS.PASSWORD}
        value={password.inputValue}
        onChange={password.handleInputValue}
        isValid={password.isValid}
        onBlur={password.handleOnBlur}
        type="password"
      />

      <div className={styles.forgotPassword}>
        <a>{STATICS.FORGOT_PASSWORD}</a>
      </div>

      <div className={styles.btnContainer}>
        <Button onClick={logIn}>
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
