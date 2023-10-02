export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
  );
};

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

//   render() {
//     const { contacts } = this.props;

//     return (
//       <div>
//         <ul>
//           {contacts.map(contact => (
//             <li key={contact.id}>
//               {contact.name}: {contact.number}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
