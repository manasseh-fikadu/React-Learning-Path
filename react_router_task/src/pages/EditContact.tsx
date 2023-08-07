/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContactContext } from "./ContactContext";
import { Contact } from "./contactsData";
import "./AddContact.css"; // Reuse the CSS file from AddContact

// Define the EditContact component.
const EditContact = () => {
  // Use the useNavigate hook to get the navigation function.
  const navigate = useNavigate();

  // Use the useParams hook to extract the id parameter from the URL.
  const { id } = useParams<{ id: string }>();

  // Use the useContactContext hook to access contact data and update functions.
  const { contacts, updateContact } = useContactContext();

  // Find the contact to be edited based on the provided id.
  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    // Handle the case where the contact is not found.
    return <div>Contact not found</div>;
  }

  // Initialize state variables for input fields with initial values from the contact.
  const [name, setName] = useState<string>(contact.name);
  const [email, setEmail] = useState<string>(contact.email);
  const [phone, setPhone] = useState<string>(contact.phone);

  // Define a function to handle the update of the contact.
  const handleUpdateContact = () => {
    if (id) {
      // Create an updatedContact object with the modified fields.
      const updatedContact: Contact = {
        ...contact,
        name,
        email,
        phone,
      };

      // Call the updateContact function to update the contact in the context.
      updateContact(id, updatedContact);

      // Use the navigate function to redirect to the contact details page.
      navigate(`/contacts/${id}`);
    }
  };

  return (
    <div className="AddContact">
      {" "}
      {/* Reuse the same AddContact class for styling */}
      <h2>Edit Contact</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          {/* Input field for editing the contact's name */}
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          {/* Input field for editing the contact's email */}
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          {/* Input field for editing the contact's phone number */}
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          {/* Button to trigger the update of the contact */}
          <button type="button" onClick={handleUpdateContact}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

// Export the EditContact component as the default export of this module.
export default EditContact;
