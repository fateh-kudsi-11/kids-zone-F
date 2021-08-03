export function checkEmail(inputValue, setValue) {
  if (inputValue.value === '')
    return setValue({
      ...inputValue,
      errorMsg: `Email is required`,
      isError: true
    });
  // eslint-disable-next-line
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(inputValue.value.trim()))
    return setValue({
      ...inputValue,
      errorMsg: 'please enter a valid email address',
      isError: true
    });

  return setValue({
    ...inputValue,
    errorMsg: '',
    isError: false
  });
}

export function checkLength(inputValue, setValue, inputType) {
  if (inputValue.value === '')
    return setValue({
      ...inputValue,
      errorMsg: `${inputType} is required`,
      isError: true
    });
  return setValue({
    ...inputValue,
    errorMsg: '',
    isError: false
  });
}

export function checkPassword(inputValue, setValue, inputType) {
  if (inputValue.value === '')
    return setValue({
      ...inputValue,
      errorMsg: `${inputType} is required`,
      isError: true
    });
  if (inputValue.value.length < 6) {
    return setValue({
      ...inputValue,
      errorMsg: `Password must be at less 6  characters`,
      isError: true
    });
  }
  return setValue({
    ...inputValue,
    errorMsg: '',
    isError: false
  });
}

export function checkConfirmPassword(
  inputValue,
  setValue,
  inputType,
  password
) {
  if (inputValue.value === '')
    return setValue({
      ...inputValue,
      errorMsg: `${inputType} is required`,
      isError: true
    });
  if (inputValue.value !== password) {
    return setValue({
      ...inputValue,
      errorMsg: `Passwords do not match`,
      isError: true
    });
  }
  return setValue({
    ...inputValue,
    errorMsg: '',
    isError: false
  });
}
