import React from 'react';
import PropTypes from 'prop-types';

import useInputField from '../../../../../../../../hooks/useInputField';
import { useAuth } from '../../../../../../../../core/authProvider';
import { INPUT_TYPES } from '../../../../../../../../constants/STATICS';
import { BUTTON, FORM_TYPE, INPUT_LABELS, STATICS } from '../../../../enum';
import { isFormValid } from '../../../../../../../../utils/validations';

import Input from '../Input';
import Button from '../../../../../../../common/Button';

import styles from './index.scss';

function SignUp({ setFormType }) {
  const { signUp } = useAuth();

  const firstName = useInputField({ type: INPUT_TYPES.FIRST_NAME });
  const lastName = useInputField({ type: INPUT_TYPES.LAST_NAME });
  const password = useInputField({ type: INPUT_TYPES.PASSWORD });
  const confirmPassword = useInputField({ type: INPUT_TYPES.CONFIRM_PASSWORD });
  const email = useInputField({ type: INPUT_TYPES.EMAIL });
  const userName = useInputField({ type: INPUT_TYPES.USER_NAME });

  const submit = () => {
    const form = {
      name: `${firstName.inputValue} ${lastName.inputValue}`,
      password: password.inputValue,
      username: userName.inputValue,
      email: email.inputValue,
    };
    const isValid = isFormValid([firstName, lastName, password, confirmPassword, email, userName]);
    signUp(form, isValid);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>{STATICS.SIGN_UP}</p>
        <p>{STATICS.SIGN_UP_DESCRIPTION}</p>
      </div>
      <div className={styles.col2}>
        <Input
          label={INPUT_LABELS.FIRST_NAME}
          onChange={firstName.handleInputValue}
          validationObject={firstName.validationObject}
          onBlur={firstName.handleOnBlur}
          type="input"
          value={firstName.inputValue}
          isTouched={firstName.isTouched}
        />
        <Input
          label={INPUT_LABELS.LAST_NAME}
          onChange={lastName.handleInputValue}
          validationObject={lastName.validationObject}
          onBlur={lastName.handleOnBlur}
          value={lastName.inputValue}
          isTouched={lastName.isTouched}
          type="input"
        />
      </div>
      <Input
        label={INPUT_LABELS.NEW_EMAIL}
        onChange={email.handleInputValue}
        validationObject={email.validationObject}
        onBlur={email.handleOnBlur}
        isTouched={email.isTouched}
        value={email.inputValue}
        type="input"
      />
      <div className={styles.col2}>
        <Input
          label={INPUT_LABELS.NEW_PASSWORD}
          onChange={password.handleInputValue}
          validationObject={password.validationObject}
          isTouched={password.isTouched}
          onBlur={password.handleOnBlur}
          value={password.inputValue}
          type="password"
        />
        <Input
          label={INPUT_LABELS.CONFIRM_PASSWORD}
          onChange={(e) => confirmPassword.handleInputValue(e, { password: password.inputValue })}
          validationObject={confirmPassword.validationObject}
          isTouched={confirmPassword.isTouched}
          onBlur={confirmPassword.handleOnBlur}
          value={confirmPassword.inputValue}
          type="password"
        />
      </div>
      <Input
        label={INPUT_LABELS.USER_NAME}
        onChange={userName.handleInputValue}
        validationObject={userName.validationObject}
        isTouched={userName.isTouched}
        onBlur={userName.handleOnBlur}
        value={userName.inputValue}
        type="input"
      />
      <div className={styles.buttonContainer}>
        <Button
          onClick={submit}
          className={styles.btn}
        >
          {BUTTON.SIGN_UP}
        </Button>
      </div>
      <span className={styles.login}>
          {'Already have an account '}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <a onClick={() => setFormType(FORM_TYPE.LOGIN)}>{BUTTON.LOGIN}</a>
        {' here'}
      </span>
    </div>
  );
}

SignUp.propTypes = {
  setFormType: PropTypes.func.isRequired,
};

export default SignUp;
