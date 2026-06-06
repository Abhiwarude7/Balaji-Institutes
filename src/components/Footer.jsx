import React, { useState } from 'react';

const FOOTER_LINKS = [
  { name: 'Home', href: 'home-section' },
  { name: 'Brochure', href: '#' },
  { name: 'Campus', href: 'campus-section' },
  { name: 'Programmes', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Admissions', href: '#' },
  { name: 'Academics', href: '#' },
  { name: 'Contact', href: 'contact-section' },
];

const OFFICE_INFO = {
  address: "📍 25, Gurupushpa Digambar Nagar, Near Vaishnavi Dairy, Mirchi Hotel Road, Amrutdham Nashik 422003",
  phone: "📞 +91 9511283086 / 8530183076",
  email: "✉️ bipan.nashik@gmail.com",
  timings: "🕒 Mon - Sat: 9:00 AM - 5:30 PM"
};

const LEGAL_LINKS = [
  { name: 'PRIVACY POLICY', href: '#privacy' },
  { name: 'TERMS OF USE', href: '#terms' },
  { name: 'ACCESSIBILITY', href: '#accessibility' },
];

export default function Footer({ onNavigate }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp Integration Logic
    const whatsappNumber = "919511283076"; // Updated to match your central office info phone number
    const whatsappMessage = `Hello Sir,\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nThank You.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <footer className="bg-blue-950 text-white text-sm pt-12 pb-5 font-sans border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 pb-8 border-b border-blue-900">
        
        {/* 🗺️ Site Map */}
        <div>
          <h4 className="font-bold text-sm text-orange-400 uppercase tracking-widest mb-4 border-b border-blue-900 pb-2">Site Map</h4>
          <ul className="grid grid-cols-2 gap-2.5 text-gray-300 font-medium text-xs sm:text-sm">
            {FOOTER_LINKS.map((link, idx) => (
              <li key={idx} className="hover:text-orange-400 cursor-pointer transition-colors group">
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.name === 'Contact') onNavigate('contact-section');
                    else if (link.name === 'Home') onNavigate('home-section');
                    else if (link.name === 'Campus') onNavigate('campus-section');
                  }} 
                  className="flex items-center bg-transparent border-none text-left cursor-pointer text-gray-300 hover:text-orange-400 font-medium text-xs sm:text-sm"
                >
                  <span className="inline-block transition-transform group-hover:translate-x-1 mr-1">›</span> {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 🏢 Central Office Info */}
        <div>
          <h4 className="font-bold text-sm text-orange-400 uppercase tracking-widest mb-4 border-b border-blue-900 pb-2">Central Office</h4>
          <p className="text-gray-300 leading-relaxed font-medium text-xs sm:text-sm">
            {OFFICE_INFO.address}
          </p>
          <div className="mt-4 text-gray-300 text-xs sm:text-sm space-y-2">
            <p className="hover:text-orange-400 transition-colors">
              <a href="tel:+919511283086">{OFFICE_INFO.phone}</a>
            </p>
            <p className="hover:text-orange-400 transition-colors">
              <a href="mailto:bipan.nashik@gmail.com">{OFFICE_INFO.email}</a>
            </p>
            <p className="text-gray-400 italic text-[11px] sm:text-xs pt-1">{OFFICE_INFO.timings}</p>
          </div>
        </div>

        {/* ✉️ Quick Inquiry Form */}
        <div> 
          <h4 className="font-bold text-sm text-orange-400 uppercase tracking-widest mb-4 border-b border-blue-900 pb-2"> Quick Inquiry </h4> 
          {isSubmitted ? ( 
            <div className="bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded p-4 text-center font-bold text-xs uppercase tracking-wide"> 
              ✓ Thank You! Your Message Has Been Sent Successfully. 
            </div> 
          ) : ( 
            <form className="space-y-2 text-black" onSubmit={handleSubmit}> 
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter Your Name" required className="w-full p-2.5 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500" /> 
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Your Email" required className="w-full p-2.5 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500" /> 
              <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Enter Your Message" rows="3" required className="w-full p-2.5 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none" /> 
              <button type="submit" className="w-full bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600 uppercase tracking-widest transition-all text-xs active:scale-[0.98]"> 
                Contact Us 
              </button> 
            </form> 
          )} 
        </div>
      </div>

{/* 🔒 Copyright Footer */}
<div className="max-w-7xl mx-auto px-4 pt-5 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs gap-3 font-medium">
  
  {/* डावा भाग: कॉपीराईट */}
  <p>© {new Date().getFullYear()} BALAJI INSTITUTES. ALL RIGHTS RESERVED.</p>
  
  {/* मधला भाग: Developed By (नवीन जोडलेला) */}
  <p className="text-gray-500 font-semibold tracking-wide hover:text-gray-300 transition-colors">
    Developed by <span className="text-orange-500">Abhi Warude</span>
  </p>
  
  {/* उजवा भाग: लीगल लिंक्स */}
  <div className="flex items-center space-x-3 flex-wrap justify-center">
    {LEGAL_LINKS.map((link, idx) => (
      <React.Fragment key={idx}>
        <a href={link.href} className="hover:underline hover:text-white transition-colors">{link.name}</a>
        {idx < LEGAL_LINKS.length - 1 && <span className="text-gray-600">|</span>}
      </React.Fragment>
    ))}
  </div>
</div>
</footer>
  );
}