import React, { useState } from 'react';

// 1. Dynamic Data Configuration (Easily add more content here)
const FOOTER_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Brochure', href: '/brochure' },
  { name: 'Campus', href: '/campus' },
  { name: 'Programmes', href: '/programmes' },
  { name: 'About Us', href: '/about' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Academics', href: '/academics' },
  { name: 'Contact', href: '/contact' },
];

const OFFICE_INFO = {
  address: "📍 Balaji Corporate Square, Technology & Science Campus Block, Pune, Maharashtra, India.",
  phone: "📞 +91 9511283086 / 8530183076",
  email: "✉️ bipan.nashik@gmail.com",
  timings: "🕒 Mon - Sat: 9:00 AM - 5:00 PM"
};

const LEGAL_LINKS = [
  { name: 'PRIVACY POLICY', href: '#privacy' },
  { name: 'TERMS OF USE', href: '#terms' },
  { name: 'ACCESSIBILITY', href: '#accessibility' },
];

export default function Footer() {
  // 2. Form State Management
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", formData);
    // Add your API submit logic here
    alert("Thank you for your inquiry!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer className="bg-blue-950 text-white text-sm pt-12 pb-5 font-sans">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 pb-8 border-b border-blue-900">
        
        {/* Dynamic Site Map */}
        <div>
          <h4 className="font-bold text-sm text-orange-400 uppercase tracking-widest mb-4 border-b border-blue-900 pb-2">Site Map</h4>
          <ul className="grid grid-cols-2 gap-2.5 text-gray-300 font-medium text-xs sm:text-sm">
            {FOOTER_LINKS.map((link, idx) => (
              <li key={idx} className="hover:text-orange-400 cursor-pointer transition-colors group">
                <a href={link.href} className="flex items-center">
                  <span className="inline-block transition-transform group-hover:translate-x-1 mr-1">›</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamic Central Office */}
        <div>
          <h4 className="font-bold text-sm text-orange-400 uppercase tracking-widest mb-4 border-b border-blue-900 pb-2">Central Office</h4>
          <p className="text-gray-300 leading-relaxed font-medium text-xs sm:text-sm whitespace-pre-line">
            {OFFICE_INFO.address}
          </p>
          <div className="mt-3 text-gray-300 text-xs sm:text-sm space-y-1.5">
            <p className="hover:text-orange-400 transition-colors"><a href={`tel:${OFFICE_INFO.phone.replace(/\D/g,'')}`}>{OFFICE_INFO.phone}</a></p>
            <p className="hover:text-orange-400 transition-colors"><a href={`mailto:${OFFICE_INFO.email.split(' ')[1]}`}>{OFFICE_INFO.email}</a></p>
            <p className="text-gray-400 italic">{OFFICE_INFO.timings}</p>
          </div>
        </div>

        {/* Functional Quick Inquiry Form */}
        <div>
          <h4 className="font-bold text-sm text-orange-400 uppercase tracking-widest mb-4 border-b border-blue-900 pb-2">Quick Inquiry</h4>
          <form className="space-y-2 text-black" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name" 
              required
              className="w-full p-2.5 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500" 
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email" 
              required
              className="w-full p-2.5 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500" 
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message" 
              rows="2" 
              required
              className="w-full p-2.5 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            ></textarea>
            <button type="submit" className="w-full bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600 uppercase tracking-widest transition-colors text-xs active:scale-[0.98]">
              Contact Us
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="max-w-7xl mx-auto px-4 pt-5 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs gap-3 font-medium">
        <p>© {new Date().getFullYear()} BALAJI INSTITUTES. ALL RIGHTS RESERVED.</p>
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