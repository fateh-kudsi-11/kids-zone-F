// Styles
import styles from '../styles/NavbarDirectoryList.module.scss';
const { container } = styles;

// Hooks

import { useSelector } from 'react-redux';

// UTILS
import filterEl from '../utils/navDirectory';

// COMPONENTS
import SingleNavDirectory from './SingleNavDirectory';

const NavbarDirectoryList = () => {
  const gender = useSelector((state) => state.navigation.gender);

  return (
    <ul className={container}>
      {gender &&
        filterEl[gender]?.map((el) => (
          <SingleNavDirectory key={el.title} {...el} />
        ))}
    </ul>
  );
};

export default NavbarDirectoryList;
