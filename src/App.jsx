import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import InstituteGrid from './components/InstituteGrid';
import Sidebar from './components/Sidebar';
import KeyFeatures from './components/KeyFeatures';
import ProductGallery from './components/ProductGallery'; 
import Trustees from './components/Trustees'; 
import Footer from './components/Footer';

function App() {

  // 🔐 अलर्ट मेसेज न दाखवता गुपचूप इन्स्पेक्ट आणि कॉपी ब्लॉक करणे
  useEffect(() => {
    // 1. Right Click शांतपणे ब्लॉक करणे (No Alert)
    const blockRightClick = (e) => {
      e.preventDefault();
    };

    // 2. F12 आणि सर्व Inspect शॉर्टकट्स शांतपणे ब्लॉक करणे (No Alert)
    const blockInspectKeys = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U (View Source)
      ) {
        e.preventDefault();
        return false;
      }
    };

    // इव्हेंट्स लागू करणे
    document.addEventListener('contextmenu', blockRightClick);
    document.addEventListener('keydown', blockInspectKeys);

    // क्लीनअप
    return () => {
      document.removeEventListener('contextmenu', blockRightClick);
      document.removeEventListener('keydown', blockInspectKeys);
    };
  }, []);

  return (
    // ⛔ 'select-none' मुळे टेक्स्ट कॉपी/सिलेक्ट पूर्णपणे बंद
    <div className="font-sans bg-gray-50 min-h-screen antialiased select-none">
      <Header />
      <HeroSlider />

      {/* मुख्य इन्स्टिट्यूट ग्रिड आणि साईडबार */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl font-black text-center text-blue-950 uppercase tracking-widest mb-6">
          Our Institutes & Colleges
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
          <div className="lg:col-span-3">
            <InstituteGrid />
          </div>
        </div>
      </main>

      {/* इन्स्टिट्यूट गॅलरी */}
      <section className="bg-white border-y border-gray-100">
        <ProductGallery />
      </section>

      {/* Trustees सेक्शन */}
      <Trustees />

      {/* कॉलेजची प्रमुख वैशिष्ट्ये (Key Features) */}
      <KeyFeatures />
      
      <Footer />
    </div>
  );
}

export default App;