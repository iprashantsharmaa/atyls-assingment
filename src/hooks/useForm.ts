import { useState } from 'react';

type Props<T> = {
  defaultValues?: T;
};

export const useForm = <T, >({ defaultValues }: Props<T>) => {
  const [formValues, setValues] = useState<T>(defaultValues ?? ({} as T));

  const handleChange = (key: keyof T) => (val: T[typeof key]) => {
    setValues((prevValues) => ({
      ...(prevValues ?? ({} as T)),
      [key]: val,
    }));
  };

  return {
    formValues,
    handleChange,
  };
};
