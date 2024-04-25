import React from "react";
import "./App.css";
import ReceiptCard from "./Components/ReceiptCard";
import CalculatorCard from "./Components/CalculatorCard";

function App() {
  return (
    <div className="App">
      <div className="row d-flex">
        {/* ============================ calculator area ============================ */}
        <div className="calculator-container col-md-7">
          <CalculatorCard/>
        </div>

        {/* ============================ receipt area ============================ */}

        <div className="receipt-container col-md-5">
          <ReceiptCard />
        </div>
      </div>
    </div>
  );
}

export default App;
