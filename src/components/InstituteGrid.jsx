import React, { useState } from 'react';
import { institutesData } from '../data';

function InstituteCard({ inst }) {
  // जर gallery नसेल तर inst.image डीफॉल्ट वापरावी
  const [activeImage, setActiveImage] = useState(inst.gallery?.[0] || inst.image);
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-2xl hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-1 group w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* १. डावा भाग: इमेज आणि गॅलरी थंबनेल्स (Left Section for Image) */}
      <div className="relative w-full md:w-[40%] h-56 md:h-auto min-h-[240px] overflow-hidden bg-gray-100 flex-shrink-0">
        
        {/* Main Image */}
        <img 
          src={activeImage} 
          alt={inst.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out cursor-pointer"
          style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
          onClick={() => setIsLightboxOpen(true)}
        />

        {/* Premium Overlays & Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span className="bg-blue-950/90 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm border border-white/10 shadow">
            ⭐ NAAC A+ Accredited
          </span>
          <span className="bg-emerald-600/90 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow w-max">
            🟢 Admissions Open
          </span>
        </div>

        {/* Quick View Overlay */}
        <div 
          onClick={() => setIsLightboxOpen(true)}
          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-0"
        >
          <span className="bg-white/90 text-blue-950 text-xs font-bold px-4 py-2 rounded-full shadow-md backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            🔍 Quick View (Gallery)
          </span>
        </div>
        
        {/* फोटो गॅलरी थंबनेल्स (Hovrable Thumbnails) */}
        {inst.gallery && inst.gallery.length > 1 && (
          <div className="absolute bottom-3 left-3 right-3 flex justify-end space-x-1.5 z-10">
            {inst.gallery.map((img, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveImage(img)}
                className={`w-9 h-9 rounded-md border-2 object-cover overflow-hidden transition-all duration-200 bg-white shadow-sm
                  ${activeImage === img ? 'border-orange-500 scale-110 shadow-md ring-2 ring-orange-500/20' : 'border-transparent opacity-80 hover:opacity-100'}`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* २. उजवा भाग: कॉलेज कंटेंन्ट आणि बटन्स (Right Section for Content & Actions) */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          {/* Location & Estd */}
          <div className="flex justify-between items-center text-xs text-gray-400 font-semibold mb-2">
            <span className="flex items-center text-orange-600">📍 Nashik, Maharashtra</span>
            <span>Estd: 1999</span>
          </div>

          {/* Title */}
          <h3 className="font-black text-lg md:text-xl text-blue-950 mb-3 leading-snug group-hover:text-orange-500 transition-colors duration-200">
            {inst.name}
          </h3>
          
          {/* काउंटर किंवा स्टॅट्स (Features Grid) */}
          <div className="grid grid-cols-3 gap-2 bg-gray-50 p-2 rounded-lg text-center text-[11px] font-bold text-gray-600 mb-4 border border-gray-100 max-w-sm">
            <div className="border-r border-gray-200 last:border-0 py-0.5">
              <p className="text-blue-900 font-extrabold text-sm">45+</p>
              <p className="text-gray-400 text-[9px] uppercase tracking-wider">Courses</p>
            </div>
            <div className="border-r border-gray-200 last:border-0 py-0.5">
              <p className="text-blue-900 font-extrabold text-sm">Top 10</p>
              <p className="text-gray-400 text-[9px] uppercase tracking-wider">Rankings</p>
            </div>
            <div className="last:border-0 py-0.5">
              <p className="text-blue-900 font-extrabold text-sm">100%</p>
              <p className="text-gray-400 text-[9px] uppercase tracking-wider">Placements</p>
            </div>
          </div>
          
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
            {inst.description || "Providing top-tier academic standards, robust infrastructures, and excellent dynamic placements with top MNC companies globally."}
          </p>
        </div>
        
        {/* प्रीमियम ॲक्शन बटन्स */}
        <div className="flex text-center text-xs font-black tracking-wider gap-3 max-w-xs md:max-w-sm">

          <a 
            href={inst.coursesUrl}
            className="flex-1 bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 hover:shadow-orange-500/30 transition-all duration-300 uppercase flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/10"
          >
            <span>Apply Now</span> 🚀
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl font-bold bg-white/10 w-12 h-12 rounded-full hover:bg-white/20 transition-colors"
          >
            ✕
          </button>
          <div className="max-w-4xl max-h-[80vh] bg-white p-2 rounded-lg shadow-2xl">
            <img src={activeImage} alt="Full View" className="max-w-full max-h-[75vh] rounded object-contain" />
            <div className="p-3 text-center text-sm font-bold text-blue-950">{inst.name}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// मेन पॅरेंट लिस्ट लेआउट
export default function AdvancedInstituteGrid() {
  return (
    <div className="w-full bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* हेडर सेक्शन */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4 border-b border-gray-200 pb-5">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight uppercase">
              Our Premier Institutes
            </h2>
            <p className="text-xs sm:text-sm font-bold text-gray-400 tracking-wide mt-1">Explore campus, facilities and courses dynamically</p>
          </div>
          <div className="flex gap-2">
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">Total: {institutesData.length} Colleges</span>
          </div>
        </div>

        {/* लिस्ट लेआउट (Adva/Horizontal साठी grid-cols-1 ठेवून गॅप दिला आहे) */}
        <div className="flex flex-col gap-8">
          {institutesData.map((inst) => (
            <InstituteCard key={inst.id} inst={inst} />
          ))}
        </div>
      </div>
    </div>
  );
}