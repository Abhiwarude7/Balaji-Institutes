import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import InstituteGrid from './components/InstituteGrid';
import Sidebar from './components/Sidebar';
import KeyFeatures from './components/KeyFeatures';
import ProductGallery from './components/ProductGallery'; 
import TrainingCentre from './components/TrainingCentre';
//import Academics from './components/Academics';
import GoogleReviews from './components/GoogleReviews';
import Trustees from './components/Trustees'; 
import Footer from './components/Footer';

function App() {

  // 🔐 अलर्ट मेसेज न दाखवता गुपचूप इन्स्पेक्ट आणि कॉपी ब्लॉक करणे
  useEffect(() => {
    const blockRightClick = (e) => {
      e.preventDefault();
    };

    const blockInspectKeys = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', blockRightClick);
    document.addEventListener('keydown', blockInspectKeys);

    return () => {
      document.removeEventListener('contextmenu', blockRightClick);
      document.removeEventListener('keydown', blockInspectKeys);
    };
  }, []);

  // 🚀 क्लिक केल्यावर विशिष्ट आयडीवर स्मूथ स्क्रोल करण्यासाठी फंक्शन
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    // ⛔ 'select-none' मुळे टेक्स्ट कॉपी/सिलेक्ट पूर्णपणे बंद
    <div id="home-section" className="font-sans bg-gray-50 min-h-screen antialiased select-none">
      
      {/* 💡 Header ला स्क्रोल फंक्शन प्रोप म्हणून पाठवले */}
      <Header onNavigate={scrollToSection} />
      
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

      {/* इन्स्टिट्यूट गॅलरी / कॅम्पस */}
      <section id="campus-section" className="bg-white border-y border-gray-100">
        <ProductGallery />
      </section>

      {/* Trustees सेक्शन */}
      <Trustees />
      {/* <Academics />  */}
      <TrainingCentre />

      <GoogleReviews />

      {/* कॉलेजची प्रमुख वैशिष्ट्ये (Key Features) */}
      <KeyFeatures />
      
      {/* 📞 कॉन्टॅक्ट आयडी आपण थेट फुटरच्या कंटेनरला दिला आहे */}
      <div id="contact-section">
        <Footer onNavigate={scrollToSection} />
      </div>

    </div>
  );
}

export default App;