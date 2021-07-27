import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {filteredContacts.map(item => (
        <ContactListItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
