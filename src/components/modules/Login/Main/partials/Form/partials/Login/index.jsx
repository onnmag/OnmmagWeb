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
        <Button
          text={BUTTON.LOGIN}
          onClick={() => {}}
        />
      </div>
      <div className={styles.label}>
        <span>{STATICS.NEED_AN_ACCOUNT}</span>
        <span>{STATICS.REGISTER}</span>
      </div>
    </div>
  );
}

export default Login;
