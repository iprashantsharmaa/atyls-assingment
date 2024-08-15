import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
  className?: string;
  children: ReactNode;
}

export default function Button({
  children,
  className,
  onClick,
  type = 'button',
}: Props) {
  const btnClasses = clsx('p-3 rounded flex justify-center text-base font-medium text-white', className);
  return (
    <button
      onClick={onClick}
      className={btnClasses}
      type={type}
    >
      {children}
    </button>
  );
}
