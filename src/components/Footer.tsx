import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+373 XXX XXX XX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>contact@fcconstructorul.md</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Leova, Republica Moldova</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Program</h3>
            <div className="space-y-2">
              <p>Luni - Vineri: 9:00 - 18:00</p>
              <p>Sâmbătă: 10:00 - 15:00</p>
              <p>Duminică: Închis</p>
            </div>
          </div>
          
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">Urmărește-ne</h3>
            <div className="flex justify-end space-x-4">
              <a href="https://www.facebook.com/share/v4KCMSyGenEcaJ1T/?mibextid=LQQJ4d" className="hover:text-yellow-400 transition-colors">Facebook</a>
              <a href="https://www.instagram.com/constructor_leova_2023?igsh=eXB1Zm03b2Mxc2No" className="hover:text-yellow-400 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-red-500">
          <div className="text-center text-white">
            <p className="flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-yellow-400" /> for FC Constructorul Leova
            </p>
            <p className="mt-2">© {new Date().getFullYear()} FC Constructorul Leova. Toate drepturile rezervate.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}