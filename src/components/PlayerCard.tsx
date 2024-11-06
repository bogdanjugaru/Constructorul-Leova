import React from 'react';

interface PlayerCardProps {
  name: string;
  number: number;
}

export function PlayerCard({ name, number }: PlayerCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-4xl font-bold text-red-600 mb-2">#{number}</div>
      <div className="text-lg font-semibold">{name}</div>
    </div>
  );
}