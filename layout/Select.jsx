// Styles
import styles from '../styles/Input.module.scss';
const { formGroup, active } = styles;

const Select = ({
  selectName,
  selectValue,
  labelText,
  selectId,
  setValue,
  checkValidation,
  runValidation,
  options
}) => {
  const { value, errorMsg, isError } = selectValue;
  const onChange = (e) => {
    setValue({
      ...selectValue,
      value: e.target.value
    });
  };
  const onBlur = (e) => {
    if (!runValidation) return;
    checkValidation(selectValue, setValue, selectName);
  };
  const randomId = `${selectId}__${Math.floor(Math.random() * 100)}`;
  return (
    <div className={formGroup}>
      <label htmlFor={randomId}>{labelText}</label>
      <select
        name={randomId}
        id={randomId}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={isError ? active : null}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <small className={isError ? active : null}>{errorMsg}</small>
    </div>
  );
};

export default Select;
