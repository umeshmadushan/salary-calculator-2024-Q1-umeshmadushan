import React, { useState } from "react";
import "../Css/Style.css";
import ReceiptCardItem from "./ReceiptCardItem";

interface ReceiptCardProps {
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

const ReceiptCard: React.FC<ReceiptCardProps> = ({
  basicSalary,
  grossEarning,
  grossDeduction,
  employeeEPF,
  APIT,
  netSalary,
  employerEPF,
  employerETF,
  CTC,
}) => {
  // Calculate and set values for the state variables

  return (
    <div>
      <div className="receipt-card border rounded-2 m-4 p-4 bg-white text-start">
        <div className="top_area d-flex justify-content-between">
          <h3 className="fw-bold">Your Salary</h3>
        </div>

        <div className="d-flex justify-content-between mt-5">
          <p className="fw-semibold text-secondary">Item</p>
          <p className="fw-semibold text-secondary">Amount</p>
        </div>

        <ReceiptCardItem label="Basic Salary" amount={basicSalary.toFixed(2)} />
        <ReceiptCardItem label="Gross Earning" amount={grossEarning.toFixed(2)} />
        <ReceiptCardItem label="Gross Deduction" amount={grossDeduction.toFixed(2)} />
        <ReceiptCardItem label="Employee EPF (8%)" amount={employeeEPF.toFixed(2)} />
        <ReceiptCardItem label="APIT" amount={APIT.toFixed(2)} />

        <div className="net_salary border border-1 p-3 my-3">
          <ReceiptCardItem
            className="my-auto fw-semibold"
            label="Net Salary (Take Home)"
            amount={netSalary.toFixed(2)}
          />
        </div>

        <p className="fw-semibold text-secondary mt-4">Contribution from the Employer</p>

        <ReceiptCardItem label="Employer EPF (12%)" amount={employerEPF.toFixed(2)} />
        <ReceiptCardItem label="Employer ETF (3%)" amount={employerETF.toFixed(2)} />
        <ReceiptCardItem className="mt-4" label="CTC (Cost to Company)" amount={CTC.toFixed(2)} />
      </div>
    </div>
  );
};

export default ReceiptCard;
