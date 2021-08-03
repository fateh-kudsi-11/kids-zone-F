// Styles
import styles from '../styles/Alert.module.scss';
const { alertContainer, success } = styles;

// Hooks
import { useDispatch } from 'react-redux';

// Redux - actions
import { removeAlert } from '../redux/actions/alerts';

const Alert = ({ alertTitle, alertMsg, alertType, id }) => {
  const dispatch = useDispatch();
  const onRemoveAlertClick = () => {
    dispatch(removeAlert(id));
  };
  return (
    <li
      className={`${alertContainer} ${
        alertType === 'success' ? success : null
      }`}
    >
      <h2>{alertTitle}</h2>
      <p>{alertMsg}</p>
      <button onClick={onRemoveAlertClick}>
        <i className='material-icons'>clear</i>
      </button>
    </li>
  );
};

export default Alert;
