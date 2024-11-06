import React from 'react';
import { Trophy, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-500/20"></div>
      <div className="text-center z-10 animate-fade-in">
        <Trophy className="w-32 h-32 mx-auto mb-8 text-yellow-400 animate-bounce-slow" />
        <h1 className="text-6xl font-bold mb-6 tracking-tight">
          FC Constructorul Leova
        </h1>
        <div className="flex items-center justify-center space-x-4 text-2xl font-light mb-12">
          <span>Pasiune</span>
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          <span>Determinare</span>
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          <span>Victorie</span>
        </div>
        <button 
          onClick={scrollToContent}
          className="animate-bounce-slow bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Descoperă Echipa
          <ChevronDown className="inline-block ml-2 w-5 h-5" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  );
}