import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';


export const Navigation = () => {
  const isLogIn = useSelector(selectIsLoggedIn)

  return (
    <nav className={css.headerNav}>
      <NavLink className={css.headerLink} to="/">
        Home
      </NavLink>

      {isLogIn && (
        <NavLink className={css.headerLink} to="/contacts">
          Contacts
        </NavLink>
      )}
      {isLogIn && (
        <NavLink className={css.headerLink} to="/tasks">
          Tasks
        </NavLink>
      )}

      <NavLink className={css.headerLink} to="/calendar">
        Calendar
      </NavLink>
      <NavLink className={css.headerLink} to="/map">
       Map
      </NavLink>
    </nav>
  );
};
