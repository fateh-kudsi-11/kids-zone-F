// Styles
import styles from '../styles/NavLinks.module.scss';
const { container, active } = styles;

// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// Redux - Actions
import { setGender, clearDirectory } from '../redux/actions/navigation';

const NavLinks = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const gender = useSelector((state) => state.navigation.gender);

  const onNavLinkClick = (x, e) => {
    dispatch(clearDirectory());
    dispatch(setGender(x));
    router.push(x);
  };

  return (
    <ul className={container}>
      <li
        onClick={onNavLinkClick.bind(this, 'boys')}
        className={`${gender === 'boys' ? active : null}`}
      >
        <span>BOYS</span>
      </li>

      <li
        onClick={onNavLinkClick.bind(this, 'girls')}
        className={`${gender === 'girls' ? active : null}`}
      >
        <span>GIRLS</span>
      </li>

      <li
        onClick={onNavLinkClick.bind(this, 'baibes')}
        className={`${gender === 'baibes' ? active : null}`}
      >
        <span>BAIBES</span>
      </li>
    </ul>
  );
};

export default NavLinks;
