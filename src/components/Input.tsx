import React, { useState, ChangeEvent } from 'react';
import clsx from 'clsx';

type InputWrapperProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string
  value: string;
  onChange: (val: string) => void;
  errorMessage?: string;
}

function Input({
  label,
  type = 'text',
  value,
  className,
  onChange,
  errorMessage,
  placeholder,
}: InputWrapperProps) {
  const [touched, setTouched] = useState(false);

  const inputClasses = clsx(
    'bg-transparent border border-border rounded p-3 w-full outline-0 text-white',
    className,
    {
      '': !!(touched && errorMessage),
    },
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-2.5">
      {label && <span className="text-sm font-medium text-secondaryLight">{label}</span>}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className={inputClasses}
        placeholder={placeholder}
      />
      {errorMessage && <span className="text-red-500 text-sm mt-1">{errorMessage}</span>}
    </div>
  );
}

export default Input;
