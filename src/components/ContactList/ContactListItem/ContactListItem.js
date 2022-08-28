import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, onDeleteContact, id }) => {
  return (
    <li className={s.item}>
      <span>{name}</span>: <span>{number}</span>
      <button
        className={s.btn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        X
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
