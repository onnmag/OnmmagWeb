import { ERROR_MESSAGES } from './errorMessages';
import { INPUT_TYPES } from '../../constants/STATICS';

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validateName = (name) => name.length > 0;

const validatePassword = (password) => password.length > 2;

const validateConfirmPassword = (confirmPassword, { password }) => password === confirmPassword;

const validateUserName = (userName) => userName.length > 2;

function Validations({ type, inputValue, rest }) {
  const validateObject = {
    isValid: true,
    errorMessage: '',
  };

  switch (type) {
    case INPUT_TYPES.EMAIL: {
      validateObject.isValid = validateEmail(inputValue);
      validateObject.errorMessage = ERROR_MESSAGES.EMAIL;
      break;
    }
    case INPUT_TYPES.FIRST_NAME: {
      validateObject.isValid = validateName(inputValue);
      validateObject.errorMessage = ERROR_MESSAGES.FIRST_NAME;
      break;
    }
    case INPUT_TYPES.LAST_NAME: {
      validateObject.isValid = validateName(inputValue);
      validateObject.errorMessage = ERROR_MESSAGES.LAST_NAME;
      break;
    }
    case INPUT_TYPES.USER_NAME: {
      validateObject.isValid = validateUserName(inputValue);
      validateObject.errorMessage = ERROR_MESSAGES.USER_NAME;
      break;
    }
    case INPUT_TYPES.PASSWORD: {
      validateObject.isValid = validatePassword(inputValue);
      validateObject.errorMessage = ERROR_MESSAGES.PASSWORD;
      break;
    }
    case INPUT_TYPES.CONFIRM_PASSWORD: {
      validateObject.isValid = validateConfirmPassword(inputValue, rest);
      validateObject.errorMessage = ERROR_MESSAGES.CONFIRM_PASSWORD;
      break;
    }
    default:
      break;
  }
  return validateObject;
}

const isFormValid = (data) => {
  const validateFormElement = (field) => {
    if (field.validationObject.isValid) {
      // formField is valid
      return true;
    } else if (!field.isTouched) {
      // if field is mandatory and not touched show error
      field.handleOnBlur();
      field.handleOnChange();
      return false;
    }
    return false;
  };
  if (Array.isArray(data)) {
    return data.reduce((acc, formObj) => validateFormElement(formObj), true);
  }
  return validateFormElement(data);
};

export {
  Validations,
  isFormValid,
};
