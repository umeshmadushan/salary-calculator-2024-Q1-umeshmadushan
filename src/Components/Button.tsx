import React from 'react';

interface ButtonProps {
    className?: string;
    onClick?: () => void;
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;



