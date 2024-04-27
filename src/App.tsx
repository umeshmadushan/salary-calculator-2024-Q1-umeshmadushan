import React, { useState } from "react";
import "./App.css";
import ReceiptCard from "./Components/ReceiptCard";
import CalculatorCard from "./Components/CalculatorCard";

function App() {

  return (
    <div className="App">
      <div className="row d-flex">
        {/* ============================ calculator area ============================ */}
        <div className="calculator-container">
          <CalculatorCard />
        </div>
      </div>
    </div>
  );
}

export default App;
