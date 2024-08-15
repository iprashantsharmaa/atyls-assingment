import React from 'react';
import clsx from 'clsx';

type LoaderOverlayProps = {
  isLoading: boolean;
  className?: string;
}

function LoaderOverlay({ isLoading, className }: LoaderOverlayProps) {
  const containerClasses = clsx(
    'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50',
    className,
  );
  if (!isLoading) return null;

  return (
    <div className={containerClasses}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white" />
    </div>
  );
}

export default LoaderOverlay;
