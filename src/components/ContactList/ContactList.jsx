export const ContactItem = ({ contact }) => {
  return (
    <li>
      {contact.name}: {contact.number}
    </li>
  );
};

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
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
