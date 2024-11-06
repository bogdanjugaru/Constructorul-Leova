import React, { useState } from 'react';
import { Image, X } from 'lucide-react';
import img1 from  '../../public/team-photos/team-1.jpg'
import img2 from  '../../public/team-photos/team-2.jpg'
import img3 from  '../../public/team-photos/team-3.jpg'
import img4 from  '../../public/team-photos/team-4.jpg'
import img5 from  '../../public/team-photos/team-5.jpg'
import img6 from  '../../public/team-photos/team-6.jpg'



const images = [
  {
    url: img1,
    title: "Cupa Comrat - Locul 3",
    description: "Echipa cu trofeul pentru locul 3 în Cupa Comrat"
  },
  {
    url: img2,
    title: "Echipa Completă",
    description: "Lotul complet al echipei FC Constructorul Leova"
  },
  {
    url: img3,
    title: "Primul 11",
    description: "Echipa de start într-un meci important"
  },
  {
    url: img4,
    title: "Echipa în Acțiune",
    description: "Moment din timpul unui meci"
  },
  {
    url: img6,
    title: "Echipa în Acțiune",
    description: "Moment din timpul unui meci"
  },
  {
    url: img5,
    title: "Generații Unite",
    description: "Echipa alături de juniorii clubului"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{url: string; title: string; description: string} | null>(null);

  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Image className="w-16 h-16 mx-auto mb-6 text-red-500" />
          <h2 className="text-4xl font-bold text-white mb-4">Galerie Foto</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-12">
            Momente memorabile din istoria clubului nostru
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative  group overflow-hidden rounded-xl shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-500   w-[375px] h-[200px]"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.url}
                  alt={image.title}
                  className="object-cover w-[375px] h-[200px]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-2xl mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}