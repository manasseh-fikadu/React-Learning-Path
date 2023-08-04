import { Link } from "react-router-dom";
import { useContactContext } from "./ContactContext";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const { contacts, updateContact, deleteContact } = useContactContext();

  return (
    <div className="Home"> {/* Apply the Home class to the main div */}
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
            <Link to={`/edit/${contact.id}`}>
              <button onClick={() => updateContact(contact.id, contact)}>
                Edit
              </button>
            </Link>
            <button className="delete-button" onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/add">
        <button>Add</button>
      </Link>
    </div>
  );
};

export default Home;
