import React, { FormEvent, useEffect, useState } from 'react';
import { noop } from '../utils';
import { useAuthenticateUser } from '../hooks/useAuthenticateUser';
import { LoginValues } from '../types';
import Input from './Input';
import Button from './Button';
import PasswordInput from './PasswordInput';
import { useForm } from '../hooks/useForm';
import LoaderOverlay from './Loader';
import CrossIcon from '../assets/icons/cross';

type Props = {
  onRegisterClick: () => void;
  onClose: () => void;
};

export function LoginForm({ onRegisterClick, onClose }: Props) {
  const { handleLogin, loading, error } = useAuthenticateUser({
    onSuccess: () => onClose(),
  });
  const { formValues, handleChange } = useForm<LoginValues>({
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  const [errors, setErrors] = useState({
    userNameError: '',
    passwordError: '',
    formError: '',
  });

  useEffect(() => {
    if (error) {
      setErrors((prev) => ({ ...prev, formError: error }));
    }
  }, [error]);

  const validateForm = () => {
    const newErrors = {
      userNameError: !formValues.userName ? 'This is required' : '',
      passwordError: !formValues.password ? 'This is required' : '',
      formError: '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((err) => err);
  };

  const onChange = (key: keyof LoginValues) => (val: string) => {
    handleChange(key)(val);
    validateForm();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      await handleLogin(formValues);
    }
  };

  return (
    <>
      <LoaderOverlay isLoading={loading} />
      <div className="flex flex-col bg-primary border-2 border-custom-gradient rounded-lg py-10 px-6 w-[30rem] relative">
        {!!onClose && (
          <Button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full bg-secondaryDark flex items-center justify-center w-8 h-8"
          >
            <CrossIcon className="!w-2.5 !h-2.5" />
          </Button>
        )}
        <div className="flex flex-col items-center justify-center space-y-2">
          <span className="text-sm font-medium text-primaryLight">WELCOME BACK</span>
          <span className="text-white text-lg font-semibold">Log into your account</span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-14">
          <Input
            label="Email or Username"
            onChange={onChange('userName')}
            value={formValues.userName}
            placeholder="Enter your email or username"
            errorMessage={errors.userNameError}
          />
          <PasswordInput
            label="Password"
            onChange={onChange('password')}
            value={formValues.password}
            placeholder="Enter your password"
            errorMessage={errors.passwordError}
          />
          {errors.formError && <span className="text-sm font-medium text-red-500">{errors.formError}</span>}
          <Button onClick={noop} type="submit" className="flex bg-blue w-full">Login Now</Button>
          <div className="flex items-baseline space-x-1.5">
            <span className="text-sm font-medium text-primaryLight">Not registered yet?</span>
            <Button onClick={onRegisterClick} className="!p-0 !text-sm">Register →</Button>
          </div>
        </form>
      </div>
    </>
  );
}
