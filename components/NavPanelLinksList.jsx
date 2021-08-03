// Styles
import styles from '../styles/NavPanelLinksList.module.scss';
const { container, activeNav } = styles;

// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// Redux - Actions
import { setGender, clearDirectory } from '../redux/actions/navigation';
import { setNav } from '../redux/actions/navbarPanel';

const NavpanelLinksList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const gender = useSelector((state) => state.navigation.gender);

  const onNavLinkClick = (x, e) => {
    dispatch(clearDirectory());
    dispatch(setGender(x));
    router.push(x);
    dispatch(setNav(false));
  };

  return (
    <ul className={container}>
      <li
        onClick={onNavLinkClick.bind(this, 'boys')}
        className={`${gender === 'boys' ? activeNav : null}`}
      >
        <span>BOYS</span>
      </li>

      <li
        onClick={onNavLinkClick.bind(this, 'girls')}
        className={`${gender === 'girls' ? activeNav : null}`}
      >
        <span>GIRLS</span>
      </li>

      <li
        onClick={onNavLinkClick.bind(this, 'baibes')}
        className={`${gender === 'baibes' ? activeNav : null}`}
      >
        <span>BAIBES</span>
      </li>
    </ul>
  );
};

export default NavpanelLinksList;
