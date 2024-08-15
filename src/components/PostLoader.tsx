import React from 'react';

type Props = {
   count?: number;
}
export function PostLoader({ count = 4 }: Props) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => i + 1).map((i) => (
        <div
          key={i}
          className="w-full h-56 animate-pulse bg-primaryLight rounded-lg"
        />
      ))}
    </>
  );
}
