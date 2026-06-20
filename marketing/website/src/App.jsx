import React, { useState } from 'react';
import heroHubImage from './assets/product-workflow-hub.png';
import agencyOSImage from './assets/agency-os.png';
import contentEngineImage from './assets/content-engine-pro.png';
import socialKitImage from './assets/social-kit-preview.png';
import auditServiceImage from './assets/service-workflow-audit.png';
import checklistV2Image from './assets/checklist-v2-preview.png';
import giftImage from './assets/gift-preview.png';

// Import Drop Previews
import drop01 from './assets/drop-01-content-engine.png';
import drop05 from './assets/drop-05-scaling-dashboard.png';
import drop12 from './assets/drop-12-email-marketing-engine.png';
import drop20 from './assets/drop-20-ai-workflow-optimization.png';

import VaultPortal from './VaultPortal';
import AuditSalesPage from './AuditSalesPage';
import Blog from './Blog';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGifting, setIsGifting] = useState(window.location.search.includes('gift=true'));
  
  // Member Portal state
  const [isVaultPortal, setIsVaultPortal] = useState(window.location.search.includes('vault=true'));

  // Audit Sales Page state
  const [isAuditPage, setIsAuditPage] = useState(window.location.search.includes('audit=true'));

  // Blog state
  const [isBlog, setIsBlog] = useState(window.location.search.includes('blog=true'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  if (isVaultPortal) return <VaultPortal setIsVaultPortal={setIsVaultPortal} />;
  if (isAuditPage) return <AuditSalesPage setIsAuditPage={setIsAuditPage} />;
  if (isBlog) return <Blog setActivePage={setIsBlog} />;

  return (
    <div className="min-h-screen w-full bg-[#0a0c10] text-gray-100 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto sticky top-0 bg-[#0a0c10]/80 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">S</div>
          <div className="text-xl font-bold tracking-tight">Streamline<span className="text-blue-500">Digital</span></div>
        </div>
        <div className="hidden md:flex space-x-8 font-medium items-center text-sm text-gray-400">
          <a href="#workflow-hub" className="hover:text-white transition">Workflow Hub</a>
          <a href="#vault" className="hover:text-white transition">The Vault</a>
          <a href="#audit" className="hover:text-white transition">Audit</a>
          <button onClick={() => { window.location.href = '/?blog=true'; }} className="hover:text-white transition">Blog</button>
          <button onClick={() => setIsVaultPortal(true)} className="hover:text-white transition">Member Portal</button>
          <a href="https://buy.stripe.com/cNi4gB9do3aqfM19gD5AQ00" className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-500 transition shadow-lg shadow-blue-600/20 font-bold">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-8 pt-20 pb-32 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        
        <div className="space-y-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            The Future of Solo Operations
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Scale your business <br/> without the <span className="text-blue-500">Chaos</span>.
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Stop losing 10+ hours a week to admin drag. We build high-fidelity Notion systems that run your business while you focus on deep work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#workflow-hub" className="bg-white text-[#0a0c10] px-10 py-5 rounded-2xl text-lg font-black hover:bg-gray-200 transition shadow-xl shadow-white/5">
              Explore the Hub
            </a>
            <a href="#lead-magnet" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/10 transition backdrop-blur-md">
              Free Success Checklist
            </a>
          </div>
          
          <div className="pt-8 flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0c10] bg-gray-800 flex items-center justify-center font-bold text-[10px]">U{i}</div>)}
            </div>
            <span>Trusted by 500+ solopreneurs and agencies</span>
          </div>
        </div>

        <div className="mt-20 relative max-w-5xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img 
            src={heroHubImage} 
            alt="Solopreneur Workflow Hub" 
            className="relative rounded-3xl shadow-2xl border border-white/10"
          />
        </div>
      </section>

      {/* Flagship Product: Workflow Hub */}
      <section id="workflow-hub" className="px-8 py-32 bg-gradient-to-b from-[#0a0c10] to-[#0f1218] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <div className="text-blue-500 font-bold uppercase tracking-widest text-sm">Flagship Product</div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Solopreneur <br/><span className="text-blue-500">Workflow Hub</span></h2>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              The complete operating system for the modern solo founder. Reclaim your time by automating your administrative drag with a unified dashboard.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Full CRM & Lead Pipeline', desc: 'Track every inquiry from first touch to final payment.' },
                { title: 'Project & Deadline Tracker', desc: 'A high-fidelity board for managing all client deliverables.' },
                { title: 'Automated Finance Engine', desc: 'Log expenses and track revenue margins automatically.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 font-bold text-lg">✓</div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <a href="https://buy.stripe.com/cNi4gB9do3aqfM19gD5AQ00" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-blue-500 transition shadow-xl shadow-blue-600/20">
                Get Workflow Hub – $49
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>
            <img 
              src={heroHubImage} 
              alt="Workflow Hub Screenshot" 
              className="rounded-2xl shadow-2xl border border-white/10 transform md:rotate-2 hover:rotate-0 transition duration-700"
            />
          </div>
        </div>
      </section>

      {/* Content Engine Pro */}
      <section id="content-engine" className="px-8 py-32 bg-gradient-to-b from-[#0f1218] to-[#0a0c10] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-20">
          <div className="flex-1 space-y-8">
            <div className="text-blue-500 font-bold uppercase tracking-widest text-sm">Starter Offer</div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Content <br/><span className="text-blue-500">Engine Pro</span></h2>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              The high-velocity system to batch 30 days of high-converting content in 4 hours. Write once, distribute everywhere.
            </p>
            <ul className="grid grid-cols-1 gap-4">
              {[
                { title: '365-Day Content Calendar', desc: 'Never wonder what to post again.' },
                { title: 'Idea Bank & Repurposing Engine', desc: 'One anchor piece becomes 10+ social posts.' },
                { title: 'Platform Best Practices', desc: 'Optimized formats for every channel.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500 font-bold text-sm">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </ul>
            <div className="pt-4">
              <a href="https://buy.stripe.com/6oE9Cj8hw9hk5ZSfZ5AQ02" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-blue-500 transition shadow-xl shadow-blue-600/20">
                Get Content Engine Pro – $29
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] -z-10"></div>
            <img 
              src={contentEngineImage} 
              alt="Content Engine Pro" 
              className="rounded-2xl shadow-2xl border border-white/10 transform md:-rotate-2 hover:rotate-0 transition duration-700"
            />
          </div>
        </div>
      </section>

      {/* The Vault Section */}
      <section id="vault" className="px-8 py-32 bg-[#0a0c10] relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="text-indigo-500 font-bold uppercase tracking-widest text-sm italic">The Subscription</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight italic">The <span className="text-indigo-500 underline decoration-indigo-500/50">Vault</span></h2>
            <p className="text-xl text-gray-400">
              Unlimited access to every template we've ever built, plus <span className="text-white font-bold italic">monthly Strategy Drops</span> that keep your business ahead of the curve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'The Content Engine', img: drop01, tag: 'Marketing' },
              { title: 'Scaling Dashboard', img: drop05, tag: 'Systems' },
              { title: 'Email Engine', img: drop12, tag: 'Sales' },
              { title: 'AI Optimization', img: drop20, tag: 'AI' }
            ].map((drop, i) => (
              <div key={i} className="group bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition duration-500">
                <div className="aspect-square overflow-hidden bg-gray-900">
                  <img src={drop.img} alt={drop.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-tighter text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">{drop.tag}</span>
                  <h4 className="font-bold text-white">{drop.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-8 pt-8 text-center">
            <div className="flex gap-4">
              <a href="https://buy.stripe.com/7sY7sN89k6mCbvLeAX5AQ02" className="bg-indigo-600 text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-indigo-500 transition shadow-xl shadow-indigo-600/20">
                Join The Vault – $19/mo
              </a>
              <button onClick={() => setIsVaultPortal(true)} className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/10 transition backdrop-blur-md">
                Member Login
              </button>
            </div>
            <p className="text-gray-500 text-sm font-medium">Cancel anytime. 24+ Strategy Drops included today.</p>
          </div>
        </div>
      </section>

      {/* High-Ticket Audit */}
      <section id="audit" className="px-8 py-32 bg-white text-gray-900 rounded-[3rem] mx-8 mb-32 relative overflow-hidden shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 relative z-10">
          <div className="flex-1 space-y-8">
            <div className="text-blue-600 font-bold uppercase tracking-widest text-sm italic">High-Ticket Consulting</div>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">The 10x <br/><span className="text-blue-600">Workflow Audit</span></h2>
            <p className="text-2xl text-gray-600 leading-relaxed italic">
              Stop guessing. Let us audit your operational chaos and deliver a custom **ARC Strategy** to reclaim 10+ hours of your week.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a href="https://buy.stripe.com/bJebJ3cpA5iyczP78v5AQ01" className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-blue-700 transition shadow-xl shadow-blue-600/40 text-center">
                Secure Your Audit – $499
              </a>
              <button onClick={() => setIsAuditPage(true)} className="bg-gray-100 text-gray-600 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-gray-200 transition text-center">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-10 bg-blue-600/5 rounded-full blur-[100px] animate-pulse"></div>
            <img 
              src={auditServiceImage} 
              alt="Workflow Audit Preview" 
              className="relative rounded-3xl shadow-2xl border border-gray-100 transform md:-rotate-3 hover:rotate-0 transition duration-700"
            />
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-[150px] opacity-50"></div>
      </section>

      {/* Lead Magnet Section */}
      <section id="lead-magnet" className="px-8 py-32 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-500/20">
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight">Quantify your <br/> "Admin Drag" Today.</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Download the **v2 Success Checklist** (Notion Edition). Includes our built-in Revenue Leak Calculator to see exactly what your chaos is costing you.
            </p>
            
            <div className="max-w-xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/20 mb-10">
              <img src={checklistV2Image} alt="Notion Checklist Preview" className="w-full h-auto" />
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your primary email" 
                  required
                  className="flex-1 px-8 py-5 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" disabled={isSubmitting} className="bg-white text-blue-600 px-8 py-5 rounded-2xl font-black hover:bg-blue-50 transition shadow-lg disabled:opacity-50">
                  {isSubmitting ? 'Sending...' : 'Get Instant Access'}
                </button>
              </form>
            ) : (
              <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-white/30 inline-block">
                <h3 className="text-2xl font-black mb-4">Check your inbox! 🚀</h3>
                <a href="/success-checklist.md" download className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition">Download Checklist Directly</a>
              </div>
            )}
            <p className="text-blue-200 text-sm font-medium">Join 2,000+ others already using this tool.</p>
          </div>
          
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -ml-32 -mt-32"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/30 rounded-full blur-[100px] -mr-32 -mb-32"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-8 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-xs">S</div>
              <div className="text-lg font-bold tracking-tight">Streamline<span className="text-blue-500">Digital</span></div>
            </div>
            <p className="text-gray-500 max-w-sm">The operating system for modern solopreneurs. High-fidelity systems for high-velocity founders.</p>
          </div>
          <div className="space-y-4 text-sm">
            <h5 className="font-bold text-white">Products</h5>
            <a href="#workflow-hub" className="block text-gray-500 hover:text-white transition">Workflow Hub</a>
            <a href="#vault" className="block text-gray-500 hover:text-white transition">The Vault</a>
            <a href="#audit" className="block text-gray-500 hover:text-white transition">Consulting</a>
          </div>
          <div className="space-y-4 text-sm">
            <h5 className="font-bold text-white">Members</h5>
            <button onClick={() => setIsVaultPortal(true)} className="block text-gray-500 hover:text-white transition text-left">Login</button>
            <a href="https://streamline.lemonsqueezy.com/affiliates" className="block text-gray-500 hover:text-white transition">Partners</a>
            <a href="#" className="block text-gray-500 hover:text-white transition">Support</a>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/5 text-gray-600 text-[10px] font-medium uppercase tracking-[0.2em]">
          &copy; 2026 Streamline Digital Assets. Built for Scale.
        </div>
      </footer>
    </div>
  );
}

export default App;
