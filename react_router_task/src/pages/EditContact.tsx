/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContactContext } from "./ContactContext";
import { Contact } from "./contactsData";

const EditContact = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { contacts, updateContact } = useContactContext();

  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    // Handle the case where the contact is not found.
    return <div>Contact not found</div>;
  }

  const [name, setName] = useState<string>(contact.name);
  const [email, setEmail] = useState<string>(contact.email);
  const [phone, setPhone] = useState<string>(contact.phone);

  const handleUpdateContact = () => {
    if (id) {
      const updatedContact: Contact = {
        ...contact,
        name,
        email,
        phone,
      };
      updateContact(id, updatedContact);
      navigate(`/contacts/${id}`); // Use navigate function to redirect to the contact details page.
    }
  };

  const handleDeleteContact = () => {
    if (id) {
      // Implement the delete functionality here
      // You can use a deleteContact function from the ContactContext
      // and then navigate to the home page after deletion.
      navigate("/");
    }
  };

  return (
    <div>
      <h2>Edit Contact</h2>
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
          <button type="button" onClick={handleUpdateContact}>
            Save Changes
          </button>
          <button type="button" onClick={handleDeleteContact}>
            Delete Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
