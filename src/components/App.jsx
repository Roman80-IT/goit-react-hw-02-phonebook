import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    //   contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // handleFilterChange = (event) => {
  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  // handleAddContact = () => {
  //   const { name, number, contacts } = this.state;
  handleAddContact = (name, number) => {
    const { contacts } = this.state;

    // Перевіряємо, чи ім'я вже існує в списку контактів
    const isNameExist = contacts.some(contact => contact.name === name);

    if (isNameExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    if (name.trim() === '' || number.trim() === '') {
      alert('Name and phone number are required fields.');
      return;
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState({
      contacts: [...contacts, newContact],
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>

        {/* Компонент ContactForm для форми додавання контактів */}
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>

        {/* Компонент Filter для фільтрації контактів */}
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />

        {/* Компонент ContactList для списку контактів */}
        <ContactList
          contacts={contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )}
        />
      </div>
    );
  }
}
