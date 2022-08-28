import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

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
    const contact = { id: nanoid(), name, number };
    this.props.onSubmitForm(contact);
    this.reset();
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  labelInputIdName = nanoid();
  labelInputIdNumber = nanoid();

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor={this.labelInputIdName}>
          Name
          <input
            className={s.input}
            type="text"
            id={this.labelInputIdName}
            name="name"
            value={name}
            placeholder="Yuliia Melnyk /for example"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
          ></input>
        </label>

        <label className={s.label} htmlFor={this.labelInputIdNumber}>
          Number
          <input
            className={s.input}
            type="tel"
            id={this.labelInputIdNumber}
            name="number"
            value={number}
            placeholder="+380..."
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
          ></input>
        </label>

        <button className={s.button} type="submit">
          +
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default ContactForm;
