import React from "react";
import "./App.css";
import Card from "./components/Card";
import { userProfile } from "./data";

function App() {
  return (
    <div className="App">
      <Card profile={userProfile} />
    </div>
  );
}

export default App;
