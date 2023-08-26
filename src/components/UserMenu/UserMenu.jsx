
import css from './UserMenu.module.css'


export const UserMenu = () => {
    //   const dispatch = useDispatch();
    //   const { user } = useAuth();

    return (
      <div className={css.wrapper}>
        <p className={css.username}>Welcome,</p>
        <button type="button">
          {/* <button type="button" onClick={() => dispatch(logOut())}> */}
          Logout
        </button>
      </div>
    );
}