import { useState } from 'react';

import { Validations } from '../utils/validations';

function useInputField({ type, validate = true, initialValue = '' }) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [validationObject, setValidationObject] = useState({
    isValid: !validate,
    errorMessage: '',
  });
  const [isTouched, setIsTouched] = useState(false);

  const validateInput = (value, rest) => Validations({ type, inputValue: value, rest });

  const handleInputValue = (e, ...rest) => {
    setInputValue(e.target.value);
    if (validate) {
      setValidationObject(validateInput(e.target.value, rest));
    }
  };

  const handleOnBlur = () => {
    setIsTouched(true);
  };

  return {
    inputValue,
    handleInputValue,
    handleOnBlur,
    validationObject,
    isTouched,
  };
}

export default useInputField;
