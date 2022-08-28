import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
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
