import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiHookProps, LoginValues } from '../types';
import { authenticateUser } from '../services';

export const useAuthenticateUser = ({
  onSuccess,
}: ApiHookProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (values: LoginValues) => {
    setLoading(true);
    try {
      await authenticateUser(values);
      onSuccess();
      navigate('/');
    } catch (e: unknown) {
      setLoading(false);
      setError(e?.toString() ?? '');
    } finally {
      setLoading(false);
    }
  };

  return {
    handleLogin,
    loading,
    error,
  };
};
