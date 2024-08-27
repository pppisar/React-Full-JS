import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="color__container">
      <h2>Color Picker</h2>
      <div className="color__display" style={{ backgroundColor: color }}>
        <p>Selected color: {color}</p>
      </div>
      <label>Select a color</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
