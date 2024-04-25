import React from "react";

interface CheckBoxProps {
  className?: string;
  onClick?: () => void;
  label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, onClick, className }) => {
  return (
    <div className="d-flex align-items-center">
      <input
        className={className}
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
