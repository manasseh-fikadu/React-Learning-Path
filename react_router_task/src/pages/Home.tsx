import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contactsData } from "./contactsData";

const Home = () => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contactsData.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
