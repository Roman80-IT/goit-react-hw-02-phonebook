import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' }); // Очищуємо поле після додавання контакту
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={this.handleNameChange}
          placeholder="Enter name"
        />
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={this.handleNumberChange}
          placeholder="Enter phone number"
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
