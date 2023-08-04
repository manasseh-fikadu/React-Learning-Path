import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContactContext } from './ContactContext';
import { Contact } from './contactsData';

const AddContact = () => {
  const navigate = useNavigate();
  const { addContact } = useContactContext();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleAddContact = () => {
    const newContact: Contact = {
      id: String(Date.now()), // You can use a better method to generate unique IDs.
      name,
      email,
      phone,
    };
    addContact(newContact);
    navigate('/'); // Use navigate function to redirect to the home page.
  };

  return (
    <div>
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
