import React from 'react';

import useInputField from '../../../../../../../../hooks/useInputField';
import { INPUT_LABELS, STATICS, BUTTON } from '../../../../enum';
import { INPUT_TYPES } from '../../../../../../../../Enums/STATICS';
import Input from '../Input';
import Button from '../Button';

import styles from './index.scss';

function Login() {
  const email = useInputField({ type: INPUT_TYPES.EMAIL });
  const password = useInputField({ type: INPUT_TYPES.PASSWORD });
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>{STATICS.WELCOME_BACK}</p>
      </div>
      <Input
        label={INPUT_LABELS.EMAIL}
        value={email.inputValue}
        onChange={email.handleInputValue}
        isValid={email.isValid}
        onBlur={email.handleOnBlur}
        type="input"
      />

      <Input
        label={INPUT_LABELS.PASSWORD}
        value={password.inputValue}
        onChange={password.handleInputValue}
        isValid={password.isValid}
        onBlur={password.handleOnBlur}
        type="password"
      />

      <div className={styles.btnContainer}>
        <Button onClick={() => {}}>
          {BUTTON.LOGIN}
        </Button>
      </div>
      <div className={styles.label}>
        <span>{STATICS.NEED_AN_ACCOUNT}</span>
      </div>

      <div className={styles.btnContainer}>
        <Button onClick={() => {}}>
          {BUTTON.SIGN_UP}
        </Button>
      </div>

      <div className={styles.qrCodeContainer}>
        <div className={styles.qrCode}>
          <img src="https://pngimg.com/uploads/qr_code/qr_code_PNG26.png" />
        </div>
        <p className={styles.qrheader}>Log in with QR Code</p>
        <p className={styles.qrDescription}>Scan this with the ONNMAG App
          to log in instantly.
        </p>
      </div>
    </div>
  );
}

export default Login;
