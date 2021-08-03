// Styles
import styles from '../styles/Input.module.scss';
const { formGroup, active } = styles;

const Input = ({
  inputType,
  inputName,
  inputValue,
  labelText,
  inputId,
  placeholder,
  setValue,
  checkValidation,
  password
}) => {
  const { value, errorMsg, isError } = inputValue;

  const onChange = (e) => {
    setValue({
      ...inputValue,
      value: e.target.value
    });
  };
  const onBlur = (e) => {
    checkValidation(inputValue, setValue, inputName, password);
  };

  const randomId = `${inputId}__${Math.floor(Math.random() * 100)}`;
  return (
    <div className={formGroup}>
      <label htmlFor={randomId}>{labelText}</label>
      <input
        type={inputType}
        value={value}
        name={randomId}
        id={randomId}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={isError ? active : null}
      />
      <small className={isError ? active : null}>{errorMsg}</small>
    </div>
  );
};

export default Input;
