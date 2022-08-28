import React, { Component } from 'react';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import toast, { Toaster } from 'react-hot-toast';

const notify = message => toast.error(message);

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  handleSubmitForm = contact => {
    const isInContacts = this.state.contacts.find(
      item => item.name === contact.name
    );
    if (isInContacts !== undefined) {
      return notify(`${contact.name} is already in contacts`);
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handleChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.handleSubmitForm} />
        <h2>Contacts</h2>
        <Toaster />
        <Filter value={filter} onHandleChange={this.handleChange} />
        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
