import React from 'react';
import Logo from '../../assets/icons/logo';

import { LoginAndSignUpOverlay } from '../../components/LoginAndSignUpOverlay';

export function Login() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center space-y-12">
      <Logo />
      <LoginAndSignUpOverlay />
    </div>

  );
}
