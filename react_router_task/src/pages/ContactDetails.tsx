import { useParams } from "react-router-dom";
import { contactsData, Contact } from "./contactsData";

const ContactDetails = () => {
  const { id } = useParams<{ id: string }>();
  const contact: Contact | undefined = contactsData.find((c) => c.id === id);

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
};

export default ContactDetails;
