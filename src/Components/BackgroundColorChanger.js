import React, { useState } from "react";

function BackgroundColorChanger() {
  // Initialize state with a default color
  const [color, setColor] = useState("white");

  // Function to generate a random color
  const generateRandomColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    setColor(randomColor); // Update the state with the new color
  };

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <button onClick={generateRandomColor} style={{ padding: "10px", fontSize: "16px" }}>
        Change Background Color
      </button>
    </div>
  );
}

export default BackgroundColorChanger;
