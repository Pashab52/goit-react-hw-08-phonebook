import { useState } from 'react';
import css from './ModalForm.module.css'
import { FaTimes } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';


export function ModalForm(props) {
  const [name, setName] = useState(props.contact.name);
  const [number, setNumber] = useState(props.contact.number);
  const id = props.contact.id;


  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleInputChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'number':
        setNumber(event.currentTarget.value);
        break;

      default:
        console.warn('error');
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const identicalContact = contacts.some(contact => contact.name === name);

    identicalContact && props.contact.number === number
      ? alert(`${name} is already in contacts`)
      : onNoIdenticalContact();
  };

  function onNoIdenticalContact() {
    dispatch(editContact({ id, name, number }));
    props.onModalClose()
    reset();
  }

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.modalForm} onSubmit={handleFormSubmit}>
      <button
        className={css.modalCloseBtn}
        type="button"
        onClick={props.onModalClose}
      >
        <FaTimes size={14} />
      </button>
      <h2 className={css.modalTitle}>Edit contact</h2>
      <label className={css.modalLabel}>
        Name <br />
        <input
          className={css.modalInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          maxLength="30"
          required
          value={name}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Number <br />
        <input
          className={css.modalInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          maxLength="20"
          required
          value={number}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
}
