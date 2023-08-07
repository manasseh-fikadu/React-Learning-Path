// Import necessary components and styles.
import { Link } from "react-router-dom";
import { useContactContext } from "./ContactContext";
import "./Home.css"; // Import the CSS file for styling

// Define the Home component.
const Home = () => {
  // Extract data and functions from the ContactContext using the useContactContext hook.
  const { contacts, updateContact, deleteContact } = useContactContext();

  return (
    <div className="Home">
      {/* Display a heading for the contact list */}
      <h2>Contact List</h2>
      <ul>
        {/* Map through each contact and render its details */}
        {contacts.map((contact) => (
          <li key={contact.id}>
            {/* Link to the ContactDetails page with the specific contact's id */}
            <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>

            {/* Link to the EditContact page with the specific contact's id */}
            <Link to={`/edit/${contact.id}`}>
              {/* Button to trigger the updateContact function */}
              <button onClick={() => updateContact(contact.id, contact)}>
                Edit
              </button>
            </Link>

            {/* Button to trigger the deleteContact function */}
            <button
              className="delete-button"
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Link to the AddContact page */}
      <Link to="/add">
        {/* Button to navigate to the AddContact page */}
        <button>Add</button>
      </Link>
    </div>
  );
};

// Export the Home component as the default export of this module.
export default Home;
