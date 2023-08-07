// Import necessary components and libraries from react-router-dom and your custom components.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import ContactDetails from "../src/pages/ContactDetails";
import AddContact from "../src/pages/AddContact";
import EditContact from "../src/pages/EditContact";
import { ContactProvider } from "../src/pages/ContactContext";

// Define the main App component.
const App = () => {
  return (
    // Wrap the entire application with the ContactProvider to provide contact-related data to components.
    <ContactProvider>
      {/* Set up routing using the Router component from react-router-dom. */}
      <Router>
        <div>
          {/* Define different routes for your application using the Routes component. */}
          <Routes>
            {/* Define a route for the Home page, which will render the Home component. */}
            <Route path="/" element={<Home />} />

            {/* Define a route for displaying contact details, using the ContactDetails component. */}
            <Route path="/contacts/:id" element={<ContactDetails />} />

            {/* Define a route for adding a new contact, using the AddContact component. */}
            <Route path="/add" element={<AddContact />} />

            {/* Define a route for editing an existing contact, using the EditContact component. */}
            <Route path="/edit/:id" element={<EditContact />} />
          </Routes>
        </div>
      </Router>
    </ContactProvider>
  );
};

// Export the App component as the default export of this module.
export default App;
