import React from 'react';

export default function Academics() {
  const academicStats = [
    { count: "120+", label: "Expert Faculty Members" },
    { count: "40+", label: "Industry-Driven Courses" },
    { count: "100%", label: "Practical Learning Case Studies" },
    { count: "15,000+", label: "Global Alumni Network" }
  ];

  // उपलब्ध कोर्सेस / प्रोग्राम्स
  const programs = [
    {
      title: "Master of Business Administration (MBA)",
      duration: "2 Years Full-Time",
      description: "मार्केटिंग, फायनान्स, आणि एचआर (HR) मधील स्पेशलायझेशनसह कॉर्पोरेट जगतासाठी लीडर्स तयार करणारा अग्रगण्य कोर्स.",
      icon: "📊"
    },
    {
      title: "Post Graduate Diploma in Management (PGDM)",
      duration: "2 Years Autonomous",
      description: "उद्योग जगताच्या बदलत्या गरजांनुसार डिझाईन केलेला आणि प्रॅक्टिकल एक्सपोजर देणारा प्रगत प्रोगॅम.",
      icon: "💼"
    },
    {
      title: "Doctoral Program (Ph.D. in Management)",
      duration: "3-5 Years Program",
      description: "उच्च दर्जाचे संशोधन (Research) आणि शैक्षणिक क्षेत्रातील प्रगतीसाठी उत्तम वाव देणारे डॉक्टरेट गाईडन्स.",
      icon: "🎓"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-slate-900 text-white scroll-mt-20 relative overflow-hidden">
      {/* बॅकग्राउंड डेकोरेशन */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* १. हेडिंग सेक्शन */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-orange-400 font-black tracking-widest text-xs uppercase bg-orange-500/10 px-4 py-1.5 rounded-full inline-block">
            Academic Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            SHAPING CORPORATE LEADERS
          </h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-sm leading-relaxed">
            बालाजी इन्स्टिट्यूटमध्ये केवळ थेअरी नाही, तर प्रॅक्टिकल नॉलेज, केस स्टडीज आणि इंडस्ट्री एक्स्पोजरवर आधारित जागतिक दर्जाचे शिक्षण दिले जाते.
          </p>
        </div>

        {/* २. स्टॅट्स बार (Stat Counters) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {academicStats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-orange-500/40 transition-colors">
              <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">{stat.count}</div>
              <div className="text-xs font-bold text-gray-300 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ३. प्रोग्राम्स / कोर्सेस ग्रिड */}
        <h3 className="text-lg font-black tracking-wider text-orange-400 uppercase mb-8 text-center sm:text-left">
          📚 Featured Academic Programs
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <div 
              key={idx} 
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between h-full group hover:border-orange-500 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <div className="text-4xl bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center border border-slate-800 group-hover:scale-110 group-hover:bg-orange-500 transition-all">
                  {program.icon}
                </div>
                <h4 className="text-base font-black tracking-tight text-gray-100 group-hover:text-orange-400 transition-colors">
                  {program.title}
                </h4>
                <span className="inline-block bg-blue-500/10 text-blue-400 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  ⏱️ {program.duration}
                </span>
                <p className="text-gray-400 text-xs leading-relaxed pt-2">
                  {program.description}
                </p>
              </div>

              <div className="border-t border-slate-900 mt-6 pt-4 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">Curriculum 2026</span>
                <a href="#admission-section" className="text-xs font-bold text-orange-400 hover:underline inline-flex items-center gap-1">
                  Apply Now →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}