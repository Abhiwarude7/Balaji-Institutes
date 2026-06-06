import React, { useState } from 'react';

export default function AdmissionForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'A.N.M (Assistant Nurse and Midwifery Course), Nashik', // Default value updated
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  // तुमची Google Apps Script ची Web App URL
  const GOOGLE_SCRIPT_URL ="https://script.google.com/macros/s/AKfycbzBbHfbO2MgI3XSWF2lek-QcwA8IWOeKkHFe-GwVSJHoKvt3UKO1hX_CmMIlZP9B3iA/exec";
  try {
    // आपण पुन्हा 'no-cors' वापरत आहोत जेणेकरून ब्राउझर एरर देणार नाही
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    // 'no-cors' मुळे गुगल डेटा स्वीकारेल आणि आपण इथे थेट सक्सेस मेसेज दाखवू शकतो
    //alert("अभिनंदन! तुमचा डेटा यशस्वीरित्या गुगल शीटमध्ये जमा झाला आहे. 👍");
    
    setSubmitted(true);
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      course: 'A.N.M (Assistant Nurse and Midwifery Course), Nashik', 
      message: '' 
    });

  } catch (error) {
    console.error("Error submitting form:", error);
    alert("काहीतरी चूक झाली, कृपया पुन्हा प्रयत्न करा.");
  }
  setLoading(false);
};

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border-t-4 border-orange-500 animate-in fade-in zoom-in-95 duration-200">
        
        {/* हेडर */}
        <div className="bg-blue-950 text-white px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-black tracking-wide">ADMISSION APPLICATION FORM</h2>
            <p className="text-[10px] text-gray-300 tracking-wider">Academic Year 2026-27</p>
          </div>
          <button onClick={onClose} className="text-xl hover:text-orange-500 transition-colors font-bold">✕</button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto animate-bounce">✓</div>
            <h3 className="text-xl font-bold text-blue-950">फॉर्म यशस्वीरित्या सबमिट झाला!</h3>
            <p className="text-xs text-gray-500">आमची टीम लवकरच तुमच्याशी संपर्क साधेल.</p>
            <button onClick={() => { setSubmitted(false); onClose(); }} className="bg-orange-500 text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-orange-600 transition-all shadow-md">बंद करा</button>
          </div>
        ) : (
          /* फॉर्म */
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">
            <div>
              <label className="block text-xs font-bold text-blue-950 mb-1">पूर्ण नाव (Full Name) *</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="तुमचे नाव टाका" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-blue-950 mb-1">ईमेल आयडी (Email) *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="example@mail.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-blue-950 mb-1">मोबाईल नंबर (Phone) *</label>
                <input type="tel" name="phone" required pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="10 अंकी नंबर" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-blue-950 mb-1">संस्था / कोर्स निवडा (Select Institute) *</label>
              <select name="course" value={formData.course} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium">
                <option value="A.N.M (Assistant Nurse and Midwifery Course), Nashik">A.N.M (Assistant Nurse and Midwifery Course)</option>
                <option value="O.T ASSISTANT (Operation Theatre Assistant Course), Nashik">O.T ASSISTANT (Operation Theatre Assistant Course)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-blue-950 mb-1">काही संदेश किंवा विचारपूस (Message/Query)</label>
              <textarea name="message" rows="3" value={formData.message} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none" placeholder="इथे लिहा..."></textarea>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all text-xs">रद्द करा</button>
              <button type="submit" disabled={loading} className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black hover:opacity-90 transition-all shadow-md text-xs disabled:opacity-50">
                {loading ? "सबमिट होत आहे..." : "APPLICATION SUBMIT"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}