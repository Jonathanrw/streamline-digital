import React from 'react';
import auditHeroImage from './assets/audit-hero.png';
import systemBlueprint from './assets/system-blueprint.png';

const AuditSalesPage = ({ setIsAuditPage }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="text-2xl font-bold text-blue-600">Streamline Digital</div>
        <button onClick={() => setIsAuditPage(false)} className="text-gray-600 hover:text-blue-600 transition font-medium">
          &larr; Back to Home
        </button>
      </nav>

      {/* Hero Section */}
      <header className="px-8 py-20 max-w-7xl mx-auto text-center">
        <div className="inline-block bg-blue-100 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
          High-Ticket Operational Audit
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          The Operational <span className="text-blue-600">Edge</span>
        </h1>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Scaling your business from chaos to clarity. Stop losing 10+ hours a week to "admin drag" and start focusing on high-value work.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
          <a href="https://buy.stripe.com/bJebJ3cpA5iyczP78v5AQ01" className="bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-200">
            Secure Your Audit Slot – $499
          </a>
          <a href="/success-checklist.md" download className="bg-white border-2 border-gray-200 text-gray-700 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-50 transition">
            Download Free Checklist
          </a>
        </div>
        <img 
          src={auditHeroImage} 
          alt="Operational Transformation" 
          className="rounded-3xl shadow-2xl border border-gray-100 max-w-5xl mx-auto w-full"
        />
      </header>

      {/* The Problem */}
      <section className="bg-slate-50 py-24 px-8 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Hidden Cost of "System Drag"</h2>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Most solo-entrepreneurs aren't limited by their talent, but by their <span className="text-gray-900 font-bold italic">systems</span>. Every minute spent on manual admin is a minute stolen from high-value work.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-400 text-xs font-bold uppercase tracking-widest border-b border-gray-100">
                    <th className="pb-4">Area</th>
                    <th className="pb-4">The Symptom</th>
                    <th className="pb-4">The Annual Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="py-6 font-bold text-gray-900">Leads</td>
                    <td className="py-6 text-gray-600">Manual follow-ups & missed emails.</td>
                    <td className="py-6 text-red-600 font-mono font-bold">$10k+ in lost revenue</td>
                  </tr>
                  <tr>
                    <td className="py-6 font-bold text-gray-900">Delivery</td>
                    <td className="py-6 text-gray-600">Fragmented tools & "Search Time".</td>
                    <td className="py-6 text-red-600 font-mono font-bold">500+ hours lost</td>
                  </tr>
                  <tr>
                    <td className="py-6 font-bold text-gray-900">Admin</td>
                    <td className="py-6 text-gray-600">Manual invoicing & reporting.</td>
                    <td className="py-6 text-red-600 font-mono font-bold">$5k+ in admin debt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: ARC */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Signature Methodology</h2>
            <p className="text-xl text-gray-500">We don't just "organize" your business; we re-engineer it using the ARC Framework.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-8">A</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AUTOMATE</h3>
              <p className="text-gray-600 leading-relaxed">Remove the human element from repetitive, low-value tasks. Lead intake, payment notifications, and recurring reports should run while you sleep.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-8">R</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">REMOVE</h3>
              <p className="text-gray-600 leading-relaxed">Eliminate redundant tools and "Busy Work" that doesn't move the needle. Most productivity hacks are just distractions from deep work.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-8">C</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">CONSOLIDATE</h3>
              <p className="text-gray-600 leading-relaxed">Build a "Single Source of Truth" so you never ask "Where is that file?" again. One Notion OS to rule them all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Deliverable */}
      <section className="bg-gray-900 text-white py-24 px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold">What You'll Receive</h2>
            <p className="text-xl text-gray-400">This isn't just a consultation; it's a complete operational overhaul.</p>
            <ul className="space-y-6">
              {[
                { title: 'The Custom ARC Action Plan', desc: 'A step-by-step roadmap for your specific business.' },
                { title: 'The Tech Stack Audit', desc: 'Detailed recommendations on what to keep, kill, or migrate.' },
                { title: 'The ROI Projection', desc: 'Hard data on how many hours and dollars this will save you.' },
                { title: '1:1 Implementation Call', desc: '60 minutes to walk through your new system.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center text-[10px]">✓</div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <img 
              src={systemBlueprint} 
              alt="System Blueprint" 
              className="rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* The Roadmap */}
      <section className="py-24 px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">14 Days to Efficiency</h2>
            <p className="text-xl text-gray-500">We move fast so you can start scaling sooner.</p>
          </div>
          <div className="space-y-12">
            {[
              { day: 'Day 1', title: 'The Deep Dive', desc: 'Complete audit of current systems, tools, and bottlenecks.' },
              { day: 'Day 4', title: 'The Draft Blueprint', desc: 'Internal review of proposed system architecture.' },
              { day: 'Day 7', title: 'The Final Delivery', desc: 'Presentation of your custom ARC report and roadmap.' },
              { day: 'Day 10-14', title: 'Implementation', desc: 'Active setup and deployment of your new operating system.' }
            ].map((step, i) => (
              <div key={i} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  {i < 3 && <div className="w-1 h-full bg-blue-100 my-2"></div>}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{step.day}</h4>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The ROI */}
      <section className="py-24 px-8 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Your New Reality</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-black mb-2">10-15</div>
              <div className="text-blue-100 font-bold uppercase tracking-widest text-xs">Hours Recaptured / Week</div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-black mb-2">+40%</div>
              <div className="text-blue-100 font-bold uppercase tracking-widest text-xs">Capacity Increase</div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-black mb-2">$20k+</div>
              <div className="text-blue-100 font-bold uppercase tracking-widest text-xs">Annual Admin Savings</div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-black mb-2">+20%</div>
              <div className="text-blue-100 font-bold uppercase tracking-widest text-xs">Ad Spend Efficiency</div>
            </div>
          </div>
          <blockquote className="text-3xl font-bold italic mb-12">
            "This audit pays for itself in the first 30 days."
          </blockquote>
          <a href="https://buy.stripe.com/bJebJ3cpA5iyczP78v5AQ01" className="inline-block bg-white text-blue-600 px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-blue-50 transition shadow-2xl">
            Secure Your Audit Slot – $499
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-8 py-12 max-w-7xl mx-auto text-center text-gray-500">
        <p>&copy; 2026 Streamline Digital Assets. Built for Solopreneurs.</p>
      </footer>
    </div>
  );
};

export default AuditSalesPage;
