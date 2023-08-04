import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContactContext } from "./ContactContext";
import { Contact } from "./contactsData";
import "./AddContact.css"; // Import the CSS file

const AddContact = () => {
  const navigate = useNavigate();
  const { addContact } = useContactContext();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleAddContact = () => {
    const newContact: Contact = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone,
    };
    addContact(newContact);
    navigate("/");
  };

  return (
    <div className="AddContact">
      {" "}
      <h2>Add New Contact</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <button type="button" onClick={handleAddContact}>
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
