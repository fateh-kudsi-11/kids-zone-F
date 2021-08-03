// Styles
import styles from '../styles/SingleNavDirectory.module.scss';
const { container, active } = styles;

// Hooks
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

// Redux - Actions
import { setDirectory } from '../redux/actions/navigation';
import { setNav } from '../redux/actions/navbarPanel';

const SingleNavDirectory = ({ title, path }) => {
  const directory = useSelector((state) => state.navigation.directory);
  const router = useRouter();
  const dispatch = useDispatch();

  const onNavLinkClick = (x, e) => {
    dispatch(setDirectory(x.toLowerCase()));
    router.push('/productsList');
    dispatch(setNav(false));
  };

  return (
    <li
      onClick={onNavLinkClick.bind(this, title)}
      className={` ${container} ${
        title.toLowerCase() === directory ? active : null
      }`}
    >
      <span>{title}</span>
    </li>
  );
};

export default SingleNavDirectory;
