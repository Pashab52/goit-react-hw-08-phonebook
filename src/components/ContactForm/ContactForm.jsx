import { useState } from "react";
import css from './ContactForm.module.css'
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from "redux/operations";  
import { selectContacts } from 'redux/selectors';
// import { fetchContacts } from "redux/operations";


export function ContactForm() {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
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
    const identicalContact = contacts.some(
      contact => contact.name === name
    );

    identicalContact
      ? alert(`${name} is already in contacts`)
      : onNoIdenticalContact();
  };

  function onNoIdenticalContact() {
    
    dispatch(addContact({ name, number }));
 
    reset();
  }

  const reset = () => {
    setName('');
    setNumber('');
  };

 
    return (
      <form className={css.contactForm} onSubmit={handleFormSubmit}>
        <label>
          Name <br />
          <input
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

        <button type="submit">Add contact</button>
      </form>
    );
  }

