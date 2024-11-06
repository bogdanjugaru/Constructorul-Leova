import React from 'react';
import { PlayerCard } from './PlayerCard';

interface TeamSectionProps {
  title: string;
  players: Array<{ name: string; number: number }>;
}

export function TeamSection({ title, players }: TeamSectionProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 text-red-600">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map(player => (
          <PlayerCard key={player.name} {...player} />
        ))}
      </div>
    </div>
  );
}