import React from 'react';

interface InputFieldProps {
  className?: string;
  placholder?: string
  [key: string]: any; // Allow any other props
}

const InputField: React.FC<InputFieldProps> = ({className,placholder}) => {
  return (
    <div className="form-group">
      <input className={className} placeholder={placholder}/>
    </div>
  );
};

export default InputField;
