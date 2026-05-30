import React from 'react';
import smileImg from '../assets/smileImg.jpeg';
import mauliImg from '../assets/mauliImg.jpeg';
import vardanImg from '../assets/vardanImg.jpeg';
export default function ClinicalPartners() {
  const trainingHospitals = [
    {
      name: "Smile Children Hospital",
      subtitle: "Shukla Hospital Extended",
      location: "Ramdaspeth Birla road, Akola - 444001",
      imgSrc: smileImg
    },
    {
      name: "Mauli Hospital",
      subtitle: "Mauli Hospital & Research Center",
      location: "Sinnar, Nashik",
      imgSrc: mauliImg
    },
    {
      name: "Vardan Nursing Home",
      subtitle: "Mother and Child Care Hospital",
      location: "Sinnar Region",
      imgSrc: vardanImg
    }
  ];

  return (
    <div className="w-full bg-slate-50 py-16 px-6 md:py-24 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <h3 className="text-2xl md:text-4xl font-black text-blue-950 tracking-tight">
            Our Clinical <span className="text-orange-500">Training Partners & Labs</span>
          </h3>
          <p className="text-xs md:text-sm text-gray-500 font-medium mt-2 leading-relaxed">
            Students na actual live exposure bhetava mhanun aamhi top multi-specialty hospitals sobat clinical training tie-ups kele aahet.
          </p>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingHospitals.map((hospital, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 group hover:shadow-xl transition-all duration-300">
              
              {/* Photo Container */}
              <div className="w-full h-48 bg-slate-100 overflow-hidden relative">
                <img 
                  src={hospital.imgSrc} 
                  alt={hospital.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 bg-orange-500 text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Live Setup
                </span>
              </div>

              {/* Info Text Content */}
              <div className="p-4">
                <h4 className="text-sm font-black text-blue-950 tracking-tight line-clamp-1">
                  {hospital.name}
                </h4>
                <p className="text-[11px] text-orange-500 font-bold mt-0.5">
                  {hospital.subtitle}
                </p>
                <p className="text-[11px] text-gray-400 font-medium mt-3 flex items-start gap-1 line-clamp-2">
                  <span className="shrink-0">📍</span> {hospital.location}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}