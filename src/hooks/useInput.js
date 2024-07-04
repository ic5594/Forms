import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enterValue, setEnterValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const handleInputChange = (event) => {
    setEnterValue(event.target.value);
    setDidEdit(false);
  };

  const valueIsValid = validationFn(enterValue)

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  return {
    value: enterValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid
  }
}