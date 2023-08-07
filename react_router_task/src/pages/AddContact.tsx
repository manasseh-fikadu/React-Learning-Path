import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContactContext } from "./ContactContext";
import { Contact } from "./contactsData";
import "./AddContact.css"; // Import the CSS file for styling

// Define the AddContact component.
const AddContact = () => {
  // Use the useNavigate hook to get the navigation function.
  const navigate = useNavigate();

  // Use the useContactContext hook to access the addContact function.
  const { addContact } = useContactContext();

  // Initialize state variables for input fields.
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  // Function to handle adding a new contact.
  const handleAddContact = () => {
    // Create a new contact with a random id.
    const newContact: Contact = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone,
    };

    // Call the addContact function to add the new contact to the context.
    addContact(newContact);

    // Navigate back to the home page after adding the contact.
    navigate("/");
  };

  return (
    <div className="AddContact">
      {" "}
      {/* Apply the AddContact class for styling */}
      <h2>Add New Contact</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          {/* Input field for entering the contact's name */}
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          {/* Input field for entering the contact's email */}
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          {/* Input field for entering the contact's phone number */}
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          {/* Button to trigger the addition of the new contact */}
          <button type="button" onClick={handleAddContact}>
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
};

// Export the AddContact component as the default export of this module.
export default AddContact;
