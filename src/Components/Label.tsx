import React from "react";

interface LabelProps {
  label: string;
  hint?: string;
  [key: string]: any; // Allow any other props
}

const LabelField: React.FC<LabelProps> = ({ label, hint }) => {
  return (
    <div className="d-flex flex-column my-2">
      <label className="input_label fw-semibold">{label}</label>
      {hint && <small className="form-text text-muted">{hint}</small>}
    </div>
  );
};

export default LabelField;
