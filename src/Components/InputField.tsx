import React from 'react';

interface InputFieldProps {
  className?: string;
  placeholder?: string;
  [key: string]: any; // Allow any other props
}

const InputField: React.FC<InputFieldProps> = ({className, placeholder, ...rest}) => {
  return (
    <div className="form-group">
      <input className={className} placeholder={placeholder} {...rest}/>
    </div>
  );
};

export default InputField;
