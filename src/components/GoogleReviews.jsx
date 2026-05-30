import React, { useEffect } from 'react';

export default function GoogleReviews() {
  useEffect(() => {
    // 🚀 गुगलचे लाईव्ह रिव्ह्यूज आणण्यासाठी डायनॅमिक स्क्रिप्ट लोड करणे
    const script = document.createElement('script');
    
    // ⚠️ महत्वाचे: खालील 'src' मध्ये तुझ्या विजेटचा खऱ्या स्क्रिप्टचा URL पेस्ट कर!
    script.src = "https://apps.elfsight.com/p/platform.js"; 
    
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // कॉम्पोनेंट अनमाउंट झाल्यावर स्क्रिप्ट काढून टाकणे
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* हेडर सेक्शन */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-black tracking-tight">
              <span className="text-blue-600">G</span>
              <span className="text-red-600">o</span>
              <span className="text-amber-500">o</span>
              <span className="text-blue-600">g</span>
              <span className="text-emerald-600">l</span>
              <span className="text-red-600">e</span>
            </span>
            <h2 className="text-2xl font-black text-blue-950 uppercase tracking-widest">
               Reviews
            </h2>
          </div>
 
        </div>

        {/* 🎯 विजेट कंटेनर */}
        {/* तुझ्या विजेट प्रोव्हाइडरने (Elfsight/Trustindex) दिलेला मुख्य <div> इथे टाक */}
        <div className="elfsight-app-YOUR-UNIQUE-WIDGET-ID"></div>
        {/* जर तू Trustindex वापरत असशील तर तिथे <div className="ti-widget" data-id="xxx"></div> असेल, तो इथे टाक */}

      </div>
    </section>
  );
}