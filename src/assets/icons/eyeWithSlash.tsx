import React from 'react';
import { SvgIconProps } from '../../types';

export default function EyeWithSlash(props: SvgIconProps) {
  return (
    <svg
      {...props}
      height={20}
      width={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.4165 10C2.4165 9.19329 2.93496 7.70471 4.18591 6.40565C5.40704 5.13755 7.29871 4.08333 9.99984 4.08333C12.701 4.08333 14.5926 5.13755 15.8138 6.40565C17.0647 7.70471 17.5832 9.19329 17.5832 10C17.5832 10.8067 17.0647 12.2953 15.8138 13.5943C14.5926 14.8624 12.701 15.9167 9.99984 15.9167C7.29871 15.9167 5.40704 14.8624 4.18591 13.5943C2.93496 12.2953 2.4165 10.8067 2.4165 10ZM9.99984 2.58333C6.86763 2.58333 4.59263 3.82078 3.10543 5.36518C1.64805 6.87862 0.916504 8.72338 0.916504 10C0.916504 11.2766 1.64805 13.1214 3.10543 14.6348C4.59263 16.1792 6.86763 17.4167 9.99984 17.4167C13.132 17.4167 15.407 16.1792 16.8942 14.6348C18.3516 13.1214 19.0832 11.2766 19.0832 10C19.0832 8.72338 18.3516 6.87862 16.8942 5.36518C15.407 3.82078 13.132 2.58333 9.99984 2.58333ZM8.24976 10C8.24976 9.0335 9.03326 8.25 9.99976 8.25C10.9663 8.25 11.7498 9.0335 11.7498 10C11.7498 10.9665 10.9663 11.75 9.99976 11.75C9.03326 11.75 8.24976 10.9665 8.24976 10ZM9.99976 6.75C8.20483 6.75 6.74976 8.20507 6.74976 10C6.74976 11.7949 8.20483 13.25 9.99976 13.25C11.7947 13.25 13.2498 11.7949 13.2498 10C13.2498 8.20507 11.7947 6.75 9.99976 6.75Z"
        fill="#7F8084"
      />
      <path d="M6 6L14 14" stroke="#7F8084" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
