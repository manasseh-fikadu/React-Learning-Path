import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import ContactDetails from "../src/pages/ContactDetails";
import AddContact from "../src/pages/AddContact";
import EditContact from "../src/pages/EditContact";
import { ContactProvider } from "../src/pages/ContactContext";

const App = () => {
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
