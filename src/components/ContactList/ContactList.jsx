import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector} from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.ContactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
