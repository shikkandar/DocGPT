import React from 'react';

interface InputProps {
  type: string;
  name: string;
  value?: string;
  label?: string,
  placeholder?: string;
  disabled?: boolean; // Marking as optional with '?'
}

const Input: React.FC<InputProps> = ({
      type,
      name,
      value,
      label,
      placeholder,
      disabled = false,
}) => {
      return (
            <>
                 
            <label htmlFor="">{label}</label>
            <input
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        disabled={disabled}
                  ></input>      
                  
                  
                  
            </>
      );
};

export default Input;
