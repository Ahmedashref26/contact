import React, { useEffect, useState } from "react";
// import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// function ListContacts(props) {
const ListContacts = (props) => {
  const [query, setQuery] = useState("");

  const updateQuery = (q) => {
    setQuery(q.trim());
  };


  const { contacts, onDeleteContact } = props;

  const showContacts =
    query === ""
      ? contacts
      : contacts.filter((c) =>
          c.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          type="text"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
          className="search-contacts"
          placeholder="Search contacts"
        />
        <Link to="/create" className="add-contact">
          Add Contact
        </Link>
      </div>

      {contacts.length !== showContacts.length && (
        <div className="showing-contacts">
          <span>
            Now showing {showContacts.length} of {contacts.length}
          </span>
          <button onClick={() => updateQuery("")}>Show all</button>
        </div>
      )}
      <ol className="contact-list">
        {showContacts.map((contact) => (
          <li key={contact.id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{
                backgroundImage: `url(${contact.avatarURL})`,
              }}
            ></div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <button
              onClick={() => onDeleteContact(contact)}
              className="contact-remove"
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
// incase of functional component
ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

// class ListContacts extends Component {
//   static propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
//   };

//   state = {
//     query: "",
//   };

//   updateQuery = (q) => {
//     this.setState(() => ({
//       query: q.trim(),
//     }));
//   };

//   render() {
//     const { query } = this.state;
//     const { contacts, onDeleteContact } = this.props;

//     const showContacts =
//       query === ""
//         ? contacts
//         : contacts.filter((c) =>
//             c.name.toLowerCase().includes(query.toLowerCase())
//           );

//     return (
//       <div className="list-contacts">
//         <div className="list-contacts-top">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => this.updateQuery(e.target.value)}
//             className="search-contacts"
//             placeholder="Search contacts"
//           />
//         </div>

//         {contacts.length !== showContacts.length && (
//           <div className='showing-contacts'>
//             <span>Now showing {showContacts.length} of {contacts.length}</span>
//             <button onClick={() => this.updateQuery('')}>Show all</button>
//           </div>
//         )}

//         <ol className="contact-list">
//           {showContacts.map((contact) => (
//             <li key={contact.id} className="contact-list-item">
//               <div
//                 className="contact-avatar"
//                 style={{
//                   backgroundImage: `url(${contact.avatarURL})`,
//                 }}
//               ></div>
//               <div className="contact-details">
//                 <p>{contact.name}</p>
//                 <p>{contact.handle}</p>
//               </div>
//               <button
//                 onClick={() => onDeleteContact(contact)}
//                 className="contact-remove"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ol>
//       </div>
//     );
//   }
// }

export default ListContacts;
