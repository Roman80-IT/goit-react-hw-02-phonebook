import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <div>
        <h2>Контакти:</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleAddContact = () => {
    const { name, contacts } = this.state;
    if (name.trim() === '') {
      return; // Не додавати порожні контакти
    }

    const newContact = {
      name,
      id: nanoid(), // Генеруємо унікальний ідентифікатор
    };

    this.setState({
      contacts: [...contacts, newContact],
      name: '', // Очищуємо поле імені після додавання контакту
    });
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <div>
        <h1>Телефонна книга</h1>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={this.handleNameChange}
          placeholder="Введіть ім'я контакту"
        />
        <button onClick={this.handleAddContact}>Додати контакт</button>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
