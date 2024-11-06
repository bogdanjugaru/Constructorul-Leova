import React from 'react';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Squad } from './components/Squad';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { Coach } from './components/Coach';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      <Stats />
      <Coach />
      <Squad />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;