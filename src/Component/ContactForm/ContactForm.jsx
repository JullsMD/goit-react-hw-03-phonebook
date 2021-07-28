import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddContactBtn from './AddContactBtn/AddContactBtn';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };
  reset = () => this.setState({ ...INITIAL_STATE });

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = { id: uuidv4(), name, number };
    this.props.onSubmitForm(contact);
    this.reset();
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  labelInputIdName = uuidv4();
  labelInputIdNumber = uuidv4();

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor={this.labelInputIdName}>
          Name
          <input
            className={styles.input}
            type="text"
            id={this.labelInputIdName}
            name="name"
            value={name}
            placeholder="Julia Melnik"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleInputChange}
          ></input>
        </label>

        <label className={styles.label} htmlFor={this.labelInputIdNumber}>
          Number
          <input
            className={styles.input}
            type="tel"
            id={this.labelInputIdNumber}
            name="number"
            value={number}
            placeholder="+380..."
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleInputChange}
          ></input>
        </label>

        <AddContactBtn />
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default ContactForm;
