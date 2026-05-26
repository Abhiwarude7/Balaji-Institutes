import React, { useState } from 'react';
import { ref, push, remove } from 'firebase/database';
import { db } from '../firebase';

export default function AdminPanel({ institutes, news }) {
  const [instName, setInstName] = useState('');
  const [instImage, setInstImage] = useState('');
  const [newsTitle, setNewsTitle] = useState('');
  const [newsDate, setNewsDate] = useState('');

  // Push Institute Data to Firebase
  const handleAddInstitute = async (e) => {
    e.preventDefault();
    if (!instName || !instImage) return;

    try {
      const institutesRef = ref(db, 'institutes');
      await push(institutesRef, {
        name: instName,
        image: instImage,
        createdAt: new Date().toISOString()
      });
      setInstName('');
      setInstImage('');
      alert('Institute saved on Firebase Cloud!');
    } catch (err) {
      console.error(err);
    }
  };

  // Push News Data to Firebase
  const handleAddNews = async (e) => {
    e.preventDefault();
    if (!newsTitle || !newsDate) return;

    try {
      const newsRef = ref(db, 'news');
      await push(newsRef, {
        title: newsTitle,
        date: newsDate,
        publishedAt: new Date().toISOString()
      });
      setNewsTitle('');
      setNewsDate('');
      alert('News published live!');
    } catch (err) {
      console.error(err);
    }
  };

  // Delete Node from Firebase
  const handleDeleteInst = async (id) => {
    if (window.confirm('Are you sure you want to remove this entry?')) {
      const targetRef = ref(db, `institutes/${id}`);
      await remove(targetRef);
    }
  };

  const handleDeleteNews = async (id) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      const targetRef = ref(db, `news/${id}`);
      await remove(targetRef);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 font-sans">
      <h2 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-100 pb-3">
        ⚙️ Cloud Management System Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form 1 */}
        <form onSubmit={handleAddInstitute} className="space-y-4 bg-slate-50 p-5 rounded-xl border border-slate-100">
          <h3 className="font-extrabold text-xs tracking-widest text-amber-600 uppercase">1. Deploy Institute Card</h3>
          <div>
            <label className="block text-[11px] font-black text-slate-500 mb-1 tracking-wider">OFFICIAL COLLEGE NAME</label>
            <input type="text" value={instName} onChange={(e) => setInstName(e.target.value)} placeholder="Full technical title..." className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-slate-900" />
          </div>
          <div>
            <label className="block text-[11px] font-black text-slate-500 mb-1 tracking-wider">IMAGE URL LOCATION</label>
            <input type="text" value={instImage} onChange={(e) => setInstImage(e.target.value)} placeholder="https://..." className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-slate-900" />
          </div>
          <button type="submit" className="w-full bg-slate-900 text-white font-bold py-2.5 rounded-lg text-xs uppercase tracking-widest hover:bg-slate-950 shadow-sm">
            Save to Database
          </button>
        </form>

        {/* Form 2 */}
        <form onSubmit={handleAddNews} className="space-y-4 bg-slate-50 p-5 rounded-xl border border-slate-100">
          <h3 className="font-extrabold text-xs tracking-widest text-amber-600 uppercase">2. Broadcast Announcement</h3>
          <div>
            <label className="block text-[11px] font-black text-slate-500 mb-1 tracking-wider">HEADLINE TEXT</label>
            <input type="text" value={newsTitle} onChange={(e) => setNewsTitle(e.target.value)} placeholder="Enter details..." className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-slate-900" />
          </div>
          <div>
            <label className="block text-[11px] font-black text-slate-500 mb-1 tracking-wider">STAMP DATE</label>
            <input type="text" value={newsDate} onChange={(e) => setNewsDate(e.target.value)} placeholder="e.g. 22 May 2026" className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-slate-900" />
          </div>
          <button type="submit" className="w-full bg-amber-500 text-slate-950 font-black py-2.5 rounded-lg text-xs uppercase tracking-widest hover:bg-amber-600 shadow-sm">
            Publish Live
          </button>
        </form>
      </div>

      {/* Inventory Managers */}
      <div className="mt-8 border-t border-slate-100 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-black text-xs text-slate-900 uppercase tracking-wider mb-4">Active Institutes</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
            {institutes.map((inst) => (
              <div key={inst.id} className="flex justify-between items-center bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-xs font-bold text-slate-700">
                <span className="truncate max-w-[200px]">{inst.name}</span>
                <button onClick={() => handleDeleteInst(inst.id)} className="bg-rose-50 text-rose-600 px-2 py-1 rounded hover:bg-rose-600 hover:text-white font-extrabold transition-all">Remove</button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-xs text-slate-900 uppercase tracking-wider mb-4">Active News Broadcasts</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
            {news.map((n) => (
              <div key={n.id} className="flex justify-between items-center bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-xs font-bold text-slate-700">
                <span className="truncate max-w-[200px]">{n.title}</span>
                <button onClick={() => handleDeleteNews(n.id)} className="bg-rose-50 text-rose-600 px-2 py-1 rounded hover:bg-rose-600 hover:text-white font-extrabold transition-all">Remove</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}