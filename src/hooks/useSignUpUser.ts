import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiHookProps, LoginValues } from '../types';
import { signUpUser } from '../services';

export const useSignUpUser = ({ onSuccess }: ApiHookProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async (values: LoginValues) => {
    setLoading(true);
    try {
      await signUpUser(values);
      onSuccess();
      navigate('/');
    } catch (e: unknown) {
      setLoading(false);
      console.log({ e: e?.toString() }, typeof e);
      setError(e?.toString() ?? '');
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSignUp,
    loading,
    error,
  };
};
