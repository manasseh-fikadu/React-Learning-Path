/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContactContext } from "./ContactContext";
import { Contact } from "./contactsData";
import "./AddContact.css"; // Reuse the CSS file from AddContact

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

  return (
    <div className="AddContact">
      {" "}
      {/* Apply the same AddContact class */}
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
        </div>
      </form>
    </div>
  );
};

export default EditContact;
