import { useState } from 'react';

import { INPUT_TYPES } from '../Enums/STATICS';

function useInputField({ type, validate = true }) {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const validateInput = (value) => {
    switch (type) {
      case INPUT_TYPES.EMAIL:
        return value.length > 0;
      case INPUT_TYPES.PASSWORD:
        return value.length > 0;
      default:
        return value.length > 0;
    }
  };

  const handleInputValue = (e) => {
    setIsTouched(true);
    setInputValue(e.target.value);
    if (validate) {
      setIsValid(validateInput(e.target.value));
    }
  };

  const handleOnBlur = () => {
    setIsTouched(true);
  };

  return {
    inputValue,
    handleInputValue,
    handleOnBlur,
    isValid,
    isTouched,
  };
}

export default useInputField;
