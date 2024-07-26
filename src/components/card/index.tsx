import React from 'react';
import Button from '../button';

type CardProps = {
  key: string;
  name: string;
  price: number;
  onClick: () => void;
};

const Card: React.FC<CardProps> = ({ name, price, onClick }) => {
  return (
    <div className="p-6  text-center">
      <div className="h-40 bg-gray-300 mb-4"></div>
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">Rp {price.toLocaleString('id-ID')}</p>
      <Button type="buy" label="Beli" onClick={onClick} />
    </div>
  );
};

export default Card;
