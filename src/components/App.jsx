import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <div>
        <h2>Контакти:</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleAddContact = () => {
    const { name, number, contacts } = this.state;
    if (name.trim() === '' || number.trim() === '') {
      return; // Не додавати порожні контакти
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState({
      contacts: [...contacts, newContact],
      name: '', // Очищуємо поле після додавання контакту
      number: '', //     - // -
    });
  };

  render() {
    const { contacts, name, number, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={this.handleNameChange}
          placeholder="Name of the contact"
        />
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={this.handleNumberChange}
          placeholder="Phone number"
        />
        <button onClick={this.handleAddContact}>Add contact</button>

        {/* Включаємо компонент Filter і передаємо йому відповідні дані та функцію зміни */}
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />

        {/* Передаємо відфільтровані контакти у компонент ContactList */}
        {/* <ContactList contacts={contacts} /> */}
        <ContactList
          contacts={contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )}
        />
      </div>
    );
  }
}
