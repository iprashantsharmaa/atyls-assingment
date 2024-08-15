import React, { FormEvent, useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { SignUpValues } from '../types';
import { isValidEmail, noop } from '../utils';
import { useSignUpUser } from '../hooks/useSignUpUser';
import Input from './Input';
import Button from './Button';
import PasswordInput from './PasswordInput';
import LoaderOverlay from './Loader';
import CrossIcon from '../assets/icons/cross';

type Props = {
  onLoginClick: () => void;
  onClose?: () => void;
};

export function SignUpForm({ onLoginClick, onClose } : Props) {
  const { handleSignUp, loading, error } = useSignUpUser({
    onSuccess: () => !!onClose && onClose(),
  });
  const { formValues, handleChange } = useForm<SignUpValues>({
    defaultValues: {
      email: '',
      userName: '',
      password: '',
    },
  });
  const [errors, setErrors] = useState({
    userNameError: '',
    emailError: '',
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
      emailError: !formValues.email
        ? 'This is required'
        : !isValidEmail(formValues.email)
          ? 'Enter a valid email'
          : '',
      passwordError: !formValues.password ? 'This is required' : '',
      formError: '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((err) => err);
  };

  const onChange = (key: keyof SignUpValues) => (val: string) => {
    handleChange(key)(val);
    if (key === 'email') {
      setErrors((prev) => ({
        ...prev,
        emailError: isValidEmail(val) ? '' : 'Enter a valid Email',
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      await handleSignUp(formValues);
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
          <span className="text-sm font-medium text-primaryLight">SIGN UP</span>
          <span className="text-white text-lg font-semibold">
            Create an account to continue
          </span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-14">
          <Input
            label="Email"
            onChange={onChange('email')}
            value={formValues.email}
            placeholder="Enter your email"
            errorMessage={errors.emailError}
          />
          <Input
            label="Username"
            onChange={onChange('userName')}
            value={formValues.userName}
            placeholder="Choose a preferred username"
            errorMessage={errors.userNameError}
          />
          <PasswordInput
            label="Password"
            onChange={onChange('password')}
            value={formValues.password}
            placeholder="Choose a strong password"
            errorMessage={errors.passwordError}
          />
          {errors.formError && (
            <span className="text-sm font-medium text-red-500">
              {errors.formError}
            </span>
          )}
          <Button onClick={noop} type="submit" className="flex bg-blue w-full">
            Continue
          </Button>
          <div className="flex items-baseline space-x-1.5">
            <span className="text-sm font-medium text-primaryLight">
              Already have an account?
            </span>
            <Button onClick={onLoginClick} className="!p-0 !text-sm">
              Login →
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
