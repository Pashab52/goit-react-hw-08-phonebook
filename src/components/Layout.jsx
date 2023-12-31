import { Outlet, Link } from 'react-router-dom';
import { Header } from './Header/Header';
import { Suspense} from 'react';
import { Loader } from './Loader/Loader';
import css from './Layout.module.css'



const Layout = () => {


  
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className={css.background}>
          <Link
            to={"/"}
            className={css.bgBtn}
          
          ></Link>
          <div className={css.phoneContainer}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer"></div>
      </footer>
    </>
  );
};

export default Layout;
