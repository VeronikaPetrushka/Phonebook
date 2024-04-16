import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.ContactContainer}>
      <div className={css.UserContact}>
        <div className={css.ContactBox}>
          <p>
            <IoMdPerson className={css.PhoneIcon} size="13" />
          </p>
          <p className={css.UserItem}>{name}</p>
        </div>
        <div className={css.ContactBox}>
          <p>
            <FaPhoneAlt className={css.UserIcon} size="13" />
          </p>
          <p className={css.UserItem}>{number}</p>
        </div>
      </div>
      <button className={css.ContactDeleteBtn} onClick={() => handleDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
