import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        'bg-m-purple hover:bg-m-purple-hover disabled:cursor-not-allowed leading-[1.5] font-semibold text-white rounded-lg py-3 px-7 transition-all duration-200',
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
