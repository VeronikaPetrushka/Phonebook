import { useDispatch } from 'react-redux';
import { addContact} from '../../redux/contacts/operations';
import css from './ContactEditor.module.css';

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const contact = form.elements.contact.value;
    if (contact !== '') {
      dispatch(addContact(contact));
      form.reset();
      return;
    }
    alert('Contact cannot be empty. Enter some text!');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="text" className={css.input} />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
