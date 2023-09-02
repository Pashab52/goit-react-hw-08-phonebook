import { Helmet } from 'react-helmet';
import css from './Contacts.module.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect, useState } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Modal } from 'components/Modal/Modal';
import { ModalForm } from 'components/ModalForm/ModalForm';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [showModal, setShowModal] = useState(false);
  const [editContact, setEditContact] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleEditClick = contact => {
    setEditContact(contact);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <ContactForm />
      <Filter />
      <div className={css.contactsTitleWrap}>
        <h2 className={css.contactsTitle}>Contacts</h2>
      </div>
      {isLoading && <Loader />}
      {error && <p>Contacts not found</p>}
      <ContactList onEditBtnClick={handleEditClick} />
      {showModal && (
        <Modal onModalClose={closeModal}>
          <ModalForm contact={editContact} onModalClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Contacts;
