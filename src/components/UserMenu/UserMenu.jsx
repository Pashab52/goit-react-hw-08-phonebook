import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';


export const UserMenu = () => {
      const dispatch = useDispatch();
      const {email} = useSelector(selectUser);

    return (
      <div className={css.wrapper}>
        <p className={css.username}>{email}</p>

          <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </div>
    );
}