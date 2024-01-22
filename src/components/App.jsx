// import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Calendar = lazy(() => import('../pages/Calendar'));
const Tasks = lazy(() => import('../pages/Tasks'));
const Map = lazy(() => import('../pages/Map'));

export function App() {

 const dispatch = useDispatch();
 const  isRefreshing = useSelector(selectIsRefreshing);

 useEffect(() => {
   dispatch(refreshUser());
 }, [dispatch]);
 

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/map" element={<Map />} />

        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/" component={<Register />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<Login />} />}
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="/tasks"
          element={<PrivateRoute redirectTo="/login" component={<Tasks />} />}
        />

        <Route
          path="*"
          element={
            <div
              style={{
              textAlign:"center"
              }}
            >
              <h2>404</h2>
              <h2>Page not found!</h2>
            </div>
          }
        />
      </Route>
    </Routes>
  );
};
