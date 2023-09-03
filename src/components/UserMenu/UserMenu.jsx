import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { BiLogOut } from 'react-icons/bi';

export const UserMenu = () => {
      const dispatch = useDispatch();
      const {email} = useSelector(selectUser);

    return (
      <div className={css.wrapper}>
        <p className={css.username}>{email}</p>

        <button
          className={css.userBtn}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          <BiLogOut size={24}/>
        </button>
      </div>
    );
}