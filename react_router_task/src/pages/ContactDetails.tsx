import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Contact } from "./contactsData";
import "./ContactDetails.css"; // Import the CSS file

const ContactDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [contact, setContact] = useState<Contact | undefined>(undefined);

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      const parsedContacts: Contact[] = JSON.parse(storedContacts);
      const contactData = parsedContacts.find((c) => c.id === id);
      setContact(contactData);
    }
  }, [id]);

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div className="ContactDetails"> {/* Apply the ContactDetails class */}
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
};

export default ContactDetails;
