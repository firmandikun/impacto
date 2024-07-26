import React from 'react';

type ButtonProps = {
  category?: string;
  isSelected?: boolean;
  onClick: () => void;
  label: string;
  type: 'category' | 'buy';
};

const Button: React.FC<ButtonProps> = ({ category, isSelected, onClick, label, type }) => {
  return (
    <button
      onClick={onClick}
      className={
        type === 'category'
          ? `px-4 py-2 ${isSelected ? 'text-red-500 font-bold' : 'text-gray-700'}`
          : 'bg-red-500 text-white px-4 py-2 rounded'
      }
    >
      {label}
    </button>
  );
};

export default Button;
