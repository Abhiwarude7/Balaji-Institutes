import React from 'react';
import { sidebarData } from '../data';

export default function Sidebar() {
  return (
    <aside className="space-y-6 w-full lg:max-w-xs xl:max-w-sm sticky top-24">
      
      {/* १. Quick Links Panel */}
      <div className="bg-blue-950 rounded-xl shadow-md border border-blue-900/40 overflow-hidden transform hover:shadow-lg transition-all duration-300">
        <div className="bg-orange-500 text-white font-black px-5 py-4 text-xs uppercase tracking-widest border-b border-orange-600">
          ⚡ Quick Links
        </div>
        <ul className="text-white text-xs sm:text-sm divide-y divide-blue-900 font-bold uppercase tracking-wide">
          {sidebarData.quickLinks.map((link, idx) => (
            <li key={idx}>
              <a 
                href={link.href} target='blank'
                className="px-5 py-3.5 hover:bg-orange-500/10 cursor-pointer transition-all duration-200 flex items-center justify-between group"
              >
                <span className="group-hover:text-orange-500 transition-colors">{link.label}</span>
                {/* ॲनिमेटेड बाण - जो हॉवर केल्यावर उजवीकडे सरकतो */}
                <span className="text-orange-500 font-extrabold transform group-hover:translate-x-1.5 transition-transform duration-200">
                  ➔
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* २. Upcoming Events Panel (Dynamic List Layout) */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transform hover:shadow-md transition-all duration-300">
        <div className="bg-blue-950 text-white font-black px-5 py-4 text-xs uppercase tracking-widest border-b border-blue-900">
          📅 Upcoming Events
        </div>
        <div className="divide-y divide-gray-100">
          {sidebarData.events.map((event, idx) => (
            <div key={idx} className="p-4 flex items-start space-x-4 hover:bg-gray-50/70 transition-colors duration-150 group">
              {/* Dynamic Date Calendar Badge */}
              <div className="bg-orange-500 text-white text-center rounded-lg p-2 min-w-[54px] shadow-sm transform group-hover:scale-105 transition-transform duration-200">
                <span className="block text-xl font-black leading-none">{event.day}</span>
                <span className="text-[9px] uppercase font-black tracking-widest block mt-1 border-t border-white/20 pt-1">
                  {event.month}
                </span>
              </div>
              {/* Event Text Info */}
              <div className="text-sm">
                <h4 className="font-extrabold text-blue-950 leading-snug hover:text-orange-500 transition-colors cursor-pointer line-clamp-2">
                  {event.title}
                </h4>
                <p className="text-gray-400 text-xs mt-1 font-semibold flex items-center">
                  <span className="text-orange-500 mr-1">📍</span> {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ३. Balaji News Feed Panel (With Live Blinking Badges) */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transform hover:shadow-md transition-all duration-300">
        <div className="bg-blue-900 text-white font-black px-5 py-4 text-xs uppercase tracking-widest border-b border-blue-950">
          📰 Balaji News Feed
        </div>
        <div className="p-5 space-y-4 divide-y divide-gray-100 text-sm max-h-[380px] overflow-y-auto custom-scrollbar">
          {sidebarData.newsFeed.map((news, idx) => (
            <div key={idx} className="pt-3 first:pt-0 group">
              <div className="flex items-start gap-2">
                {/* जर नवीन न्यूज असेल तर ब्लिंकिंग (Blinking) 'NEW' बॅज दिसेल */}
                {news.isNew && (
                  <span className="bg-rose-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide mt-0.5 animate-pulse shrink-0 shadow-sm shadow-rose-500/20">
                    New
                  </span>
                )}
                <a 
                  href="#news" 
                  className="font-bold text-blue-950 hover:text-orange-500 block leading-snug text-xs sm:text-sm transition-colors duration-150"
                >
                  {news.title}
                </a>
              </div>
              <span className="text-xs text-gray-400 font-bold block mt-1.5 pl-1">
                📅 {news.date}
              </span>
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
}