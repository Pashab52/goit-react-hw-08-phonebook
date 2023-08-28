import { Helmet } from 'react-helmet';
import css from './Contacts.module.css'
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(fetchContacts());

  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <ContactForm />
      <Filter />

      <div className={css.contactsTitleWrap}>
        <h2 className={css.contactsTitle}>Contacts</h2>
        {isLoading && <Loader />}
      </div>
      {error && <p>Contacts not found</p>}
      <ContactList />
    </>
  );
};

export default Contacts;

