import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { FaRegAddressBook } from "react-icons/fa";

function App() {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [filter, setFilter] = useState("");

  const [contactList, setContactList] = useState(() => {
    const savedContactList = window.localStorage.getItem("savedContacts");
    return savedContactList !== null
      ? JSON.parse(savedContactList)
      : initialContacts;
  });

  const filtredContacts = contactList.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = newContact => {
    setContactList(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContactList(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    window.localStorage.setItem("savedContacts", JSON.stringify(contactList));
  }, [contactList]);

  return (
    <div className='app'>
      <h1 className='title'>
        <span>
          <FaRegAddressBook />
        </span>
        Phonebook
      </h1>
      <ContactForm addContact={addContact} />
      <SearchBox currentInput={filter} onFilter={setFilter} />
      <ContactList contacts={filtredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
