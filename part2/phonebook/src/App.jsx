import React, { useEffect, useState } from "react";
import { ContactForm } from "./components/ContactForm";
import { Contacts } from "./components/Contacts";
import { Filter } from "./components/Filter";
import { Notification } from "./components/Notification";
import API from "./services";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [search, setSearch] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.getAll().then((data) => setContacts(data));
  }, []);

  const handleSubmit = (e) => {
    e.preDefault();

    API.query(newName).then((contact) => {
      const newObject = {
        name: newName,
        number: newNumber,
      };

      if (contact) {
        const message = `${newName} is already added to phonebook, replace with unused`;
        if (window.confirm(message)) {
          API.update(contact.id, newObject)
            .then(() => {
              API.getAll().then((data) => setContacts(data));
              setMessage(` ${newName} was added successfully`);
              setTimeout(() => setMessage(null), 4000);
            })
            .catch((error) => {
              setError(error.response.data.error);
              setTimeout(() => setError(null), 4000);
            });
        }
      } else {
        API.create(newObject)
          .then(() => {
            API.getAll().then((data) => setContacts(data));
            setNewName("");
            setMessage(`${newName} was added successfully`);
            setTimeout(() => setMessage(null), timer);
          })
          .catch((error) => {
            setError(error.response.data.error);
            setTimeout(() => setError(null), timer);
          });
      }
    });
  };

  //event handlerss
  const handleNameChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message ?? error} error={error ? true : false} />
      <Filter search={search} setSearch={setSearch} />
      <div>
        <h2>Add a new contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          newName={newName}
          setNewName={setNewName}
          newNumber={newNumber}
          setNewNumber={setNewNumber}
        />
      </div>
      <div>
        <h2>Numbers</h2>
        <Contacts
          contacts={contacts}
          search={search}
          setContacts={setContacts}
        />
      </div>
    </div>
  );
};

export default App;
