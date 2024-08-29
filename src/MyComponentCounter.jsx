import React, { useEffect, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#00FF00");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;

    // Clean up function to run when the component is unmounted
    return () => {
      document.title = "Count App";
    };
  }, [count, color]);

  function addCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtractCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function changeColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  }

  return (
    <div style={{ backgroundColor: color }}>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default MyComponent;
