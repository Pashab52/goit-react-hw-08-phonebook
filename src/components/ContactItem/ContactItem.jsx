import PropTypes from 'prop-types';
import css from './ContactItem.module.css'
import { useDispatch} from 'react-redux';
import { deleteContact } from 'redux/contacts/operations'; 
import { BiUser, BiSolidPhone } from 'react-icons/bi';
import { FaTimes, FaPen, FaUserAlt } from 'react-icons/fa';




export function ContactItem (props) {
  const dispatch = useDispatch();

 
  
    return (
      <li className={css.contactItem}>
        <div className={css.contText}>
          <FaUserAlt className={css.contIcon} />
          <p>{props.name}</p>
        </div>
        <div className={css.contText}>
          <BiSolidPhone size={18} className={css.contIcon} />
          <p>{props.number}</p>
        </div>
        <button
          className={css.contBtnEdit}
          type="button"
          onClick={() => props.onEditBtnClick(props.contact)}
        >
          <FaPen
            style={{
              width: '26',
            }}
          />
        </button>
        <button
          className={css.contBtn}
          type="button"
          onClick={() => dispatch(deleteContact(props.id))}
        >
          <FaTimes
            style={{
              width: '26',
            }}
          />
        </button>
      </li>
    );
  }

 ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };