import React, { useState } from "react";
import "./App.css";
import SketchPicker from "react-color";
function App() {
  const [color, setColor] = useState("#ff0000");
  return (
    <div
      className="app"
      style={{
        backgroundColor: color,
        transition: "ease all 500ms",
        height: "750px",
      }}
    >
      <SketchPicker
        className="picker"
        color={color}
        onChangeComplete={(color) => setColor(color.hex)}
      />
      <div className="picker-text">
        <h1>React Color Picker</h1>
        <p>Drag the pointer to change the color</p>
      </div>
    </div>
  );
}

export default App;
