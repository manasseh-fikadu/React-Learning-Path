import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Contact, contactsData } from "./contactsData";

// Define the shape of the ContactContext data and functions.
type ContactContextType = {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  updateContact: (id: string, updatedContact: Contact) => void;
  deleteContact: (id: string) => void;
};

// Create a new context with the specified initial value.
const ContactContext = createContext<ContactContextType>({
  contacts: [],
  addContact: () => {},
  updateContact: () => {},
  deleteContact: () => {},
});

// Custom hook to access the ContactContext.
export const useContactContext = () => useContext(ContactContext);

// Define the props for the ContactProvider component.
type ContactProviderProps = {
  children: ReactNode;
};

// Define the ContactProvider component that wraps its children with the context.
export const ContactProvider: React.FC<ContactProviderProps> = ({
  children,
}) => {
  // Initialize the contacts state using localStorage or default data.
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : contactsData;
  });

  // Save the contacts to localStorage whenever they change.
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Function to add a new contact.
  const addContact = (contact: Contact) => {
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, contact];
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  // Function to update an existing contact.
  const updateContact = (id: string, updatedContact: Contact) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.map((contact) =>
        contact.id === id ? { ...contact, ...updatedContact } : contact
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  // Function to delete a contact.
  const deleteContact = (id: string) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.filter(
        (contact) => contact.id !== id
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  // Provide the context value to its children.
  return (
    <ContactContext.Provider
      value={{ contacts, addContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};
