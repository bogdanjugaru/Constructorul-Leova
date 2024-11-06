import React from 'react';
import { Shield, Shirt } from 'lucide-react';
import { players } from '../data/players';

export function Squad() {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Shield className="w-16 h-16 mx-auto mb-6 text-red-600 animate-bounce-slow" />
          <h2 className="text-4xl font-bold mb-4">Lotul Echipei</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12">
            Jucătorii noștri sunt inima echipei, fiecare aducând talent și dedicare pentru succesul clubului
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {Object.entries({
            'Portari': players.goalkeepers,
            'Apărători': players.defenders,
            'Mijlocași': players.midfielders,
            'Atacanți': players.forwards
          }).map(([title, playerList]) => (
            <div key={title} 
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative bg-gradient-to-r from-red-600 to-red-700 py-6">
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute transform rotate-45 bg-red-500 w-32 h-8 -right-8 top-4"></div>
                </div>
                <h3 className="text-xl font-bold text-center text-white">{title}</h3>
              </div>
              
              <div className="p-6 space-y-4">
                {playerList.map((player) => (
                  <div 
                    key={player.name} 
                    className="relative group bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute -right-2 -top-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-all duration-300">
                      <Shirt className="w-4 h-4 text-white" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{player.name}</p>
                        <div className="flex items-center mt-1">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span className="ml-2 text-sm text-gray-500">
                            {title.slice(0, -1)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg">
                        <span className="text-white font-bold">
                          {player.number}
                        </span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}