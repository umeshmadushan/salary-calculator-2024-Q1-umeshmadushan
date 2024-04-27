import React, { useEffect, useState } from "react";
import "../Css/Style.css";
import InputField from "./InputField";
import ResetIcon from "../Icon/resetArrow.png";
import CloseIcon from "../Icon/close.png";
import AddIcon from "../Icon/add.png";
import LabelField from "./Label";
import CheckBox from "./CheckBox";
import ReceiptCard from "./ReceiptCard";

interface CalculatorCardProps {
  basicSalary: number;
  grossEarning: number;
  grossDeduction: number;
  employeeEPF: number;
  APIT: number;
  netSalary: number;
  employerEPF: number;
  employerETF: number;
  CTC: number;
}

const CalculatorCard = () => {
  const [earningsCols, setEarningsCols] = useState([1]); // Initial state with one earnings_col
  const [deductionCols, setDeductionCols] = useState([1]);
  const [basicSalary, setBasicSalary] = useState(0);
  const [payDetailsEarnings, setPayDetailsEarnings] = useState([""]);
  const [amountEarnings, setAmountEarnings] = useState([""]);
  const [payDetailsDeduction, setPayDetailsDeduction] = useState([""]);
  const [amountDeduction, setAmountDeduction] = useState([""]);
  const [epfEtfCheckedIndex, setEpfEtfCheckedIndex] = useState([false]);

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

  // --------------------------- calculateTotalEarnings -------------------------

  const basic_Salary = () => {
    let bSalary = basicSalary;
    console.log("Basic Salary:", bSalary);
    return bSalary;
  };

  // --------------------------- calculateTotalEarnings -------------------------

  const calculateTotalEarnings = () => {
    let total = basicSalary;
    amountEarnings.forEach((value) => {
      if (value) {
        total += parseInt(value);
      }
    });
    console.log("Total Earnings:", total); // Add this console log
    return total;
  };

  // --------------------------- calculateTotalEarningsForEPF -------------------------

  const calculateTotalEarningsForEPF = () => {
    let total = basicSalary;
    amountEarnings.forEach((value, index) => {
      if (value && epfEtfCheckedIndex[index]) {
        total += parseInt(value);
      }
    });
    console.log("Total Earnings for EPF/ETF:", total); // Add this console log
    return total;
  };

  // --------------------------- calculateGrossDeduction -------------------------

  const calculateGrossDeduction = () => {
    let grossDeduction = 0;
    amountDeduction.forEach((value, index) => {
      if (value && payDetailsDeduction[index]) {
        grossDeduction += parseInt(value);
      }
    });
    console.log("Gross Deduction:", grossDeduction);
    return grossDeduction;
  };

  // --------------------------- calculateGrossEarnings -------------------------

  const calculateGrossEarnings = () => {
    let totalGrossEarnings =
      calculateTotalEarnings() - calculateGrossDeduction();
    console.log("Total Gross Earnings:", totalGrossEarnings); // Add this console log
    return totalGrossEarnings;
  };

  // --------------------------- calculateEmployeeEPF -------------------------

  const calculateGrossSalaryForEPF = () => {
    let total = calculateTotalEarningsForEPF() - calculateGrossDeduction();
    console.log("Total Gross Salary EPF:", total);
    return total;
  };

  // --------------------------- calculateEmployeeEPF -------------------------

  const calculateEmployeeEPF = () => {
    let total = (calculateTotalEarningsForEPF() * 8) / 100;
    console.log("Employee EPF(8%): ", total);
    return total;
  };

  // --------------------------- calculateEmployerEPF -------------------------

  const calculateEmployerEPF = () => {
    let total = (calculateTotalEarningsForEPF() * 12) / 100;
    console.log("Employer EPF(12%): ", total);
    return total;
  };

  // --------------------------- calculateEmployerETF -------------------------

  const calculateEmployerETF = () => {
    let total = (calculateTotalEarningsForEPF() * 3) / 100;
    console.log("Employer ETF(3%): ", total);
    return total;
  };

  // --------------------------- calculateAPIT -------------------------

  const calculateAPIT = () => {
    let grossEarnings = calculateGrossEarnings();
    let total;

    console.log("Gross Earnings: ", grossEarnings);

    if (grossEarnings === 100000) {
      total = grossEarnings;
    } else if (grossEarnings > 100000 && grossEarnings < 141667) {
      total = grossEarnings * 0.6 - 6000;
    } else if (grossEarnings > 141667 && grossEarnings < 183333) {
      total = grossEarnings * 0.12 - 14500;
    } else if (grossEarnings > 183333 && grossEarnings < 225000) {
      total = grossEarnings * 0.18 - 25000;
    } else if (grossEarnings > 225000 && grossEarnings < 266667) {
      total = grossEarnings * 0.24 - 39000;
    } else if (grossEarnings > 266667 && grossEarnings < 308333) {
      total = grossEarnings * 0.3 - 55000;
    } else if (grossEarnings > 308333) {
      total = grossEarnings * 0.36 - 73500;
    } else {
      total = 0; // Default value if grossEarnings doesn't match any condition
    }

    console.log("APIT: ", total);
    return total;
  };

  // --------------------------- calculateNetSalary -------------------------

  const calculateNetSalary = () => {
    let total =
      calculateGrossEarnings() - calculateEmployeeEPF() - calculateAPIT();
    console.log("Net Salary: ", total);
    return total;
  };

  // --------------------------- calculateCostToCompany -------------------------

  const calculateCostToCompany = () => {
    let total =
      calculateGrossEarnings() +
      calculateEmployerEPF() +
      calculateEmployerETF();
    console.log("Cost To Company: ", total);
    return total;
  };

  const handleResetField = () => {
    setBasicSalary(0);
    setPayDetailsEarnings([""]);
    setAmountEarnings([""]);
    setPayDetailsDeduction([""]);
    setAmountDeduction([""]);
    setEarningsCols([1]);
    setDeductionCols([1]); // Reset to one earnings and deduction column
  };

  const handleBasicSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setBasicSalary(value);
  };

  useEffect(() => {
    basic_Salary();
    calculateTotalEarnings();
    calculateTotalEarningsForEPF();
    calculateGrossDeduction();
    calculateGrossEarnings();
    calculateGrossSalaryForEPF();
    calculateEmployeeEPF();
    calculateEmployerEPF();
    calculateEmployerETF();
    calculateCostToCompany();
    calculateAPIT();
    calculateNetSalary();
  }, [
    basicSalary,
    amountEarnings,
    payDetailsEarnings,
    amountDeduction,
    payDetailsDeduction,
    epfEtfCheckedIndex,
  ]);

  return (
    <div className="row">
      <div className="col-md-7">
        <div className="calculator-card border rounded-2 m-4 p-4 text-bg-light position-absolute text-start">
          {/* ------------------ Basic Salary -------------------------- */}

          <div className="top_area d-flex justify-content-between">
            <h3 className="fw-bold">Calculate Your Salary</h3>
            <button
              className="border border-0 bg-transparent text-primary"
              onClick={handleResetField}
            >
              <img src={ResetIcon} alt="Reset" /> Reset
            </button>
          </div>

          <div className="basic_salary_col mt-4">
            <LabelField label="Basic Salary" />
            <InputField
              className="input_field border rounded-1 px-2"
              type="text"
              placeholder="Basic Salary"
              value={basicSalary}
              onChange={handleBasicSalaryChange}
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
                    value={payDetailsEarnings[index - 1]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newPayDetailsEarnings = [...payDetailsEarnings];
                      newPayDetailsEarnings[index - 1] = e.target.value;
                      setPayDetailsEarnings(newPayDetailsEarnings);
                    }}
                  />
                  <InputField
                    className="input_field_amount border rounded-1 px-2 text-end"
                    type="text"
                    placeholder="Amount"
                    value={amountEarnings[index - 1]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newAmountEarnings = [...amountEarnings];
                      newAmountEarnings[index - 1] = e.target.value;
                      setAmountEarnings(newAmountEarnings);
                    }}
                  />
                </div>
                <button
                  className="close_btn border border-0 bg-secondary-subtle rounded-circle mx-2 d-flex justify-content-center align-items-center"
                  onClick={() => handleRemoveEarningsCol(index - 1)}
                >
                  <img src={CloseIcon} alt="Close" />
                </button>
                <CheckBox
                  className="m-2 form-check-input"
                  label={"EPF/ETF"}
                  checked={epfEtfCheckedIndex[index - 1]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const newEpfEtf = [...epfEtfCheckedIndex];
                    newEpfEtf[index - 1] = !epfEtfCheckedIndex[index - 1];
                    setEpfEtfCheckedIndex(newEpfEtf);
                  }}
                />
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
                    value={payDetailsDeduction[index - 1]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newPayDetailsDeduction = [...payDetailsDeduction];
                      newPayDetailsDeduction[index - 1] = e.target.value;
                      setPayDetailsDeduction(newPayDetailsDeduction);
                    }}
                  />

                  <InputField
                    className="input_field_amount border rounded-1 px-2 text-end"
                    type="text"
                    placeholder="Amount"
                    value={amountDeduction[index - 1]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newAmountDeduction = [...amountDeduction];
                      newAmountDeduction[index - 1] = e.target.value;
                      setAmountDeduction(newAmountDeduction);
                    }}
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
              <img src={AddIcon} alt="Add" /> Add New Deduction
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <ReceiptCard
          basicSalary={basicSalary}
          grossEarning={calculateGrossEarnings()}
          grossDeduction={calculateGrossDeduction()}
          employeeEPF={calculateEmployeeEPF()}
          APIT={calculateAPIT()}
          netSalary={calculateNetSalary()}
          employerEPF={calculateEmployerEPF()}
          employerETF={calculateEmployerETF()}
          CTC={calculateCostToCompany()}
        />
      </div>
    </div>
  );
};

export default CalculatorCard;
