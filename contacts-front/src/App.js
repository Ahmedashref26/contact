import React, { useState, useEffect } from "react";
// import React, { Component } from "react";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "./utils/ContactsAPI";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = (props) => {
  const [contacts, setContacts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    ContactsAPI.getAll().then((contacts) => {
      setContacts(contacts);
    });
  }, []);

  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
    ContactsAPI.remove(contact);
  };

  const createContact = (contact) => {
    ContactsAPI.create(contact).then((contact) => {
      setContacts(contacts.concat([contact]));
    });
  };
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListContacts contacts={contacts} onDeleteContact={removeContact} />
          }
        />
        <Route
          path="/create"
          element={
            <CreateContact
              onCreateContact={(contact) => {
                createContact(contact);
                navigate("/");
              }}
            />
          }
        />
      </Routes>
    </div>
  );
};

/*
class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState(() => ({
        contacts,
      }));
    });
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => c.id !== contact.id),
    }));
    ContactsAPI.remove(contact);
  };

  createContact = (contact) => {
    ContactsAPI.create(contact).then((contact) => {
      this.setState((currState) => ({
        contacts: currState.contacts.concat([contact]),
      }));
    });
  };

  render() {
    return (
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ListContacts
                contacts={this.state.contacts}
                onDeleteContact={this.removeContact}
              />
            }
          />
          <Route
            path="/create"
            element={
              <CreateContact
                onCreateContact={(contact) => {
                  this.createContact(contact);
                  history.push("/");
                }}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
*/
export default App;
