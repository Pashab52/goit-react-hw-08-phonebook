import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';


export const Navigation = () => {
  const isLogIn = useSelector(selectIsLoggedIn)

  return (
    <nav>
       <NavLink className={css.link} to="/">
        Home
      </NavLink>
   
      {isLogIn && <NavLink className={css.link} to="/contacts">
        Contacts
      </NavLink>}

    
       <NavLink className={css.link} to="/calendar">
        Date Calendar
      </NavLink>
    </nav>
  );
};
