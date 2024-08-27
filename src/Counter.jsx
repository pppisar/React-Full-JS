import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    // Multiple updates - updater function pattern
    // Updater function is a function passed as an argument to setState
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p>Count: {count}</p>
      <div className="buttons-container">
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </div>
  );
}

export default Counter;
