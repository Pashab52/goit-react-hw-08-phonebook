import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu"
import { AuthNav } from "components/AuthNav/AuthNav"
import css from './Header.module.css'
import { selectIsLoggedIn } from "redux/auth/selectors"
import { useSelector } from "react-redux"

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
      <div className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    );
}


