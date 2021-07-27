import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onDeleteContact, id }) => {
  return (
    <li className={styles.contactListItem}>
      <span>{name}</span>: <span>{number}</span>
      <button
        className={styles.deleteContactBtn}
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
