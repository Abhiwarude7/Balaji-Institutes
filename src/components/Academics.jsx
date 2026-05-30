import React, { useState } from 'react';

export default function Academics() {
  const [activeTab, setActiveTab] = useState('courses');

  const nursingCourses = [
    {
      code: "B.SC-N",
      title: "B.Sc. Nursing (Degree)",
      duration: "4 Years (Full Time)",
      intake: "40 Seats",
      description: "Advanced clinical nursing, community health, research methodology, and healthcare management training.",
      features: ["INC Recognized", "MUHS Affiliated", "Well-equipped Labs", "100% Placement Assistance"]
    },
    {
      code: "GNM",
      title: "General Nursing & Midwifery (Diploma)",
      duration: "3 Years",
      intake: "50 Seats",
      description: "Focuses on comprehensive bedside care, maternal health, midwifery skills, and general hospital administration.",
      features: ["MNC Approved", "Live Hospital Training", "Skill Labs Intensive", "Affordable Fee Structure"]
    },
    {
      code: "ANM",
      title: "Auxiliary Nurse Midwifery",
      duration: "2 Years",
      intake: "30 Seats",
      description: "Primary healthcare training focusing heavily on rural health services, vaccination drives, and maternal child health care.",
      features: ["MNC Approved", "Rural Posting Exposure", "Hands-on Training", "Direct Government Job Scopes"]
    }
  ];

  const practicalLabs = [
    { name: "Nursing Foundation Lab", desc: "Equipped with advanced dummy mannequins, CPR models, and essential hospital setup items for basic skill development." },
    { name: "CHN & Nutrition Lab", desc: "Community Health Nursing kit management along with a dedicated dietetics setup for learning therapeutic diets." },
    { name: "Advanced Simulation OT/ICU Lab", desc: "Realistic medical environment simulations for training students in high-pressure emergency nursing situations." },
    { name: "Anatomy & Physiology Museum", desc: "Articulated skeletons, real-scale organ models, and informative charts to build a strong foundational knowledge." }
  ];

  return (
    <section id="academics" className="w-full bg-white py-16 px-6 md:py-24 border-t-4 border-orange-500 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-950 font-extrabold text-xs tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            Academic Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight mt-4 mb-6">
            Our Nursing <span className="text-orange-500">Curriculum</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
            Balaji College of Nursing madhe aamhi higher standards che education provide karto. Practical exposure ani moral values ya doghanvar hi aamcha bhaar aahe.
          </p>
        </div>

        {/* Navigation Tabs inside Component */}
        <div className="flex justify-center mb-12 border-b border-gray-100">
          <div className="flex space-x-2 md:space-x-4">
            <button
              onClick={() => setActiveTab('courses')}
              className={`pb-4 px-4 text-xs md:text-sm font-black tracking-wider uppercase border-b-4 transition-all duration-300 ${
                activeTab === 'courses' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-400 hover:text-blue-950'
              }`}
            >
              📋 Nursing Programs
            </button>
            <button
              onClick={() => setActiveTab('labs')}
              className={`pb-4 px-4 text-xs md:text-sm font-black tracking-wider uppercase border-b-4 transition-all duration-300 ${
                activeTab === 'labs' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-400 hover:text-blue-950'
              }`}
            >
              🔬 Infrastructure & Labs
            </button>
            <button
              onClick={() => setActiveTab('clinical')}
              className={`pb-4 px-4 text-xs md:text-sm font-black tracking-wider uppercase border-b-4 transition-all duration-300 ${
                activeTab === 'clinical' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-400 hover:text-blue-950'
              }`}
            >
              🏥 Clinical Postings
            </button>
          </div>
        </div>

        {/* Tab 1: Courses Content */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {nursingCourses.map((course, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black px-3 py-1 bg-orange-500 text-white rounded-md tracking-wider">{course.code}</span>
                    <span className="text-xs font-bold text-gray-400">🔥 Intake: {course.intake}</span>
                  </div>
                  <h3 className="text-xl font-black text-blue-950 mb-2">{course.title}</h3>
                  <p className="text-xs text-orange-500 font-extrabold mb-4">⏱️ Duration: {course.duration}</p>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed mb-6">{course.description}</p>
                </div>
                
                <div>
                  <div className="border-t border-slate-200/60 pt-4 mb-6">
                    <h4 className="text-xs font-black text-blue-950 tracking-wider uppercase mb-3">Key Highlights:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {course.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-[10px] text-gray-500 font-bold flex items-center gap-1.5">
                          <span className="text-green-500 text-xs">✓</span> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="#admission-form"
                    onClick={(e) => {
                      e.preventDefault();
                      const formBtn = document.querySelector('[href="#admission-form"]');
                      if (formBtn) formBtn.click();
                    }}
                    className="block w-full text-center bg-blue-950 hover:bg-orange-500 text-white font-extrabold text-[11px] py-3 rounded-xl uppercase tracking-widest transition-all duration-300 shadow-md shadow-blue-950/10"
                  >
                    Apply for this Course
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Labs Content */}
        {activeTab === 'labs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalLabs.map((lab, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100 flex gap-4 items-start shadow-md shadow-slate-100/30">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 font-black rounded-xl flex items-center justify-center text-lg shrink-0">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-base font-black text-blue-950 mb-1.5">{lab.name}</h3>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">{lab.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Clinical Postings */}
        {activeTab === 'clinical' && (
          <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 text-[180px] opacity-5 font-black select-none pointer-events-none translate-y-12">HOSPITAL</div>
            <div className="max-w-3xl">
              <span className="text-orange-400 font-black text-[10px] tracking-widest uppercase block mb-2">Real-world Practice</span>
              <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-4">Affiliated Live Multi-specialty Hospital Experience</h3>
              <p className="text-xs md:text-sm text-gray-300 font-medium leading-relaxed mb-6">
                Students cha performance improve vhava mhanun aamhi direct top-tier tie-up hospital setup dila aahe. Pratyek student la clinical hours compulsory purna karave lagtat jyat specialized areas cha samavesh hoto:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center">
                  <p className="text-lg font-black text-orange-400 mb-0.5">ICU</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Critical Care</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center">
                  <p className="text-lg font-black text-orange-400 mb-0.5">OT</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Operation Theater</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center">
                  <p className="text-lg font-black text-orange-400 mb-0.5">OPD</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Outpatient Clinics</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center">
                  <p className="text-lg font-black text-orange-400 mb-0.5">MNC</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Maternal Ward</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}