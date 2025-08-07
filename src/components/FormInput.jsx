import React from 'react';

const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  options = [],
  placeholder = '',
  rows = 1,
  className = ''
}) => {
  const baseInputStyles = "w-full bg-dimBlue rounded-[10px] outline-none font-poppins font-normal text-[16px] text-white px-4 border-2 border-blue-gradient focus:border-[#00f6ff] transition-colors duration-300";

  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <select
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className={`${baseInputStyles} h-[50px] ${className}`}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value || option}>
                {option.label || option.display_name || option}
              </option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
            placeholder={placeholder}
            className={`${baseInputStyles} p-4 resize-none ${className}`}
          />
        );
      case 'checkbox':
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              name={name}
              checked={value}
              onChange={onChange}
              className={`w-5 h-5 bg-dimBlue rounded border-2 border-blue-gradient focus:border-[#00f6ff] transition-colors duration-300 ${className}`}
            />
          </div>
        );
      default:
        return (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className={`${baseInputStyles} h-[50px] ${className}`}
          />
        );
    }
  };

  return (
    <div className="flex flex-col mb-6">
      <label className="font-poppins font-medium text-[16px] text-white mb-2 block">
        {label}
      </label>
      {renderInput()}
    </div>
  );
};

export default FormInput;