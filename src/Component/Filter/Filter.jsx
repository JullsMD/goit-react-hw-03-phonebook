import PropTypes from 'prop-types';
import styles from '../ContactForm/ContactForm.module.css';

const Filter = ({ value, onHandleChange }) => {
  return (
    <div>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          placeholder="Search contact"
          name="filter"
          value={value}
          onChange={onHandleChange}
        ></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
};
export default Filter;
