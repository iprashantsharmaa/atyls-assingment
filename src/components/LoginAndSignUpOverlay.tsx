import clsx from 'clsx';
import React, { useState } from 'react';
import { Forms } from '../constants';
import { SignUpForm } from './SignUpForm';
import { LoginForm } from './LoginForm';
import Logo from '../assets/icons/logo';

type Props = {
  onClose?: () => void;
  withOverLay?: boolean;
}

export function LoginAndSignUpOverlay({ onClose = () => {}, withOverLay = false }: Props) {
  const [activeForm, setActiveForm] = useState(Forms.LOGIN);
  const onRegisterClick = () => {
    setActiveForm(Forms.SIGN_UP);
  };

  const onLoginClick = () => {
    setActiveForm(Forms.LOGIN);
  };

  const containerClasses = clsx(
    'flex flex-col justify-center items-center space-y-12',
    { 'fixed inset-0 flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-50 z-50': withOverLay },
  );

  return (
    <div className={containerClasses}>
      <Logo />
      {activeForm === Forms.SIGN_UP && <SignUpForm onClose={onClose} onLoginClick={onLoginClick} />}
      {activeForm === Forms.LOGIN && (
        <LoginForm
          onClose={onClose}
          onRegisterClick={onRegisterClick}
        />
      )}
    </div>
  );
}
