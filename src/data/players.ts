export interface Player {
  name: string;
  number: number;
}

export interface Squad {
  goalkeepers: Player[];
  defenders: Player[];
  midfielders: Player[];
  forwards: Player[];
}

export const players: Squad = {
  goalkeepers: [
    { name: 'Tabarcea Ion', number: 1 },
    { name: 'Manea Igor', number: 32 }
  ],
  defenders: [
    { name: 'Gaponenco Alexandru', number: 5 },
    { name: 'Mostovei Ilie', number: 44 },
    { name: 'Dubceac Iulian', number: 9 },
    { name: 'Arabaj Dumitru', number: 22 },
    { name: 'Fanari Vadim', number: 3 }
  ],
  midfielders: [
    { name: 'Todorov Igor', number: 8 },
    { name: 'Cearîcu Ion', number: 18 },
    { name: 'Botez Gheorghe', number: 12 },
    { name: 'Putregai Dorian', number: 11 },
    { name: 'Cravcenco Mihai', number: 7 },
    { name: 'Cornescu Ilie', number: 19 },
    { name: 'Stoleru Marian', number: 10 }
  ],
  forwards: [
    { name: 'Istrati Sergiu', number: 17 },
    { name: 'Carp Vladimir', number: 14 },
    { name: 'Jugaru Bogdan-Dumitru', number: 15 }
  ]
};