import React, { useState } from "react";

function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

  function handleAddFood() {
    const inputElement = document.getElementById("foodInput");
    const inputValue = inputElement.value;
    inputElement.value = "";
    setFoods((prevFoods) => [...prevFoods, inputValue]);
  }

  function handleRemoveClick(index) {
    setFoods((prevFoods) => [
      ...prevFoods.slice(0, index),
      ...prevFoods.slice(index + 1, prevFoods.length),
    ]);

    // or
    // setFoods(prevFoods => prevFoods.filter((_, i) => i!== index));
  }

  function handleDeleteFood() {
    const inputElement = document.getElementById("foodInput");
    const inputValue = inputElement.value;
    inputElement.value = "";
    setFoods((prevFoods) => prevFoods.filter((food) => food !== inputValue));
  }

  return (
    <div>
      <h2>List of food:</h2>
      <ul>
        {foods.map((food, index) => (
          <li onClick={() => handleRemoveClick(index)} key={index}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
      <button onClick={handleDeleteFood}>Remove Food</button>
    </div>
  );
}

export default MyComponent;
