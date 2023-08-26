// import { ContactForm } from "./ContactForm/ContactForm";
// import { ContactList } from "./ContactList/ContactList";
// import { Filter } from "./Filter/Filter";
// import { Loader } from "./Loader/Loader";
// import css from './App.module.css'
// import { useDispatch, useSelector } from 'react-redux';

// import { selectError, selectIsLoading } from "redux/selectors";
// import { useEffect } from "react";
// import { fetchContacts } from "redux/operations";

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

export function App() {


  //  const isLoading = useSelector(selectIsLoading);
  //  const error = useSelector(selectError);
  // const dispatch = useDispatch()



  
  // useEffect(() => {

  //   dispatch(fetchContacts());

  // }, [dispatch]);
 

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route
          path="/register"
          element={
           <Register />
          }
        />
        <Route
          path="/login"
          element={
            <Login />
          }
        />
        <Route
          path="/contacts"
          element={
           <Contacts />
          }
        />
      </Route>
    </Routes>

    // <div className={css.phoneContainer}>
    //   <h1 className={css.title}>Phonebook</h1>
    //   <ContactForm />

    //   <Filter />

    //   <div className={css.contactsTitleWrap}>
    //     <h2 className={css.contactsTitle}>Contacts</h2>
    //     {isLoading &&  <Loader/>}
    //   </div>
    //   {error && <p>Contacts not found</p>}

    //   <ContactList />
    // </div>
  );
};
