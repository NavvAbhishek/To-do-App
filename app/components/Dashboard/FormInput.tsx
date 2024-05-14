import React from 'react';

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FormInput: React.FC<FormInputProps> = ({ id, label, type, value, onChange }) => (
    <div className="flex flex-col">
      <label htmlFor={id} className="mt-5 text-purple font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="p-2 mt-2 w-96 rounded-md text-blue bg-yellow focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
      />
    </div>
  );
  
  export default FormInput;