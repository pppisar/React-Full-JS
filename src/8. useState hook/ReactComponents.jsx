import React, { useState } from "react";

function ReactComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Sponge Bob");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployment = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment age</button>
      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployment}>Toggle employment status</button>
    </div>
  );
}

export default ReactComponent;
