// Inside InputExample3.jsx

import React from "react";
import hexagonSVG from "./hexagon.svg"; // Import the SVG file
import "./App.css"; // Import the main CSS file

const InputExample3 = () => {
  return (
    <div className="form-section">
      <div className="logo-container">
        <img src={hexagonSVG} alt="Logo" className="logo" />
        <div className="logo-text">
          <h3>Company</h3>
          <h1>LOGO</h1>
          <h4>Name</h4>
        </div>
      </div>
    </div>
  );
};

export default InputExample3;
