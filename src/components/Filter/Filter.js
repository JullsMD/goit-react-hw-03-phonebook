import PropTypes from 'prop-types';
import s from '../ContactForm/ContactForm.module.css';

const Filter = ({ value, onHandleChange }) => {
  return (
    <form className={s.form}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          placeholder="Search contact"
          name="filter"
          value={value}
          onChange={onHandleChange}
        ></input>
      </label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
};
export default Filter;
