import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import ContactDetails from "../src/pages/ContactDetails";
import AddContact from "../src/pages/AddContact";
import EditContact from "../src/pages/EditContact";
import { ContactProvider } from "../src/pages/ContactContext";

const App = () => {
  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      const parsedContacts = JSON.parse(storedContacts);
      // Optionally, you can set a default data here if the stored data is not as expected.
      // For example, if the stored data has been corrupted or cleared, you can use a default data.
      // setContacts(parsedContacts || defaultData);
    }
  }, []);

  return (
    <ContactProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts/:id" element={<ContactDetails />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
          </Routes>
        </div>
      </Router>
    </ContactProvider>
  );
};

export default App;
