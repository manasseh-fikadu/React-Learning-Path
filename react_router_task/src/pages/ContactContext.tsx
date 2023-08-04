import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Contact, contactsData } from "./contactsData";

type ContactContextType = {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  updateContact: (id: string, updatedContact: Contact) => void;
  deleteContact: (id: string) => void;
};

const ContactContext = createContext<ContactContextType>({
  contacts: [],
  addContact: () => {},
  updateContact: () => {},
  deleteContact: () => {},
});

export const useContactContext = () => useContext(ContactContext);

type ContactProviderProps = {
  children: ReactNode;
};

export const ContactProvider: React.FC<ContactProviderProps> = ({
  children,
}) => {
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : contactsData;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact: Contact) => {
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, contact];
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const updateContact = (id: string, updatedContact: Contact) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.map((contact) =>
        contact.id === id ? { ...contact, ...updatedContact } : contact
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const deleteContact = (id: string) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.filter(
        (contact) => contact.id !== id
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  return (
    <ContactContext.Provider
      value={{ contacts, addContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};
