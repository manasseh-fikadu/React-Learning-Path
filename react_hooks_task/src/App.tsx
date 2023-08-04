import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    document.title = `Counter App | Count: ${counter}`;
  }, [counter]);

  const buttonRef = useRef<HTMLButtonElement>(null);

  // Function to handle user input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Function to handle increment
  const handleIncrement = () => {
    const incrementBy = parseInt(inputValue) || 1; // Use the parsed input value or default to 1
    setCounter((prevCounter) => prevCounter + incrementBy);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    const decrementBy = parseInt(inputValue) || 1; // Use the parsed input value or default to 1
    setCounter((prevCounter) => prevCounter - decrementBy);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter-container">
        <p className="counter-value">Counter Value: {counter}</p>
        <input
          type="number"
          className="input-field"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Number to increment/decrement by"
        />
        <button className="increment-btn" onClick={handleIncrement}>
          Increment
        </button>
        <button className="decrement-btn" onClick={handleDecrement}>
          Decrement
        </button>
        <button
          ref={buttonRef}
          className="increment-by-ten-btn"
          onClick={() => handleIncrement()}
        >
          Increment by 10
        </button>
      </div>
    </div>
  );
};

export default App;
