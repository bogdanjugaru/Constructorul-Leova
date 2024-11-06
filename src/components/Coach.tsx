import React from 'react';
import { User, Star, Trophy, Target } from 'lucide-react';

export function Coach() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <User className="w-16 h-16 mx-auto mb-6 text-red-600" />
          <h2 className="text-4xl font-bold mb-4">Antrenorul Principal</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-12 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-yellow-400 rotate-45 transform hover:rotate-90 transition-all duration-500"></div>
              </div>
              
              <div className="text-white">
                <h3 className="text-4xl font-bold mb-4">Ruslan Diacenco</h3>
                <p className="text-2xl opacity-90 mb-6">Antrenor Principal</p>
                <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                    <p className="text-lg font-semibold">Experiență</p>
                    <p className="opacity-80">15+ ani</p>
                  </div>
                  <div className="text-center">
                    <Star className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                    <p className="text-lg font-semibold">Victorii</p>
                    <p className="opacity-80">100+</p>
                  </div>
                  <div className="text-center">
                    <Target className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                    <p className="text-lg font-semibold">Obiectiv</p>
                    <p className="opacity-80">Excelență</p>
                  </div>
                </div>

                <p className="text-lg opacity-90 leading-relaxed">
                  Cu o viziune tactică excepțională și o dedicare remarcabilă față de dezvoltarea echipei,
                  Ruslan Diacenco conduce FC Constructorul Leova spre noi culmi ale performanței.
                  Sub conducerea sa, echipa a devenit un simbol al perseverenței și al spiritului competitiv.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}