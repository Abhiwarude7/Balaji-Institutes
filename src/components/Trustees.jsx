import React from 'react';
import founderImg from '../assets/Admin&founder (2).jpeg';
import adminImg from '../assets/Admin (2).jpeg';
import OfficerImg from '../assets/Officer (2).jpeg';
export default function Trustees() {
  // विश्वस्तांचा डायनॅमिक डेटा
  const trusteesData = [
    {
     name: "Mr.Mahesh Bhika Wagh",
     role: "Founder President & Director",
     image: founderImg, // Use the variable name here, NO single quotes
     bio: "Education is a Leading Mentor With Over 12 Years Of Experience And the Founder of Balaji Institute..",
     linkedin: "#"
   },
    {
      name: "Deepali Mahesh Wagh",
      role: "Vice President & Academic Expert",
      image: adminImg,
      bio: "Former corporate leader and expert trustee who designs strategies for the educational advancement of Students.",
      linkedin: "#"
    },
    {
      name: "Ashwini Naresh Jadhav",
      role: "Admin Officer",
      image: OfficerImg,
      bio: "Significant contribution in managing the institute and establishing tie-ups with world-class corporate companies.",
      linkedin: "#"
    }
  ];

  return (
    <section id="trustees" className="py-20 bg-gradient-to-b from-slate-50 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* सेक्शन हेडिंग */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-orange-500 font-black tracking-widest text-xs uppercase bg-orange-50 px-4 py-1.5 rounded-full inline-block">
            Our Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-blue-950 tracking-tight">
            EXPERT TRUSTEES & MANAGEMENT
          </h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Our esteemed Board of Trustees, who have taken Balaji Institutes to the pinnacle of success and are committed to brightening the future of the students.
          </p>
        </div>

        {/* ट्रस्टी कार्ड्स ग्रिड */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trusteesData.map((trustee, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/40 overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              {/* इमेज कंटेनर */}
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src={trustee.image} 
                  alt={trustee.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a 
                    href={trustee.linkedin} 
                    className="w-9 h-9 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold shadow-md hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    in
                  </a>
                </div>
              </div>

              {/* माहितीचा भाग */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-blue-950 group-hover:text-orange-500 transition-colors">
                    {trustee.name}
                  </h3>
                  <p className="text-xs font-bold text-orange-500 tracking-wide mt-1">
                    {trustee.role}
                  </p>
                  <p className="text-gray-500 text-xs mt-4 leading-relaxed line-clamp-3">
                    {trustee.bio}
                  </p>
                </div>
                
                <div className="border-t border-slate-100 mt-6 pt-4 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Balaji Board</span>
                  <span className="text-xs font-extrabold text-blue-950 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Profile <span className="text-orange-500">→</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}