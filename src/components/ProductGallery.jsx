import React, { useState } from 'react';
import campusImg from '../assets/nursingstudent.png'

export default function ProductGallery() {
  const galleryImages = [
    { id: 1, src: campusImg, title: "Campus Life", category: "Campus" },
     { id: 2, src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=60", title: "Graduation Ceremony", category: "Events" },
    { id: 3, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=60", title: "Classroom Lectures", category: "Academics" },
    { id: 4, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60", title: "Group Discussion", category: "Academics" },
    { id: 5, src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=60", title: "Library Study", category: "Campus" },
    { id: 6, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=60", title: "Annual Seminar", category: "Events" },
  ];

  const [selectedImageIdx, setSelectedImageIdx] = useState(null);

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedImageIdx((prev) => (prev + 1) % galleryImages.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedImageIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-slate-50/50 min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-blue-950 tracking-tight uppercase relative inline-block pb-3">
          Our Campus Gallery
          <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></span>
        </h2>
        <p className="text-gray-500 text-xs mt-2 font-medium tracking-wide">Glimpses of Balaji Institutes life and events</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <div 
            key={img.id}
            onClick={() => setSelectedImageIdx(idx)}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="bg-orange-500 text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-md absolute top-4 left-4 shadow">
                  {img.category}
                </span>
                <div className="text-white">
                  <h3 className="font-extrabold text-sm tracking-wide">{img.title}</h3>
                  <p className="text-[10px] text-gray-300 mt-0.5">Click to view full size 🔍</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImageIdx !== null && (
        <div 
          onClick={() => setSelectedImageIdx(null)}
          className="fixed inset-0 bg-blue-950/95 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-200"
        >
          <button 
            onClick={() => setSelectedImageIdx(null)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-orange-500 w-11 h-11 rounded-full flex items-center justify-center font-bold text-xl transition-all shadow-lg"
          >
            ✕
          </button>

          <button 
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md hover:scale-110 transition-all"
          >
            ❮
          </button>

          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2 animate-in zoom-in-95 duration-200"
          >
            <img 
              src={galleryImages[selectedImageIdx].src} 
              alt={galleryImages[selectedImageIdx].title} 
              className="max-w-full max-h-[75vh] object-contain rounded-xl"
            />
            <div className="p-3 bg-white flex justify-between items-center border-t border-slate-100">
              <h4 className="text-blue-950 font-black text-sm tracking-wide">
                {galleryImages[selectedImageIdx].title}
              </h4>
              <span className="text-[11px] font-bold text-gray-400 bg-slate-100 px-3 py-1 rounded-full">
                {selectedImageIdx + 1} / {galleryImages.length}
              </span>
            </div>
          </div>

          <button 
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md hover:scale-110 transition-all"
          >
            ❯
          </button>
        </div>
      )}
    </div>
  );
}