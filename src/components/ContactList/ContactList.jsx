import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import {
  selectFilterContacts,
} from 'redux/contacts/selectors';


export function ContactList() {

  const filterContactsData = useSelector(selectFilterContacts);



    return (
      <ul className={CSS.contctList}>
        {filterContactsData.map(contact => {
               return (
                 <ContactItem
                   name={contact.name}
                   number={contact.number}
                   key={contact.id}
                   id={contact.id}
                   ids={contact.id}
                 />
               );
          })}
      </ul>
    );
  }

