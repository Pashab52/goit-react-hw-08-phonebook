import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu"
import { AuthNav } from "components/AuthNav/AuthNav"
import css from './Header.module.css'

export const Header = () => {
    return (
      <header className={css.header}>
        
          <Navigation />
          <UserMenu />
          <AuthNav />
        
      </header>
    );
}