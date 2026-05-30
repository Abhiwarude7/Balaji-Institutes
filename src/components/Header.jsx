import React, { useState, useEffect } from 'react';
import { headerData } from '../data';
import AdmissionForm from './AdmissionForm'; 

export default function Header({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('HOME');
  const [activeUtility, setActiveUtility] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);

  const socialLinks = [
    { icon: "fa-facebook-f", display: "f", bg: "hover:bg-blue-600", href: "https://www.facebook.com/share/1Cju2YSV8C/" },
    { icon: "fa-instagram", display: "in", bg: "hover:bg-blue-700", href: "https://www.instagram.com/bipan.nashik?igsh=cDJhdjEwcXpzeGpo" },
    { icon: "fa-brands fa-whatsapp", display: "WA", bg: "hover:bg-green-600", href: "https://whatsapp.com/channel/0029VbCdhYq0bIdqOtqP5t05" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`w-full bg-white font-sans transition-all duration-500 ${
        isSticky 
          ? 'fixed top-0 left-0 z-50 shadow-2xl backdrop-blur-md bg-white/95 border-b-2 border-orange-500/80 transform translate-y-0 subpixel-antialiased animate-in fade-in slide-in-from-top-4' 
          : 'relative'
      }`}>
        
        {/* 1. Top Utility Bar */}
        {!isSticky && (
          <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white text-xs py-2.5 px-6 flex flex-col lg:flex-row justify-between items-center gap-3 border-b border-orange-500/20">
            <div className="text-gray-300 font-medium tracking-wide flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Balaji Institutes Admissions 2026-27 Open
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 font-semibold tracking-wider">
              {headerData.utilityLinks.map((link, idx) => {
                const isUtilActive = activeUtility === link.label;
                return (
                  <a 
                    key={idx} 
                    href={link.href} 
                    onClick={(e) => {
                      if (link.label === "ADMISSION FORM") {
                        e.preventDefault();
                        setShowAdmissionForm(true);
                      } else {
                        setActiveUtility(link.label);
                        setActiveTab('');
                      }
                    }}
                    className={`transition-all duration-300 uppercase text-[11px] relative py-0.5 tracking-widest ${
                      isUtilActive 
                        ? 'text-orange-400 font-black scale-105 drop-shadow-[0_0_8px_rgba(251,146,60,0.4)]' 
                        : 'text-gray-200 hover:text-orange-400'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. Branding & Quick Action Controls Area */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
          
          <div onClick={() => onNavigate('home-section')} className="flex items-center space-x-3.5 group cursor-pointer">
            <div className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-black text-2xl shadow-lg shadow-orange-500/30 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              B
              <span className="absolute -top-2.5 -right-1.5 text-base transform -rotate-12 drop-shadow-md">🎓</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-blue-950 tracking-tight leading-none group-hover:text-orange-500 transition-colors">
                BALAJI
              </h1>
              <p className="text-[9px] font-black text-gray-400 tracking-[0.25em] mt-1.5">
                I N S T I T U T E S
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/* Desktop Quick Navigation Links */}
            <div className="text-xs text-gray-500 space-x-4 hidden lg:flex font-bold items-center">
              <button onClick={() => onNavigate('home-section')} className="hover:text-orange-500 transition-all hover:-translate-y-0.5 bg-transparent border-none cursor-pointer font-bold">Home</button>
              <span className="text-gray-200 text-lg">/</span>
              <button onClick={() => onNavigate('campus-section')} className="hover:text-orange-500 transition-all hover:-translate-y-0.5 bg-transparent border-none cursor-pointer font-bold">Campus</button>
              <span className="text-gray-200 text-lg">/</span>
              <button onClick={() => onNavigate('training-section')} className="hover:text-orange-500 transition-all hover:-translate-y-0.5 bg-transparent border-none cursor-pointer font-bold text-orange-600">Training Centre</button>
              <span className="text-gray-200 text-lg">/</span>
              <button onClick={() => onNavigate('contact-section')} className="hover:text-orange-500 transition-all hover:-translate-y-0.5 bg-transparent border-none cursor-pointer font-bold">Contact</button>
            </div>
            
            <div className="relative hidden sm:block">
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="border border-gray-200 rounded-full pl-5 pr-10 py-2 text-xs bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 w-48 focus:w-72 shadow-inner transition-all duration-500 ease-in-out" 
              />
              <span className="absolute right-4 top-2.5 text-sm grayscale opacity-60 group-focus-within:opacity-100 transition-opacity">🔍</span>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              {socialLinks.map((social, sIdx) => (
                <a
                  key={sIdx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-7 h-7 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-black shadow-sm transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-md ${social.bg}`}
                >
                  {social.display}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-blue-950 rounded-xl text-white hover:bg-orange-500 shadow-md transition-all duration-300"
            >
              <span className={`h-0.5 w-5 bg-white rounded transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`h-0.5 w-5 bg-white rounded my-0.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 w-5 bg-white rounded transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
          </div>
        </div>

        {/* 3. Responsive Navigation Menu (Mobile & Desktop) */}
        <nav className={`border-t border-gray-100 md:bg-white text-blue-950 text-[12px] font-extrabold tracking-widest transition-all duration-300
          ${isOpen ? 'block bg-blue-950 text-white' : 'hidden md:block'}`}
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-start items-stretch">
            {headerData.navItems.map((item, idx) => {
              const hasDropdown = !!item.dropdown;
              const isCurrentActive = activeTab === item.label;
              const isDropdownOpen = activeDropdown === idx;

              return (
                <div 
                  key={idx}
                  className="relative group flex items-stretch"
                  onMouseEnter={() => { if (window.innerWidth >= 768 && hasDropdown) setActiveDropdown(idx); }}
                  onMouseLeave={() => { if (window.innerWidth >= 768 && hasDropdown) setActiveDropdown(null); }}
                >
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      if (hasDropdown && window.innerWidth < 768) {
                        e.preventDefault();
                        setActiveDropdown(isDropdownOpen ? null : idx);
                      } else {
                        // All navigation mapping targets
                        if (item.label === "ADMISSIONS") {
                          e.preventDefault();
                          setShowAdmissionForm(true);
                        } 
                        else if (item.label === "HOME") {
                          e.preventDefault();
                          onNavigate('home-section');
                          setActiveTab(item.label);
                        }
                        else if (item.label === "CONTACT") {
                          e.preventDefault();
                          onNavigate('contact-section');
                          setActiveTab(item.label);
                        }
                        else if (item.label === "TRAINING CENTRE") {
                          e.preventDefault();
                          onNavigate('training-section');
                          setActiveTab(item.label);
                        }
                        else if (!item.href.startsWith('tel:')) {
                          setActiveTab(item.label);
                          setActiveUtility('');
                        }
                        setIsOpen(false);
                      }
                    }}
                    className={`flex items-center justify-between px-4.5 py-4 transition-all duration-300 cursor-pointer w-full md:w-auto relative uppercase border-b-2
                      ${isCurrentActive 
                        ? 'bg-orange-500 md:bg-transparent text-white md:text-orange-500 border-orange-500' 
                        : 'hover:bg-slate-50 md:hover:bg-transparent md:hover:text-orange-500 border-transparent hover:border-orange-500/60'
                      } ${isOpen ? 'border-b border-blue-900/60 text-gray-200 py-3.5 px-6 hover:bg-blue-900' : ''}`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <span className={`ml-1.5 text-[8px] transition-transform duration-300 transform opacity-60
                        ${isDropdownOpen ? 'rotate-180' : 'group-hover:rotate-180'}`}
                      >
                        ▼
                      </span>
                    )}
                  </a>

                  {/* 4. Dropdown Mapping */}
                  {hasDropdown && (
                    <div className={`bg-white md:absolute left-0 top-full min-w-[280px] shadow-2xl md:rounded-b-2xl text-gray-800 border border-slate-100 overflow-hidden z-50 transition-all duration-300 origin-top
                      ${isDropdownOpen ? 'block opacity-100 scale-y-100' : 'hidden md:opacity-0 md:invisible md:scale-y-90 md:group-hover:block md:group-hover:opacity-100 md:group-hover:visible md:group-hover:scale-y-100'}`}
                    >
                      <div className="flex flex-col py-2.5 bg-gradient-to-b from-white to-slate-50/50">
                        <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-amber-500 absolute top-0 left-0"></div>
                        {item.dropdown.map((subItem, subIdx) => (
                          <a
                            key={subIdx}
                            href={subItem.href}
                            className="px-6 py-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-transparent text-gray-700 hover:text-orange-600 font-bold text-[11px] tracking-wider border-b border-slate-100 last:border-0 transition-all duration-150"
                            onClick={(e) => {
                              if (subItem.label === "TRAINING CENTRE") {
                                e.preventDefault();
                                onNavigate('training-section');
                              }
                              setActiveTab(item.label);
                              setActiveUtility('');
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
      </header>

      {isSticky && <div className="h-[116px] hidden md:block"></div>}
      {showAdmissionForm && <AdmissionForm onClose={() => setShowAdmissionForm(false)} />}
    </>
  );
}