import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const handleClick = () => {
    setSum(parseInt(firstNumber) + parseInt(secondNumber));
  };

  return (
    <div className="app">
      <div className="task-1">
        <h1> Counter</h1>
        <div className="counter-container">
          <button className="minus-btn" onClick={() => setCount(count - 1)}>
            -
          </button>
          <span className="display">{count}</span>
          <button className="plus-btn" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
      <div className="task-2">
        <h1>Addition Calculator</h1>
        <div className="calculator-container">
          <input
            type="number"
            placeholder="Enter first number"
            onChange={(e) => setFirstNumber(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter second number"
            onChange={(e) => setSecondNumber(e.target.value)}
          />
          <button className="add-btn" onClick={handleClick}>
            Add
          </button>
          <span className="result">Result: {sum}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
