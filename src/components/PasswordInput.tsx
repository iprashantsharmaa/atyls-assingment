import React, { useState, ChangeEvent } from 'react';
import clsx from 'clsx';
import Button from './Button';
import EyeWithSlash from '../assets/icons/eyeWithSlash';
import Eye from '../assets/icons/eye';

type InputWrapperProps = {
  label?: string;
  placeholder?: string;
  className?: string
  inputClassName?: string;
  value: string;
  onChange: (val: string) => void;
  errorMessage?: string;
}

function PasswordInput({
  label,
  value,
  className,
  onChange,
  errorMessage,
  inputClassName,
  placeholder,
}: InputWrapperProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState(false);

  const inputWrapperClasses = clsx(
    'flex item-center space-x-4 bg-transparent border border-border rounded px-3 w-full',
    className,
    {
      'text-red-500': !!(touched && errorMessage),
    },
  );

  const inputClasses = clsx('py-3 bg-none border-none flex-1 bg-transparent outline-0 text-white', inputClassName);

  const handleBlur = () => {
    setTouched(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col space-y-2.5">
      {label && <span className="text-sm font-medium text-secondaryLight">{label}</span>}
      <div className={inputWrapperClasses}>
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClasses}
          placeholder={placeholder}
        />
        <Button
          onClick={toggleVisibility}
          className="!p-0 flex flex-col justify-center items-center"
        >
          {showPassword ? <EyeWithSlash /> : <Eye />}
        </Button>
      </div>
      {touched && errorMessage && <span className="text-red-500 text-sm mt-1">{errorMessage}</span>}
    </div>
  );
}

export default PasswordInput;
