import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Contact } from "./contactsData";
import "./ContactDetails.css"; // Import the CSS file for styling

// Define the ContactDetails component.
const ContactDetails = () => {
  // Use the useParams hook to extract the id parameter from the URL.
  const { id } = useParams<{ id: string }>();

  // Initialize a state variable to hold the contact information.
  const [contact, setContact] = useState<Contact | undefined>(undefined);

  // Use useEffect to fetch and set the contact data when the component mounts.
  useEffect(() => {
    // Get the stored contacts from local storage.
    const storedContacts = localStorage.getItem("contacts");

    if (storedContacts) {
      // Parse the stored contacts into an array of Contact objects.
      const parsedContacts: Contact[] = JSON.parse(storedContacts);

      // Find the contact data with the matching id.
      const contactData = parsedContacts.find((c) => c.id === id);

      // Update the state with the retrieved contact data.
      setContact(contactData);
    }
  }, [id]); // Trigger the effect whenever the id parameter changes.

  if (!contact) {
    // Handle the case where the contact is not found.
    return <div>Contact not found</div>;
  }

  return (
    <div className="ContactDetails"> {/* Apply the ContactDetails class for styling */}
      <h2>Contact Details</h2>
      {/* Display the contact details */}
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
};

// Export the ContactDetails component as the default export of this module.
export default ContactDetails;
