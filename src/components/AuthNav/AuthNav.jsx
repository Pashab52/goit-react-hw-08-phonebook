import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';


export const AuthNav = () => {
  return (
    <div className={css.authLinkWrap}>
      <NavLink className={css.authLink} to="/register">
        Register
      </NavLink>
      <NavLink className={css.authLink} to="/login">
        Login
      </NavLink>
    </div>
  );
};
