import React, { useState, useEffect } from 'react';
import { sliderImages } from '../data';

export default function HeroSlider() {
  // सध्या कोणती स्लाईड ॲक्टिव्ह आहे हे ट्रॅक करण्यासाठी (मोबाईलसाठी उपयुक्त)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play: दर ४ सेकंदांनी स्लाईड आपोआप बदलेल
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[240px] sm:h-[340px] md:h-[400px] bg-gray-900 overflow-hidden group">
      
      {/* १. Mobile View: सिंगल इमेज स्लायडर (Fades/Slides beautifully) */}
      <div className="block sm:hidden h-full w-full relative">
        {sliderImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out
              ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ backgroundImage: `url('${img}')` }}
          >
            {/* Dark overlay for rich look */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* २. Desktop View: ५ कॉलम ग्रिड (मूळ डिझाईनप्रमाणे) */}
      <div className="hidden sm:grid grid-cols-3 lg:grid-cols-5 h-full w-full opacity-90 transition-all duration-500">
        {sliderImages.map((img, idx) => (
          <div 
            key={idx}
            className={`bg-cover bg-center transition-all duration-500 hover:scale-105 cursor-pointer
              ${idx > 0 ? 'border-l-[3px] border-blue-950' : ''} 
              ${idx === 1 || idx === 3 ? 'hidden sm:block' : ''} 
              ${idx === 2 || idx === 4 ? 'hidden lg:block' : ''}`} 
            style={{ backgroundImage: `url('${img}')` }}
          >
            {/* Hover प्रभाव: माउस नेल्यावर इमेज हलकी उजळेल */}
            <div className="w-full h-full bg-black/10 hover:bg-transparent transition-colors duration-300"></div>
          </div>
        ))}
      </div>

      {/* ३. Slider Control Buttons (डावे आणि उजवे बाण) */}
      {/* group-hover: md स्क्रीनवर माउस नेल्यावरच हे बटन दिसतील */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-orange-500 text-white w-10 h-10 flex items-center justify-center text-xl rounded-full z-20 backdrop-blur-sm transition-all duration-300 md:opacity-0 md:group-hover:opacity-100"
      >
        ❮
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-orange-500 text-white w-10 h-10 flex items-center justify-center text-xl rounded-full z-20 backdrop-blur-sm transition-all duration-300 md:opacity-0 md:group-hover:opacity-100"
      >
        ❯
      </button>

      {/* ४. Slider Dots Navigation (Dynamic Indicators) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer
              ${idx === currentIndex ? 'w-6 bg-orange-500' : 'w-2.5 bg-white/60 hover:bg-white'}`}
          ></button>
        ))}
      </div>

    </div>
  );
}