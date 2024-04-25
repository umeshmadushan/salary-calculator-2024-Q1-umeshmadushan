import React, { useState } from "react";
import "../Css/Style.css";
import InputField from "./InputField";
import Button from "./Button";
import ResetIcon from "../Icon/resetArrow.png";
import CloseIcon from "../Icon/close.png";
import AddIcon from "../Icon/add.png";
import LabelField from "./Label";
import CheckBox from "./CheckBox";

const CalculatorCard = () => {
  const [earningsCols, setEarningsCols] = useState([1]); // Initial state with one earnings_col
  const [deductionCols, setDeductionCols] = useState([1]);

  const handleAddEarningsCol = () => {
    setEarningsCols([...earningsCols, earningsCols.length + 1]); // Add a new index to the earningsCols array
  };

  const handleAddDeductionCol = () => {
    setDeductionCols([...deductionCols, deductionCols.length + 1]);
  };

  const handleRemoveEarningsCol = (indexToRemove: number) => {
    setEarningsCols(earningsCols.filter((_, index) => index !== indexToRemove));
  };

  const handleRemoveDeductionCol = (indexToRemove: number) => {
    setDeductionCols(
      deductionCols.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div>
      <div className="calculator-card border rounded-2 m-4 p-4 text-bg-light position-absolute col-md-7 text-start">
        {/* ------------------ Basic Salary -------------------------- */}

        <div className="top_area d-flex justify-content-between">
          <h3 className="fw-bold">Calculate Your Salary</h3>
          <button className="border border-0 bg-transparent text-primary">
            <img src={ResetIcon} alt="Reset" /> Reset
          </button>
        </div>

        <div className="basic_salary_col mt-4">
          <LabelField label="Basic Salary" />
          <InputField
            className="input_field border rounded-1 px-2"
            type="text"
            placeholder="Basic Salary"
          />
        </div>

        {/* ------------------ Earnings -------------------------- */}

        <div className="earnings_col mt-4">
          <LabelField
            label="Earnings"
            hint="Allowance, Fixed Allowance, Bonus and etc."
          />
          {earningsCols.map((index) => (
            <div key={index} className="d-flex align-items-center mt-2">
              <div className="d-flex common_row justify-content-between">
                <InputField
                  className="input_field_type border rounded-1 px-2"
                  type="text"
                  placeholder="Pay Details (Title)"
                />
                <InputField
                  className="input_field_amount border rounded-1 px-2 text-end"
                  type="text"
                  placeholder="Amount"
                />
              </div>
              <button
                className="close_btn border border-0 bg-secondary-subtle rounded-circle mx-2 d-flex justify-content-center align-items-center"
                onClick={() => handleRemoveEarningsCol(index - 1)}
              >
                <img src={CloseIcon} alt="Close" />
              </button>
              <CheckBox className="m-2 form-check-input" label={"EPF/ETF"} />
            </div>
          ))}
        </div>

        <button
          className="border border-0 bg-transparent text-primary my-4"
          onClick={handleAddEarningsCol}
        >
          <img src={AddIcon} alt="Add" /> Add New Allowance
        </button>

        <hr></hr>

        {/* ------------------ Deduction -------------------------- */}

        <div className="deduction_col mt-4">
          <LabelField
            label="Deductions"
            hint="Salary Advances, fixed Allowance, Bonus and etc."
          />
          {deductionCols.map((index) => (
            <div key={index} className="d-flex align-items-center mt-2">
              <div className="d-flex common_row justify-content-between">
                <InputField
                  className="input_field_type border rounded-1 px-2"
                  type="text"
                  placeholder="Pay Details (Title)"
                />
                <InputField
                  className="input_field_amount border rounded-1 text-end px-2"
                  type="text"
                  placeholder="Amount"
                />
              </div>
              <button
                className="close_btn border border-0 bg-secondary-subtle rounded-circle mx-2 d-flex justify-content-center align-items-center"
                onClick={() => handleRemoveDeductionCol(index - 1)}
              >
                <img src={CloseIcon} alt="Close" />
              </button>
            </div>
          ))}

          <button
            className="border border-0 bg-transparent text-primary my-4"
            onClick={handleAddDeductionCol}
          >
            <img src={AddIcon} alt="Add" /> Add New Allowance
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorCard;
