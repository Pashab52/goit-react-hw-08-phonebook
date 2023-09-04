import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import phone from '../img/phonebook2.png'
import task from '../img/Tasks.png';
import calendar from '../img/Calendar.png';
import map from '../img/map.png';

const Home = () => {
  const isLogIn = useSelector(selectIsLoggedIn)
  return (
    <div className="homeWrap">
      <h1 className="homeTitle">Notebook</h1>
      <nav className="homeNav">
        {isLogIn && (
          <Link className="homeLink" to="/contacts">
            <img
              className="homeImg"
              src={phone}
              alt="contacts"
              width="90px"
              height="100px"
            />
          </Link>
        )}
        {isLogIn && (
          <Link className="homeLink" to="/tasks">
            <img
              className="homeImg"
              src={task}
              alt="tasks"
              width="100px"
              height="100px"
            />
          </Link>
        )}

        <Link className="homeLink" to="/calendar">
          <img
            className="homeImg"
            src={calendar}
            alt="calendar"
            width="90px"
            height="105px"
          />
        </Link>
        <Link className="homeLink" to="/map">
          <img
            className="homeImg"
            src={map}
            alt="map"
            width="90px"
            height="105px"
          />
        </Link>
      </nav>
    </div>
  );
};

export default Home;
