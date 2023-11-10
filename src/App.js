import React from "react";
import InputExample1 from "./InputExample1";
import InputExample3 from "./InputExample3";
import "./App.css";

const App = () => {
  return (
    <div className="main-form">
      <div className="column">
        <div className="form-section">
          <InputExample1 />
        </div>
      </div>
      <div className="column-1">
        <InputExample3 />
      </div>
    </div>
  );
};

export default App;
