
// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/contactsSlice';
import { useSelector, useDispatch} from 'react-redux';

  
export function Filter() {
const filterData = useSelector(selectFilter);
  const dispatch = useDispatch();

  function handleFilterChange(event) {
    dispatch(setFilter(event.currentTarget.value))
  }
 
    return (
      <div className={css.filterWrap}>
        <label>
          <p className={css.filter}>Find contacts by name</p>
            <input
            className={css.filterInput}
            type="text"
            name="name"
            value={filterData}
            onChange={handleFilterChange}
          />
        </label>
      </div>
    );
}
  


