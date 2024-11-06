import React from 'react';
import { Trophy, Dumbbell, Users, Star } from 'lucide-react';

export function Stats() {
  return (
    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-red-600/5 -skew-y-6 transform origin-top-left"></div>
      <div className="relative">
        <div className="text-center mb-16">
          <Star className="w-16 h-16 mx-auto mb-6 text-red-600 animate-spin-slow" />
          <h2 className="text-4xl font-bold mb-4">Statistici și Realizări</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12">
            Performanțele noastre reflectă dedicarea și pasiunea pentru fotbal
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition-all duration-300">
            <Trophy className="w-16 h-16 mx-auto mb-6 text-red-600" />
            <h3 className="text-2xl font-bold mb-4">Performanță</h3>
            <p className="text-gray-600 text-lg mb-6">Echipă cu tradiție în fotbalul moldovenesc</p>
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full transform -skew-x-12"></div>
              <div className="relative text-3xl font-bold text-red-600">15+</div>
              <div className="relative text-sm text-gray-500 mt-1">ani de experiență</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition-all duration-300">
            <Dumbbell className="w-16 h-16 mx-auto mb-6 text-red-600" />
            <h3 className="text-2xl font-bold mb-4">Pregătire</h3>
            <p className="text-gray-600 text-lg mb-6">Antrenamente intensive și dedicare totală</p>
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full transform -skew-x-12"></div>
              <div className="relative text-3xl font-bold text-red-600">300+</div>
              <div className="relative text-sm text-gray-500 mt-1">ore de antrenament anual</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition-all duration-300">
            <Users className="w-16 h-16 mx-auto mb-6 text-red-600" />
            <h3 className="text-2xl font-bold mb-4">Comunitate</h3>
            <p className="text-gray-600 text-lg mb-6">Susținere puternică din partea fanilor</p>
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full transform -skew-x-12"></div>
              <div className="relative text-3xl font-bold text-red-600">1000+</div>
              <div className="relative text-sm text-gray-500 mt-1">suporteri dedicați</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}