import React from 'react';
import { featuresData } from '../data';

export default function KeyFeatures() {
  return (
    <div className="bg-gray-50 border-t border-b border-gray-200 py-12 px-4 mt-12 w-full">
      <div className="max-w-6xl mx-auto">
        
        {/* हेडिंग सेक्शन */}
        <h3 className="text-center font-black text-blue-950 text-lg tracking-widest mb-10 uppercase">
          Key Features of Balaji Institutes
        </h3>
        
        {/* 3 कॉलम ग्रिड लेआउट (md:grid-cols-3 मुळे ३ डेटा प्रॉपर दिसेल) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center items-start text-center">
          {featuresData.map((feat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center p-4 text-center w-full max-w-[280px] hover:transform hover:-translate-y-1 transition-transform duration-300"
            >
              {/* आयकॉन - प्रॉपर सेंटर */}
              <div className="text-4xl mb-4 flex items-center justify-center w-full text-center">
                {feat.icon}
              </div>
              
              {/* टायटल - प्रॉper सेंटर */}
              <h4 className="font-bold text-base text-blue-950 mb-2 w-full text-center">
                {feat.title}
              </h4>
              
              {/* डिस्क्रिप्शन - ३ च्या लेआउटनुसार रुंदी वाढवली आहे */}
              <p className="text-xs text-gray-500 w-full text-center mx-auto leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}