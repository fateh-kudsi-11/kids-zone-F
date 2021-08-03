// Styles
import styles from '../styles/Alerts.module.scss';
const { alertsContainer } = styles;
// Redux
import { useSelector } from 'react-redux';

// Components
import Alert from './Alert';

const Alerts = () => {
  const alerts = useSelector((state) => state.alerts);
  return (
    <>
      {alerts.length > 0 && (
        <ul className={alertsContainer}>
          {alerts.map((alert) => (
            <Alert key={alert.id} {...alert} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Alerts;
