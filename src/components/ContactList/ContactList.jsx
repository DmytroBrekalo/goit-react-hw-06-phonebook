import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'redux/contactsSlice';
import style from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const { contacts } = useSelector(state => state.contacts);
  const stateFilter = useSelector(state => state.filter);

  const getFilteredPerson = () => {
    const normalisedFilter = stateFilter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  return (
    <ul className={style.list}>
      {getFilteredPerson().map(({ id, name, number }) => {
        return (
          <li key={id} id={id} className={style.list_item}>
            {name}: {number}
            <button onClick={() => dispatch(remove(id))}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
