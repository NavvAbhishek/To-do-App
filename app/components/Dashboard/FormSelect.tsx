import React from 'react';

interface FormSelectProps {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const FormSelect: React.FC<FormSelectProps> = ({ id, label, value, options, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="mt-5 text-purple font-medium">
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="w-96 mt-3 rounded-md bg-yellow focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default FormSelect;