import React, { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2021,
    make: "Toyota",
    model: "Supra",
  });

  function handleYearChange(event) {
    setCar((prevCar) => ({ ...prevCar, year: parseInt(event.target.value) }));
  }

  function handleMakeChange(event) {
    setCar((prevCar) => ({ ...prevCar, make: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((prevCar) => ({ ...prevCar, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Your favourite car is: {car.year} {car.make} {car.model}
      </p>
      <input onChange={handleYearChange} type="number" value={car.year} />
      <br />
      <input onChange={handleMakeChange} type="text" value={car.make} />
      <br />
      <input onChange={handleModelChange} type="text" value={car.model} />
    </div>
  );
}

export default MyComponent;
