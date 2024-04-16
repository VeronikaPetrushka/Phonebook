import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.Navigation}>
      <NavLink className={css.navLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
      <NavLink className={css.navLink} to="/contacts">
        Contacts
      </NavLink>
      )}
    </nav>
  );
};
