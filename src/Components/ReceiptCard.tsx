import React from "react";
import ReceiptCardItem from "./ReceiptCardItem";

type Props = {};

const ReceiptCard = () => {
  return (
    <div>
      <div className="receipt-card border rounded-2 m-4 p-4 bg-white position-absolute text-start">
        <div className="top_area d-flex justify-content-between">
          <h3 className="fw-bold">Your Salary</h3>
        </div>

        <div className="d-flex justify-content-between mt-5">
          <p className="fw-semibold text-secondary">Item</p>
          <p className="fw-semibold text-secondary">Amount</p>
        </div>

        <ReceiptCardItem label="Basic Salary" amount="10000.00" />
        <ReceiptCardItem label="Gross Earning" amount="10000.00" />
        <ReceiptCardItem label="Gross Deduction" amount="10000.00" />
        <ReceiptCardItem label="Eployee EPF (8%)" amount="10000.00" />
        <ReceiptCardItem label="APIT" amount="10000.00" />

        <div className="net_salary border border-1 p-3 my-3">
          <ReceiptCardItem className="my-auto fw-semibold" label="Net Salary (Take Home)" amount="10000.00" />
        </div>

        <p className="fw-semibold text-secondary mt-4">Contribution from the Employeer</p>

        <ReceiptCardItem label="Eployeer EPF (12%)" amount="10000.00" />
        <ReceiptCardItem label="Eployeer ETF (3%)" amount="10000.00" />
        <ReceiptCardItem className="mt-4" label="CTC (Cost to Company)" amount="10000.00" />

      </div>
    </div>
  );
};

export default ReceiptCard;
