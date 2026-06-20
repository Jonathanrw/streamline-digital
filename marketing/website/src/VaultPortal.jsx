import React, { useState } from 'react';
import EmailEngineDashboard from './EmailEngineDashboard';

const VaultPortal = ({ setIsVaultPortal }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeDropId, setActiveDropId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const drops = [
    { id: 24, title: 'Content Agency OS', category: 'Systems', color: 'indigo', desc: 'Standardize the creative pipeline for content agencies scaling to multiple clients and editors.', files: ['strategy.md', 'user-guide.md', 'client-communication-templates.md', 'client-onboarding-sop.md', 'pre-export-checklist.md', 'notion-architecture.md'] },
    { id: 23, title: 'Performance Creative Lab', category: 'Marketing', color: 'orange', desc: 'High-fidelity system for batching, testing, and optimizing ad creative without a design team.', files: ['strategy.md', 'user-guide.md', 'hook-formulas.md', 'ad-copy-templates.md', 'testing-checklist.md', 'notion-architecture.md'] },
    { id: 22, title: 'Digital Product Lab', category: 'Strategy', color: 'amber', desc: 'Framework for validating, building, and launching mini-products in 14 days or less.', files: ['strategy.md', 'user-guide.md', 'database.md', 'blitz-launch-protocol.md', 'validation-scoring-matrix.md'] },
    { id: 21, title: 'Feedback & Referral Loop', category: 'Sales', color: 'green', desc: 'Automated system for capturing testimonials and turning clients into a referral engine.', files: ['strategy.md', 'user-guide.md', 'database.md', 'feedback-request-templates.md', 'referral-partner-agreement.md'] },
    { id: 20, title: 'AI-Powered Workflow', category: 'Systems', color: 'cyan', desc: 'Integrate AI into your business OS for 3x content velocity and brand consistency.', files: ['strategy.md', 'user-guide.md', 'database.md'] },
    { id: 19, title: 'Collaborative Systems', category: 'Services', color: 'teal', desc: 'Bridge the gap between solo operations and a managed freelance team.', files: ['strategy.md', 'user-guide.md', 'database.md'] },
    { id: 18, title: 'The Paid Growth Blueprint', category: 'Marketing', color: 'orange', desc: 'Transition from organic-only to scalable, predictable paid customer acquisition.', files: ['strategy.md', 'user-guide.md', 'growth-specs.md'] },
    { id: 17, title: 'Agency Operations v2', category: 'Systems', color: 'indigo', desc: 'Structural integrity for scaling from solopreneur to agency owner.', files: ['strategy.md', 'user-guide.md', 'agency-specs.md'] },
    { id: 16, title: 'Outreach Automation Hub', category: 'Sales', color: 'blue', desc: 'Scale sales efforts without sacrificing personalization.', files: ['strategy.md', 'user-guide.md', 'hub-specs.md'] },
    { id: 15, title: 'Financial Freedom Dashboard', category: 'Finance', color: 'emerald', desc: 'Actionable insights into profitability, tax liability, and long-term wealth.', files: ['strategy.md', 'user-guide.md', 'dashboard-specs.md'] },
    { id: 14, title: 'Personal Brand OS', category: 'Marketing', color: 'purple', desc: 'Centralize your online presence, content production, and monetization.', files: ['strategy.md', 'user-guide.md', 'os-specs.md'] },
    { id: 13, title: 'Client Portal v2', category: 'Services', color: 'emerald', desc: 'Premium client workspace with project timelines and deliverable approvals.', files: ['strategy.md', 'user-guide.md', 'portal-specs.md'] },
    { id: 12, title: 'Email Marketing Engine', category: 'Marketing', color: 'blue', desc: 'Standardize your email marketing with high-converting templates.', files: ['strategy.md', 'automation-specs.md', 'copy-templates.md'] },
    { id: 11, title: 'Recurring Revenue Blueprint', category: 'Strategy', color: 'emerald', desc: 'Transition from one-off projects to predictable monthly retainers.', files: ['dashboard-guide.md', 'onboarding-guide.md', 'retainer-agreement.md'] },
    { id: 10, title: 'Ops Wiki & SOP Hub', category: 'Systems', color: 'indigo', desc: 'Centralized internal knowledge and standardized operations.', files: ['ops-wiki-specs.md'] },
    { id: 9, title: 'Advanced Lead Gen (v2)', category: 'Sales', color: 'purple', desc: 'Weighted Multi-Factor Scoring and attribution tracking.', files: ['lead-gen-v2.md'] },
    { id: 8, title: 'Social Media Automation', category: 'Marketing', color: 'blue', desc: 'Integrated multi-platform presence management.', files: ['social-automation.md'] },
    { id: 7, title: 'Product Launch OS', category: 'Strategy', color: 'emerald', desc: 'Standardized digital product launch execution.', files: ['launch-os.md'] },
    { id: 6, title: 'Advanced CRM', category: 'Sales', color: 'orange', desc: 'Relationship management and referral tracking.', files: ['crm-specs.md'] },
    { id: 5, title: 'Scaling Dashboard', category: 'Strategy', color: 'pink', desc: 'Strategic business tracking and OKRs.', files: ['metrics-tracker.md'] },
    { id: 4, title: 'The Social Media Echo', category: 'Marketing', color: 'pink', desc: 'Semi-automated multi-platform content distribution with AI repurposing.', files: ['README.md', 'platform-master.md', 'log-and-prompts.md', 'dashboard.md'] },
    { id: 3, title: 'The Lead Gen Machine', category: 'Sales', color: 'purple', desc: 'Automated lead capture and scoring system with budget/timeline/fit scoring.', files: ['README.md', 'inquiries-db.md', 'service-catalog.md', 'dashboard.md'] },
    { id: 2, title: 'The Automation Audit', category: 'Systems', color: 'indigo', desc: 'Identify, document, and eliminate administrative overhead with the ARC framework.', files: ['guide.md'] },
    { id: 1, title: 'The Content Engine', category: 'Marketing', color: 'blue', desc: 'High-volume content creation and repurposing workflow for consistent publishing.', files: ['guide.md'] },
  ];

  const handleOpenDrop = (id) => {
    setActiveDropId(id);
    setActiveTab('drop-view');
  };

  const renderDashboard = () => (
    <>
      <section className="mb-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-800 text-white p-8 md:p-12 shadow-xl">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                      <div className="md:w-2/3">
                        <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">New Drop #24</span>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">Content Agency OS</h3>
                        <p className="text-indigo-100 text-lg mb-6">Standardize the creative pipeline for content agencies scaling to multiple clients and editors. Includes the Production Pipeline, Client Portal, and Capacity Hub.</p>
                        <div className="flex space-x-4">
                          <button onClick={() => handleOpenDrop(24)} className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-bold hover:bg-indigo-50 transition">Open Dashboard</button>
                          <button onClick={() => { setActiveTab('library'); setSelectedFile('strategy.md'); setActiveDropId(24); }} className="border border-white/30 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition">View Strategy</button>
                        </div>
                      </div>
                      <div className="hidden md:block w-1/3 text-right">
                        <i className="fas fa-building text-9xl text-white/10"></i>
                      </div>
                    </div>
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-900 rounded-full blur-3xl opacity-50"></div>
                  </div>
      </section>

      {/* Quick Links */}
      <section className="mb-12">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Member Onboarding</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4 text-xl">
              <i className="fas fa-map"></i>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Vault Roadmap</h4>
            <p className="text-gray-500 text-sm mb-4">See the upcoming drops and what we're building next in the pipeline.</p>
            <button onClick={() => setActiveTab('roadmap')} className="text-indigo-600 text-sm font-bold mt-auto text-left">View Roadmap &rarr;</button>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4 text-xl">
              <i className="fas fa-toolbox"></i>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">System Audit</h4>
            <p className="text-gray-500 text-sm mb-4">Identify bottlenecks in your business before deploying templates.</p>
            <button onClick={() => setActiveTab('audit')} className="text-indigo-600 text-sm font-bold mt-auto text-left">Start Audit &rarr;</button>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4 text-xl">
              <i className="fas fa-comments"></i>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Join the Community</h4>
            <p className="text-gray-500 text-sm mb-4">Get support and network with other solopreneurs scaling with systems.</p>
            <a href="#" className="text-indigo-600 text-sm font-bold mt-auto">Connect on Discord &rarr;</a>
          </div>
        </div>
      </section>

      {/* Drops Directory */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800">Strategy Drops Library</h3>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Filter</button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Sort: Newest</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drops.map((drop) => (
            <div key={drop.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:-translate-y-1 transition-all duration-300">
              <div className={`h-32 bg-${drop.color}-500 p-6 flex items-end`}>
                <span className="text-white font-bold text-lg">#{drop.id.toString().padStart(2, '0')}: {drop.title}</span>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-4">{drop.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{drop.category}</span>
                  <button onClick={() => handleOpenDrop(drop.id)} className="text-indigo-600 font-bold text-sm">Open Drop</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  const renderRoadmap = () => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <button onClick={() => setActiveTab('dashboard')} className="text-indigo-600 font-bold mb-8 flex items-center">
        <i className="fas fa-arrow-left mr-2"></i> Back to Dashboard
      </button>
      <h2 className="text-3xl font-bold mb-6">9-Month Strategic Roadmap</h2>
      <div className="space-y-8">
        {[
          { month: 1, drop: 18, title: 'The Paid Growth Blueprint', focus: 'Customer Acquisition', desc: 'Transition from organic-only to scalable, predictable paid acquisition.' },
          { month: 2, drop: 17, title: 'Agency Operations v2', focus: 'Scaling & Leadership', desc: 'Structural integrity for transitioning from solopreneur to agency owner.' },
          { month: 3, drop: 16, title: 'Outreach Automation Hub', focus: 'Sales & Outbound', desc: 'Systematize your outbound sales process with automated workflows.' },
          { month: 4, drop: 15, title: 'Financial Freedom Dashboard', focus: 'Profitability', desc: 'A comprehensive financial tracking system for solopreneurs.' },
          { month: 5, drop: 14, title: 'Personal Brand OS', focus: 'Growth & Networking', desc: 'Centralize your personal brand growth and relationship management.' },
          { month: 6, drop: 13, title: 'Client Portal v2', focus: 'Service Delivery', desc: 'An upgraded, high-fidelity workspace for your clients.' },
          { month: 7, drop: 12, title: 'Email Marketing Engine', focus: 'Conversion & Nurture', desc: 'Standardize your email marketing with high-converting sequence templates.' },
          { month: 8, drop: 11, title: 'Recurring Revenue Blueprint', focus: 'Retainers', desc: 'Transition from one-off projects to predictable monthly retainers.' },
          { month: 9, drop: 10, title: 'Ops Wiki & SOP Hub', focus: 'Documentation', desc: 'Centralized internal knowledge and standardized operations.' },
        ].map((item) => (
          <div key={item.month} className="flex gap-6 border-l-4 border-indigo-500 pl-6 py-2">
            <div className="flex-1">
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Month {item.month} • Drop #{item.drop}</span>
              <h4 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h4>
              <p className="text-gray-500 font-medium text-sm mb-2">Focus: {item.focus}</p>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAudit = () => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <button onClick={() => setActiveTab('dashboard')} className="text-indigo-600 font-bold mb-8 flex items-center">
        <i className="fas fa-arrow-left mr-2"></i> Back to Dashboard
      </button>
      <h2 className="text-3xl font-bold mb-4">The 'Admin Drag' System Audit</h2>
      <p className="text-gray-600 mb-8">Identify the exact operational bottlenecks that are stealing 10+ hours of your week.</p>
      
      <div className="space-y-6 mb-12">
        <h3 className="text-xl font-bold text-gray-900">Part 1: The 'Admin Drag' Scorecard</h3>
        <p className="text-sm text-gray-500 mb-4 font-medium italic">Rate yourself 1-5 (1 = Never, 5 = Always)</p>
        {[
          'Information Hunt: I spend 15+ mins/day looking for info.',
          'Repeating Instructions: I explain the same process multiple times.',
          'Inbox Overwhelm: My email is my primary To-Do list.',
          'Manual Invoicing: I manually create invoices for every project.',
          'No Central Brain: If I was offline for a week, business would stop.',
          'Lead Lag: It takes 24+ hours to respond to a new inquiry.',
          'Content Chaos: I create content on the day it needs to go live.',
        ].map((q, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-800 font-medium">{idx + 1}. {q}</span>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(n => (
                <button key={n} className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition">
                  {n}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 p-6 rounded-xl">
        <h4 className="font-bold text-indigo-900 mb-2">Part 2: The ARC Framework</h4>
        <p className="text-sm text-indigo-700 mb-4">Apply **Automate, Remove, Centralize** to your top 5 repetitive tasks.</p>
        <table className="w-full text-left">
          <thead>
            <tr className="text-indigo-900 text-xs font-bold uppercase tracking-wider">
              <th className="pb-3">Task</th>
              <th className="pb-3">Frequency</th>
              <th className="pb-3">ARC Strategy</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-t border-indigo-100">
              <td className="py-3">Onboarding VA</td>
              <td className="py-3">Monthly</td>
              <td className="py-3 font-bold">Centralize (Drop #10)</td>
            </tr>
            <tr className="border-t border-indigo-100">
              <td className="py-3">Posting to X</td>
              <td className="py-3">Daily</td>
              <td className="py-3 font-bold">Automate (Drop #4)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderLibrary = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Asset Library</h2>
        <div className="flex gap-4">
          <input type="text" placeholder="Search assets..." className="px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-50 bg-slate-50">
                    <h3 className="font-bold text-gray-800 flex items-center">
                      <i className="fas fa-folder-open mr-2 text-indigo-500"></i> Drop #24: Content Agency OS
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {['strategy.md', 'user-guide.md', 'client-communication-templates.md', 'client-onboarding-sop.md', 'pre-export-checklist.md', 'notion-architecture.md'].map(file => (
                      <button
                        key={file}
                        onClick={() => { setActiveDropId(24); setSelectedFile(file); }}
                        className={`w-full text-left p-4 hover:bg-indigo-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-gray-600'}`}
                      >
                        <span className="flex items-center">
                          <i className="far fa-file-alt mr-3"></i>
                          {file}
                        </span>
                        <i className="fas fa-chevron-right text-xs opacity-30"></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-50 bg-slate-50">
                    <h3 className="font-bold text-gray-800 flex items-center">
                      <i className="fas fa-folder-open mr-2 text-orange-500"></i> Drop #23: Performance Creative Lab
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {['strategy.md', 'user-guide.md', 'hook-formulas.md', 'ad-copy-templates.md', 'testing-checklist.md', 'notion-architecture.md'].map(file => (
                      <button
                        key={file}
                        onClick={() => { setActiveDropId(23); setSelectedFile(file); }}
                        className={`w-full text-left p-4 hover:bg-orange-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-orange-50 text-orange-700 font-bold' : 'text-gray-600'}`}
                      >
                        <span className="flex items-center">
                          <i className="far fa-file-alt mr-3"></i>
                          {file}
                        </span>
                        <i className="fas fa-chevron-right text-xs opacity-30"></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-50 bg-slate-50">
                    <h3 className="font-bold text-gray-800 flex items-center">
                      <i className="fas fa-folder-open mr-2 text-amber-500"></i> Drop #22: Digital Product Lab
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {['strategy.md', 'user-guide.md', 'database.md', 'blitz-launch-protocol.md', 'validation-scoring-matrix.md'].map(file => (
                      <button
                        key={file}
                        onClick={() => { setActiveDropId(22); setSelectedFile(file); }}
                        className={`w-full text-left p-4 hover:bg-amber-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-amber-50 text-amber-700 font-bold' : 'text-gray-600'}`}
                      >
                        <span className="flex items-center">
                          <i className="far fa-file-alt mr-3"></i>
                          {file}
                        </span>
                        <i className="fas fa-chevron-right text-xs opacity-30"></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-50 bg-slate-50">
                    <h3 className="font-bold text-gray-800 flex items-center">
                      <i className="fas fa-folder-open mr-2 text-green-500"></i> Drop #21: Feedback & Referral Loop
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {['strategy.md', 'user-guide.md', 'database.md', 'feedback-request-templates.md', 'referral-partner-agreement.md'].map(file => (
                      <button
                        key={file}
                        onClick={() => { setActiveDropId(21); setSelectedFile(file); }}
                        className={`w-full text-left p-4 hover:bg-green-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-green-50 text-green-700 font-bold' : 'text-gray-600'}`}
                      >
                        <span className="flex items-center">
                          <i className="far fa-file-alt mr-3"></i>
                          {file}
                        </span>
                        <i className="fas fa-chevron-right text-xs opacity-30"></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-50 bg-slate-50">
                    <h3 className="font-bold text-gray-800 flex items-center">
                      <i className="fas fa-folder-open mr-2 text-cyan-500"></i> Drop #20: AI-Powered Workflow
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {['strategy.md', 'user-guide.md', 'database.md'].map(file => (
                      <button
                        key={file}
                        onClick={() => { setActiveDropId(20); setSelectedFile(file); }}
                        className={`w-full text-left p-4 hover:bg-cyan-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-cyan-50 text-cyan-700 font-bold' : 'text-gray-600'}`}
                      >
                        <span className="flex items-center">
                          <i className="far fa-file-alt mr-3"></i>
                          {file}
                        </span>
                        <i className="fas fa-chevron-right text-xs opacity-30"></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-50 bg-slate-50">
                    <h3 className="font-bold text-gray-800 flex items-center">
                      <i className="fas fa-folder-open mr-2 text-teal-500"></i> Drop #19: Collaborative Systems
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {['strategy.md', 'user-guide.md', 'database.md'].map(file => (
                      <button
                        key={file}
                        onClick={() => { setActiveDropId(19); setSelectedFile(file); }}
                        className={`w-full text-left p-4 hover:bg-teal-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-teal-50 text-teal-700 font-bold' : 'text-gray-600'}`}
                      >
                        <span className="flex items-center">
                          <i className="far fa-file-alt mr-3"></i>
                          {file}
                        </span>
                        <i className="fas fa-chevron-right text-xs opacity-30"></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-50 bg-slate-50">
                    <h3 className="font-bold text-gray-800 flex items-center">
                      <i className="fas fa-folder-open mr-2 text-orange-500"></i> Drop #18: The Paid Growth Blueprint
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {['strategy.md', 'user-guide.md', 'growth-specs.md'].map(file => (
                                          <button
                                            key={file}
                                            onClick={() => { setActiveDropId(18); setSelectedFile(file); }}
                        className={`w-full text-left p-4 hover:bg-orange-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-orange-50 text-orange-700 font-bold' : 'text-gray-600'}`}
                      >
                        <span className="flex items-center">
                          <i className={`far ${file.endsWith('.md') ? 'fa-file-alt' : 'fa-file-code'} mr-3`}></i>
                          {file}
                        </span>
                        <i className="fas fa-chevron-right text-xs opacity-30"></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-50 bg-slate-50">
                    <h3 className="font-bold text-gray-800 flex items-center">
                      <i className="fas fa-folder-open mr-2 text-indigo-500"></i> Drop #17: Agency Operations v2
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {['strategy.md', 'user-guide.md', 'agency-specs.md'].map(file => (
                                          <button
                                            key={file}
                                            onClick={() => { setActiveDropId(17); setSelectedFile(file); }}
                                            className={`w-full text-left p-4 hover:bg-indigo-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-gray-600'}`}
                                          >
                                            <span className="flex items-center">
                                              <i className="far fa-file-alt mr-3"></i>
                                              {file}
                                            </span>
                                            <i className="fas fa-chevron-right text-xs opacity-30"></i>
                                          </button>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                      <div className="p-6 border-b border-gray-50 bg-slate-50">
                                        <h3 className="font-bold text-gray-800 flex items-center">
                                          <i className="fas fa-folder-open mr-2 text-blue-500"></i> Drop #16: Outreach Automation Hub
                                        </h3>
                                      </div>
                                      <div className="divide-y divide-gray-50">
                                        {['strategy.md', 'user-guide.md', 'hub-specs.md'].map(file => (
                                          <button
                                            key={file}
                                            onClick={() => { setActiveDropId(16); setSelectedFile(file); }}
                                            className={`w-full text-left p-4 hover:bg-blue-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-blue-50 text-blue-700 font-bold' : 'text-gray-600'}`}
                                          >
                                            <span className="flex items-center">
                                              <i className="far fa-file-alt mr-3"></i>
                                              {file}
                                            </span>
                                            <i className="fas fa-chevron-right text-xs opacity-30"></i>
                                          </button>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                      <div className="p-6 border-b border-gray-50 bg-slate-50">
                                        <h3 className="font-bold text-gray-800 flex items-center">
                                          <i className="fas fa-folder-open mr-2 text-emerald-500"></i> Drop #15: Financial Freedom Dashboard
                                        </h3>
                                      </div>
                                      <div className="divide-y divide-gray-50">
                                        {['strategy.md', 'user-guide.md', 'dashboard-specs.md'].map(file => (
                                          <button
                                            key={file}
                                            onClick={() => { setActiveDropId(15); setSelectedFile(file); }}
                                            className={`w-full text-left p-4 hover:bg-emerald-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-gray-600'}`}
                                          >
                                            <span className="flex items-center">
                                              <i className="far fa-file-alt mr-3"></i>
                                              {file}
                                            </span>
                                            <i className="fas fa-chevron-right text-xs opacity-30"></i>
                                          </button>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                      <div className="p-6 border-b border-gray-50 bg-slate-50">
                                        <h3 className="font-bold text-gray-800 flex items-center">
                                          <i className="fas fa-folder-open mr-2 text-purple-500"></i> Drop #14: Personal Brand OS
                                        </h3>
                                      </div>
                                      <div className="divide-y divide-gray-50">
                                        {['strategy.md', 'user-guide.md', 'os-specs.md'].map(file => (
                                          <button
                                            key={file}
                                            onClick={() => { setActiveDropId(14); setSelectedFile(file); }}
                                            className={`w-full text-left p-4 hover:bg-purple-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-purple-50 text-purple-700 font-bold' : 'text-gray-600'}`}
                                          >
                                            <span className="flex items-center">
                                              <i className="far fa-file-alt mr-3"></i>
                                              {file}
                                            </span>
                                            <i className="fas fa-chevron-right text-xs opacity-30"></i>
                                          </button>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                      <div className="p-6 border-b border-gray-50 bg-slate-50">
                                        <h3 className="font-bold text-gray-800 flex items-center">
                                          <i className="fas fa-folder-open mr-2 text-emerald-500"></i> Drop #13: Client Portal v2
                                        </h3>
                                      </div>
                                      <div className="divide-y divide-gray-50">
                                        {['strategy.md', 'user-guide.md', 'portal-specs.md'].map(file => (
                                          <button
                                            key={file}
                                            onClick={() => { setActiveDropId(13); setSelectedFile(file); }}
                                            className={`w-full text-left p-4 hover:bg-emerald-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-gray-600'}`}
                                          >
                                            <span className="flex items-center">
                                              <i className="far fa-file-alt mr-3"></i>
                                              {file}
                                            </span>
                                            <i className="fas fa-chevron-right text-xs opacity-30"></i>
                                          </button>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                      <div className="p-6 border-b border-gray-50 bg-slate-50">
                                        <h3 className="font-bold text-gray-800 flex items-center">
                                          <i className="fas fa-folder-open mr-2 text-indigo-500"></i> Drop #12: Email Marketing Engine
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {['strategy.md', 'automation-specs.md', 'copy-templates.md'].map(file => (
                      <button
                        key={file}
                        onClick={() => { setActiveDropId(12); setSelectedFile(file); }}
                        className={`w-full text-left p-4 hover:bg-indigo-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-gray-600'}`}
                      >
                        <span className="flex items-center">
                          <i className="far fa-file-alt mr-3"></i>
                          {file}
                        </span>
                        <i className="fas fa-chevron-right text-xs opacity-30"></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-50 bg-slate-50">
                    <h3 className="font-bold text-gray-800 flex items-center">
                      <i className="fas fa-folder-open mr-2 text-pink-500"></i> Drop #4: The Social Media Echo
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {['README.md', 'platform-master.md', 'log-and-prompts.md', 'dashboard.md'].map(file => (
                      <button
                        key={file}
                        onClick={() => { setActiveDropId(4); setSelectedFile(file); }}
                        className={`w-full text-left p-4 hover:bg-pink-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-pink-50 text-pink-700 font-bold' : 'text-gray-600'}`}
                      >
                        <span className="flex items-center">
                          <i className="far fa-file-alt mr-3"></i>
                          {file}
                        </span>
                        <i className="fas fa-chevron-right text-xs opacity-30"></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-50 bg-slate-50">
                    <h3 className="font-bold text-gray-800 flex items-center">
                      <i className="fas fa-folder-open mr-2 text-purple-500"></i> Drop #3: The Lead Gen Machine
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {['README.md', 'inquiries-db.md', 'service-catalog.md', 'dashboard.md'].map(file => (
                      <button
                        key={file}
                        onClick={() => { setActiveDropId(3); setSelectedFile(file); }}
                        className={`w-full text-left p-4 hover:bg-purple-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-purple-50 text-purple-700 font-bold' : 'text-gray-600'}`}
                      >
                        <span className="flex items-center">
                          <i className="far fa-file-alt mr-3"></i>
                          {file}
                        </span>
                        <i className="fas fa-chevron-right text-xs opacity-30"></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-50 bg-slate-50">
                    <h3 className="font-bold text-gray-800 flex items-center">
                      <i className="fas fa-folder-open mr-2 text-indigo-500"></i> Drop #2: The Automation Audit
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {['guide.md'].map(file => (
                      <button
                        key={file}
                        onClick={() => { setActiveDropId(2); setSelectedFile(file); }}
                        className={`w-full text-left p-4 hover:bg-indigo-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-gray-600'}`}
                      >
                        <span className="flex items-center">
                          <i className="far fa-file-alt mr-3"></i>
                          {file}
                        </span>
                        <i className="fas fa-chevron-right text-xs opacity-30"></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-50 bg-slate-50">
                    <h3 className="font-bold text-gray-800 flex items-center">
                      <i className="fas fa-folder-open mr-2 text-blue-500"></i> Drop #1: The Content Engine
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {['guide.md'].map(file => (
                      <button
                        key={file}
                        onClick={() => { setActiveDropId(1); setSelectedFile(file); }}
                        className={`w-full text-left p-4 hover:bg-blue-50 transition flex items-center justify-between ${selectedFile === file ? 'bg-blue-50 text-blue-700 font-bold' : 'text-gray-600'}`}
                      >
                        <span className="flex items-center">
                          <i className="far fa-file-alt mr-3"></i>
                          {file}
                        </span>
                        <i className="fas fa-chevron-right text-xs opacity-30"></i>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

                      {selectedFile && (
        <div className="bg-gray-900 rounded-2xl p-8 text-indigo-300 font-mono text-sm shadow-2xl relative overflow-hidden">
          <div className="flex justify-between items-center mb-6 text-gray-400 font-sans">
            <span>Viewing: <span className="text-white">{selectedFile}</span></span>
            <button onClick={() => setSelectedFile(null)} className="text-gray-500 hover:text-white">Close</button>
          </div>
          <div className="space-y-4 whitespace-pre-wrap">
            {selectedFile === 'strategy.md' && activeDropId === 24 && `
# Content Agency OS - Strategic Blueprint
## Value Proposition
Standardize the entire creative pipeline for content agencies - from script to final delivery - with high margins and zero context leakage.

### Core Modules:
1. Infinite Production Pipeline - Multi-stage content tracking with automated status
2. Client Collaboration Portal - White-labeled client review workspace
3. Agency Capacity Hub - Real-time editor workload visibility
4. Profit Margin Tracker - Automated project profitability
            `}
            {selectedFile === 'strategy.md' && activeDropId === 23 && `
# Performance Creative Lab - Strategic Blueprint
## Value Proposition
High-fidelity system for batching, testing, and optimizing ad creative without needing a full-time design team.

### Core Modules:
1. The Hook Factory - 100+ proven ad hook formulas
2. Creative Asset Manager - Centralized hub for ad assets
3. The 3-Step Blitz Testing Framework - $5/day testing workflow
4. Performance Matrix Dashboard - Creative metrics tracking
            `}
            {selectedFile === 'strategy.md' && activeDropId === 22 && `
# Digital Product Lab - Strategic Blueprint
## Value Proposition
High-velocity framework for validating, building, and launching mini-products in 14 days.

### Core Modules:
1. The Validation Engine - Score ideas by client pain points and search volume
2. The Build Sprint Hub - Rapid product creation templates
3. Product Asset Library - Graphics, checkout links, delivery emails
4. The Blitz Launch Protocol - 7-day promotional sequence
            `}
            {selectedFile === 'strategy.md' && activeDropId === 21 && `
# Feedback & Referral Loop - Strategic Blueprint
## Value Proposition
Automated system for capturing testimonials and turning satisfied clients into a referral engine.

### Core Modules:
1. The Feedback Automator - Triggered requests at peak satisfaction moments
2. Testimonial Library - Centralized database for social proof
3. Referral Partner Portal - Track partners, codes, and impact
4. The Incentive Engine - Rewards for referrals
            `}
            {selectedFile === 'strategy.md' && activeDropId === 20 && `
# AI-Powered Workflow - Strategic Blueprint
## Value Proposition
Move beyond simple chat-based AI interaction to an automated layer within your business OS.

### Core Modules:
1. AI Research & Synthesis Engine - Centralized competitive insights
2. Style Injector & Formatting Factory - Brand voice automation
3. AI Prompt Library - Version-controlled system prompts
4. Performance Analysis Dashboard - AI-driven business analytics
            `}
            {selectedFile === 'strategy.md' && activeDropId === 19 && `
# Collaborative Systems - Strategic Blueprint
## Value Proposition
Bridge the gap between solo operations and a managed freelance team without administrative bloat.

### Core Modules:
1. The Handover Protocol - Standardized context packaging for contractors
2. Shared Team Dashboard - Personal Workbench views for collaborators
3. Resource Allocation Tracker - Real-time team capacity visibility
4. Client Transparency Sync - Automated client-facing progress reports
            `}
            {selectedFile === 'strategy.md' && activeDropId === 18 && `
# Paid Growth Blueprint - Strategic Blueprint
## Value Proposition
The Paid Growth Blueprint is a high-performance system for solopreneurs to transition from organic-only growth to scalable, predictable customer acquisition. It demystifies the technical complexity of ad platforms by providing a unified workflow for creative testing, ROI tracking, and audience refinement.

### Core Modules:
1. The Ad Creative Bank - Centralized repository for hooks, body copy, and visual assets
2. Dynamic ROI Calculator - Real-time tracker for ROAS, CAC, and LTV/CAC ratios
3. Audience Targeting Matrix - Structured map of Interest-based, Lookalike, and Retargeting audiences
4. Campaign Optimization Log - Decision-making framework for when to scale, kill, or pivot ads
            `}
            {selectedFile === 'strategy.md' && activeDropId === 17 && `
# Agency Operations v2 - Strategic Blueprint
## Value Proposition
The transition from solopreneur to agency owner is the most dangerous phase of business growth. Agency Operations v2 provides the structural integrity needed to scale from "doing the work" to "owning the system."

### Core Modules:
1. Team Performance Dashboard - Real-time visibility into contractor/employee utilization
2. Advanced SOP Multi-User Engine - Permission-based standard operating procedure hub
3. Profit-Sharing & Incentive Models - Financial templates for Performance-Based Pay
4. Capacity Planner - Forecasting tool to determine when to hire next
            `}
            {selectedFile === 'strategy.md' && activeDropId === 16 && `
# Outreach Automation Hub - Strategic Blueprint
## Value Proposition
The Outreach Automation Hub is a high-performance system for solopreneurs to scale their sales efforts without sacrificing personalization. It replaces messy spreadsheets and forgotten follow-ups with a standardized, automated workflow.

### Core Modules:
1. Cold Outreach Workflows - Standardized processes for identifying and contacting high-value leads
2. Follow-up Sequence Templates - Multi-touch follow-up templates (email, LinkedIn)
3. Outreach CRM & Lead Tracker - Database for managing the outreach pipeline
4. Conversion Dashboard - Real-time view of outreach volume and response rates
            `}
            {selectedFile === 'strategy.md' && activeDropId === 15 && `
# Financial Freedom Dashboard - Strategic Blueprint
## Value Proposition
The Financial Freedom Dashboard is a comprehensive financial operating system for solopreneurs and digital creators. It moves beyond basic bookkeeping to provide actionable insights into profitability, tax liability, and long-term wealth building.

### Core Modules:
1. Real-Time P&L - Automated tracker for revenue and expenses
2. Tax Savings Calculator - Dynamic tool that estimates quarterly tax payments
3. Investment Goal Planner - Projection tool for retirement and long-term savings
4. Subscription Audit - Dashboard to track and optimize recurring costs
            `}
            {selectedFile === 'strategy.md' && activeDropId === 14 && `
# Personal Brand OS - Strategic Blueprint
## Value Proposition
The Personal Brand OS is a comprehensive system designed for creators and solopreneurs to manage their online presence, content production, and monetization in one unified workspace.

### Core Modules:
1. PKM (Personal Knowledge Management) - A "Second Brain" to capture ideas and research
2. Authority Content Engine - Workflow for planning, drafting, and scheduling content
3. The Bio-Link Hub - High-converting Notion-based landing page
4. Sponsorship & Revenue Tracker - CRM for managing brand deals and outreach
            `}
            {selectedFile === 'strategy.md' && activeDropId === 13 && `
# Client Portal v2 - Strategy & Philosophy
## Overview
The Client Portal v2 is designed to elevate the solopreneur-client relationship from "email chains and scattered links" to a premium, centralized experience.

### Core Modules:
1. Automated Project Timeline - Dynamic visual representation of project phases and milestones
2. Deliverable Approval Engine - Structured way for clients to review and approve deliverables
3. Secure Asset Hub - Centralized repository for all final files and shared documents
4. Communication Log - History of key decisions and meeting notes
            `}
            {selectedFile === 'strategy.md' && !activeDropId && `
# Vault Drop #12: The Email Marketing Engine
## Overview
The Email Marketing Engine is designed to move solopreneurs from "randomly sending emails" to a systematic, automated conversion machine.

### Core Pillars:
1. Indoctrination (Welcome)
2. Profit Recovery (Abandoned Cart)
3. Curator's Newsletter
4. Lead Magnet Delivery
            `}
            {selectedFile.endsWith('-specs.md') && activeDropId === 18 && `
# Technical Specs: Paid Growth Blueprint
## Core Metrics & Formulas
### A. ROI Calculator Logic
- ROAS = Revenue / Ad Spend
- CAC = Total Ad Spend / Number of Customers
- LTV/CAC Ratio = Customer Lifetime Value / CAC

### B. Scale Triggers
- Green (ROAS 3.0+ for 7 days): Increase budget by 10-15%
- Yellow (ROAS 2.0-3.0): Optimize creative before scaling
- Red (ROAS < 2.0): Kill campaign or pivot audience
            `}
            {selectedFile.endsWith('-specs.md') && activeDropId === 17 && `
# Technical Specs: Agency Operations v2
## Core Database Schemas
### A. Team Performance
- Utilization % = Billable Hours / Available Hours
- Billable Threshold: 70-80% optimal range

### B. Capacity Planner Logic
- Green (0-70%): Room to sell
- Yellow (71-85%): Start looking for talent
- Red (86%+): At risk of burnout - do not take on new work
            `}
            {selectedFile.endsWith('-specs.md') && activeDropId === 16 && `
# Technical Specs: Outreach Automation Hub
## Lead Scoring & Pipeline Logic
### A. Priority Score Formula
- Priority = (Fit Score × 0.4) + (Intent Score × 0.3) + (Value Score × 0.3)
- Max Score: 100

### B. Follow-up Sequence Triggers
- Status: "Initial Touch" → Delay 2 days → "Follow-up 1"
- Status: "Follow-up 1" → Delay 4 days → "Follow-up 2"
- Status: "Follow-up 3" → Delay 7 days → "Nurture Queue"
            `}
            {selectedFile.endsWith('-specs.md') && activeDropId === 15 && `
# Technical Specs: Financial Freedom Dashboard
## Database Schemas & Formulas
### A. P&L Automation
- Net Profit = Total Revenue - Total Expenses
- Net Margin % = (Net Profit / Total Revenue) × 100

### B. Tax Reserve Calculation
- Quarterly Reserve = (YTD Net Profit × Tax Rate %) / 4
- Status: Met if Reserve Balance >= Quarterly Reserve
            `}
            {selectedFile.endsWith('-specs.md') && activeDropId === 14 && `
# Technical Specs: Personal Brand OS
## System Architecture
### A. PKM Workflow
- Inbox → Processed → Archived (Weekly Review Cycle)
- Relation: PKM notes link to Content Calendar posts

### B. Sponsorship Pipeline
- Identified → Contacted → Pitching → Negotiating → Signed
- Conversion Target: 10% pitch-to-sign rate
            `}
            {selectedFile.endsWith('-specs.md') && activeDropId === 13 && `
# Technical Specs: Client Portal v2
## Database Schemas
### A. Project Timeline Schema
- Properties: Phase Name, Start Date, Due Date, Status, Client, Linked Deliverables
- Views: Gantt Timeline, Client Dashboard, Kanban Board

### B. Deliverable Approval Workflow
- Draft → Under Review → Changes Requested → Approved
- Client notification triggers on "Under Review" status
            `}
            {!selectedFile.endsWith('-specs.md') && selectedFile.includes('guide') && activeDropId === 18 && `
# Paid Growth Blueprint - User Guide
## Getting Started
1. Fill Your Ad Creative Bank - Dump 10 different hooks for your primary offer
2. Set Up the ROI Calculator - Spend 5 min/day inputting spend, leads, and sales
3. Map Your Targeting Matrix - Set up Cold, Warm, and Retargeting layers
4. Run a Blitz Test - $5/day across 5 creative variations for 48 hours
            `}
            {!selectedFile.endsWith('-specs.md') && selectedFile.includes('guide') && activeDropId === 17 && `
# Agency Operations v2 - User Guide
## Getting Started
1. Set Up Multi-User SOP Engine - Migrate and assign roles
2. Launch Team Performance Dashboard - Track utilization and billable hours
3. Implement Profit-Sharing - Start with 5-10% of gross profit
4. Use Capacity Planner - Monitor the Traffic Light Rule
            `}
            {!selectedFile.endsWith('-specs.md') && selectedFile.includes('guide') && activeDropId === 16 && `
# Outreach Automation Hub - User Guide
## Getting Started
1. Set Up Your Lead Tracker - Import leads and assign scores
2. Use Follow-up Sequence Templates - Personalize and schedule touchpoints
3. Apply Lead Scoring - Focus on High Value Leads first
4. Analyze Conversion Dashboard - Review response rates weekly
            `}
            {!selectedFile.endsWith('-specs.md') && selectedFile.includes('guide') && activeDropId === 15 && `
# Financial Freedom Dashboard - User Guide
## Getting Started
1. Set Up the Transactions Hub - Import bank/Stripe transactions
2. Manage Tax Reserves - Set your tax rate and track savings
3. Plan for Wealth - Define goals and automate contributions
4. Conduct Subscription Audit - Review recurring costs monthly
            `}
            {!selectedFile.endsWith('-specs.md') && selectedFile.includes('guide') && activeDropId === 14 && `
# Personal Brand OS - User Guide
## Getting Started
1. Set Up Your Second Brain (PKM) - Capture ideas and do weekly reviews
2. Launch Your Bio-Link Hub - Replace generic link-in-bio tools
3. Master the Content Engine - Build a batch creation workflow
4. Scale Sponsorships - Pitch 10 brands using the Sponsorship CRM
            `}
            {!selectedFile.endsWith('-specs.md') && selectedFile.includes('guide') && activeDropId === 13 && `
# Client Portal v2 - User Guide
## Getting Started
1. Set Up Notion Workspace - Duplicate the databases and template
2. Customize for a New Client - Define project phases and deadlines
3. Manage Deliverables - Add, assign due dates, and notify clients
4. Client Interaction - Share portal with View/Comment access
            `}
            {selectedFile.includes('guide') && !activeDropId && `
# Implementation Guide
Follow these steps to deploy this system in your Notion workspace.
1. Duplicate the template.
2. Connect your databases.
3. Set up your views.
            `}
            {selectedFile === 'automation-specs.md' && `
# Technical Specs: Email Marketing Engine
## Sequence Logic & Triggers
### A. Welcome Sequence
- Trigger: Tag added: Status: Lead
- Delay 0: Send Email 1 (Delivery)
- Delay 1 Day: Send Email 2 (Origin)
            `}
            {!['strategy.md', 'automation-specs.md'].includes(selectedFile) && !selectedFile.includes('guide') && !selectedFile.endsWith('-specs.md') && `
// Asset Content Preview
// This file contains the standardized templates and logic 
// for Drop #${selectedFile.includes('retainer') ? '11' : (activeDropId || '12')}.
// Please download the full package from the dashboard.
            `}
          </div>
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <i className="fas fa-vault text-9xl"></i>
          </div>
        </div>
      )}
    </div>
  );

  const renderDropView = () => {
    const drop = drops.find(d => d.id === activeDropId);
    if (!drop) {
      return (
        <div className="bg-white p-12 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Drop #{activeDropId} not found.</h2>
          <button onClick={() => setActiveTab('dashboard')} className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold">Back to Dashboard</button>
        </div>
      );
    }
    if (activeDropId === 12) {
      return (
        <div className="space-y-6">
          <button onClick={() => setActiveTab('dashboard')} className="text-indigo-600 font-bold flex items-center">
            <i className="fas fa-arrow-left mr-2"></i> Back to Dashboard
          </button>
          <EmailEngineDashboard />
        </div>
      );
    }
    // For drops 1-4 and 13-18, show a rich detail view
    const dropColors = {
      24: { bg: 'from-indigo-600 to-purple-800', icon: 'fa-building', accent: 'indigo' },
      23: { bg: 'from-orange-500 to-red-600', icon: 'fa-lightbulb', accent: 'orange' },
      22: { bg: 'from-amber-600 to-orange-700', icon: 'fa-flask', accent: 'amber' },
      21: { bg: 'from-green-600 to-emerald-800', icon: 'fa-star', accent: 'green' },
      20: { bg: 'from-cyan-600 to-teal-700', icon: 'fa-robot', accent: 'cyan' },
      19: { bg: 'from-teal-600 to-teal-800', icon: 'fa-people-group', accent: 'teal' },
      18: { bg: 'from-orange-600 to-red-700', icon: 'fa-chart-line', accent: 'orange' },
      17: { bg: 'from-indigo-600 to-indigo-800', icon: 'fa-building', accent: 'indigo' },
      16: { bg: 'from-blue-600 to-blue-800', icon: 'fa-share-alt', accent: 'blue' },
      15: { bg: 'from-emerald-600 to-green-800', icon: 'fa-coins', accent: 'emerald' },
      14: { bg: 'from-purple-600 to-purple-800', icon: 'fa-user-tie', accent: 'purple' },
      13: { bg: 'from-emerald-600 to-teal-800', icon: 'fa-folder-open', accent: 'emerald' },
      4: { bg: 'from-pink-500 to-rose-700', icon: 'fa-share-nodes', accent: 'pink' },
      3: { bg: 'from-purple-600 to-purple-800', icon: 'fa-users-gear', accent: 'purple' },
      2: { bg: 'from-indigo-600 to-indigo-800', icon: 'fa-robot', accent: 'indigo' },
      1: { bg: 'from-blue-600 to-blue-800', icon: 'fa-pen-nib', accent: 'blue' },
    };
    const colors = dropColors[activeDropId] || { bg: 'from-indigo-600 to-indigo-800', icon: 'fa-box', accent: 'indigo' };
    return (
      <div className="space-y-6">
        <button onClick={() => setActiveTab('dashboard')} className="text-indigo-600 font-bold flex items-center">
          <i className="fas fa-arrow-left mr-2"></i> Back to Dashboard
        </button>
        
        {/* Hero Card */}
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${colors.bg} text-white p-8 shadow-xl`}>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">Drop #{activeDropId}</span>
            <h3 className="text-3xl font-bold mb-2">{drop.title}</h3>
            <p className="text-white/80 text-lg max-w-2xl">{drop.desc}</p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
          <i className={`fas ${colors.icon} absolute right-8 top-8 text-6xl text-white/10`}></i>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => { setActiveTab('library'); setSelectedFile('strategy.md'); setActiveDropId(activeDropId); }}
            className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex items-center gap-3"
          >
            <div className={`w-10 h-10 bg-${colors.accent}-100 text-${colors.accent}-600 rounded-lg flex items-center justify-center`}>
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-800">View Strategy</p>
              <p className="text-xs text-gray-400">Open the strategic blueprint</p>
            </div>
          </button>
          <button 
            onClick={() => { setActiveTab('library'); setSelectedFile('user-guide.md'); setActiveDropId(activeDropId); }}
            className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex items-center gap-3"
          >
            <div className={`w-10 h-10 bg-${colors.accent}-100 text-${colors.accent}-600 rounded-lg flex items-center justify-center`}>
              <i className="fas fa-book"></i>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-800">User Guide</p>
              <p className="text-xs text-gray-400">Step-by-step implementation</p>
            </div>
          </button>
          <button 
            onClick={() => setActiveTab('library')}
            className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex items-center gap-3"
          >
            <div className={`w-10 h-10 bg-${colors.accent}-100 text-${colors.accent}-600 rounded-lg flex items-center justify-center`}>
              <i className="fas fa-folder-open"></i>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-800">Asset Library</p>
              <p className="text-xs text-gray-400">Browse all drop files</p>
            </div>
          </button>
        </div>

        {/* Files Section */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50">
            <h3 className="font-bold text-gray-800 text-lg">Drop Assets</h3>
            <p className="text-sm text-gray-500">Click any file to preview its contents</p>
          </div>
          <div className="divide-y">
            {drop.files.map(file => (
              <button 
                key={file}
                onClick={() => { setSelectedFile(file); setActiveDropId(activeDropId); }}
                className={`w-full text-left p-4 hover:bg-${colors.accent}-50 transition flex items-center justify-between ${selectedFile === file ? `bg-${colors.accent}-50 text-${colors.accent}-700 font-bold` : 'text-gray-600'}`}
              >
                <span className="flex items-center">
                  <i className="far fa-file-alt mr-3"></i>
                  {file}
                </span>
                <i className="fas fa-chevron-right text-xs opacity-30"></i>
              </button>
            ))}
          </div>
        </div>

        {/* File Preview */}
        {selectedFile && (
          <div className="bg-gray-900 rounded-2xl p-8 text-indigo-300 font-mono text-sm shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-6 text-gray-400 font-sans">
              <span>Viewing: <span className="text-white">{selectedFile}</span></span>
              <button onClick={() => setSelectedFile(null)} className="text-gray-500 hover:text-white">Close</button>
            </div>
            <div className="space-y-4 whitespace-pre-wrap">
              {selectedFile === 'strategy.md' && activeDropId === 24 && `
# Content Agency OS - Strategic Blueprint
## Value Proposition
Standardize the entire creative pipeline for content agencies - from script to final delivery.

### Core Modules:
1. Infinite Production Pipeline
2. Client Collaboration Portal
3. Agency Capacity Hub
4. Profit Margin Tracker
              `}
              {selectedFile === 'strategy.md' && activeDropId === 23 && `
# Performance Creative Lab - Strategic Blueprint
## Value Proposition
High-fidelity system for batching, testing, and optimizing ad creative without a design team.

### Core Modules:
1. The Hook Factory
2. Creative Asset Manager
3. The 3-Step Blitz Testing Framework
4. Performance Matrix Dashboard
              `}
              {selectedFile === 'strategy.md' && activeDropId === 22 && `
# Digital Product Lab - Strategic Blueprint
## Value Proposition
High-velocity framework for validating, building, and launching mini-products in 14 days.

### Core Modules:
1. The Validation Engine
2. The Build Sprint Hub
3. Product Asset Library
4. The Blitz Launch Protocol
              `}
              {selectedFile === 'strategy.md' && activeDropId === 21 && `
# Feedback & Referral Loop - Strategic Blueprint
## Value Proposition
Automated system for capturing testimonials and turning satisfied clients into a referral engine.

### Core Modules:
1. The Feedback Automator
2. Testimonial Library
3. Referral Partner Portal
4. The Incentive Engine
              `}
              {selectedFile === 'strategy.md' && activeDropId === 20 && `
# AI-Powered Workflow - Strategic Blueprint
## Value Proposition
Move beyond simple chat-based AI interaction to an automated layer within your business OS.

### Core Modules:
1. AI Research & Synthesis Engine
2. Style Injector & Formatting Factory
3. AI Prompt Library
4. Performance Analysis Dashboard
              `}
              {selectedFile === 'strategy.md' && activeDropId === 19 && `
# Collaborative Systems - Strategic Blueprint
## Value Proposition
Bridge the gap between solo operations and a managed freelance team without administrative bloat.

### Core Modules:
1. The Handover Protocol
2. Shared Team Dashboard
3. Resource Allocation Tracker
4. Client Transparency Sync
              `}
              {selectedFile === 'strategy.md' && activeDropId === 18 && `
# Paid Growth Blueprint - Strategic Blueprint
## Value Proposition
The Paid Growth Blueprint is a high-performance system for solopreneurs to transition from organic-only growth to scalable, predictable customer acquisition.

### Core Modules:
1. The Ad Creative Bank
2. Dynamic ROI Calculator
3. Audience Targeting Matrix
4. Campaign Optimization Log
              `}
              {selectedFile === 'strategy.md' && activeDropId === 17 && `
# Agency Operations v2 - Strategic Blueprint
## Value Proposition
The transition from solopreneur to agency owner is the most dangerous phase of business growth. Agency Operations v2 provides the structural integrity needed to scale.

### Core Modules:
1. Team Performance Dashboard
2. Advanced SOP Multi-User Engine
3. Profit-Sharing & Incentive Models
4. Capacity Planner
              `}
              {selectedFile === 'strategy.md' && activeDropId === 16 && `
# Outreach Automation Hub - Strategic Blueprint
## Value Proposition
Scale your sales efforts without sacrificing personalization. Replaces messy spreadsheets with standardized, automated workflows.

### Core Modules:
1. Cold Outreach Workflows
2. Follow-up Sequence Templates
3. Outreach CRM & Lead Tracker
4. Conversion Dashboard
              `}
              {selectedFile === 'strategy.md' && activeDropId === 15 && `
# Financial Freedom Dashboard - Strategic Blueprint
## Value Proposition
Beyond basic bookkeeping. Provides actionable insights into profitability, tax liability, and long-term wealth building.

### Core Modules:
1. Real-Time P&L
2. Tax Savings Calculator
3. Investment Goal Planner
4. Subscription Audit
              `}
              {selectedFile === 'strategy.md' && activeDropId === 14 && `
# Personal Brand OS - Strategic Blueprint
## Value Proposition
Manage your online presence, content production, and monetization in one unified workspace.

### Core Modules:
1. PKM (Personal Knowledge Management)
2. Authority Content Engine
3. The Bio-Link Hub
4. Sponsorship & Revenue Tracker
              `}
              {selectedFile === 'strategy.md' && activeDropId === 13 && `
# Client Portal v2 - Strategy & Philosophy
## Overview
Elevate the solopreneur-client relationship from "email chains and scattered links" to a premium, centralized experience.

### Core Modules:
1. Automated Project Timeline
2. Deliverable Approval Engine
3. Secure Asset Hub
4. Communication Log
              `}
              {selectedFile.includes('guide') && activeDropId === 18 && `
# Paid Growth Blueprint - User Guide
1. Fill Your Ad Creative Bank
2. Set Up the ROI Calculator
3. Map Your Targeting Matrix
4. Run a Blitz Test
              `}
              {selectedFile.includes('guide') && activeDropId === 17 && `
# Agency Operations v2 - User Guide
1. Set Up Multi-User SOP Engine
2. Launch Team Performance Dashboard
3. Implement Profit-Sharing
4. Use the Capacity Planner
              `}
              {selectedFile.includes('guide') && activeDropId === 16 && `
# Outreach Automation Hub - User Guide
1. Set Up Your Lead Tracker
2. Use Follow-up Sequence Templates
3. Apply Lead Scoring
4. Analyze Your Conversion Dashboard
              `}
              {selectedFile.includes('guide') && activeDropId === 15 && `
# Financial Freedom Dashboard - User Guide
1. Set Up the Transactions Hub
2. Manage Your Tax Reserves
3. Plan for Wealth
4. Conduct a Subscription Audit
              `}
              {selectedFile.includes('guide') && activeDropId === 14 && `
# Personal Brand OS - User Guide
1. Set Up Your Second Brain (PKM)
2. Launch Your Bio-Link Hub
3. Master the Content Engine
4. Scale Sponsorships
              `}
              {selectedFile.includes('guide') && activeDropId === 13 && `
# Client Portal v2 - User Guide
1. Set Up Notion Workspace
2. Customize for a New Client
3. Manage Deliverables
4. Client Interaction
              `}
              {selectedFile.endsWith('-specs.md') && activeDropId === 18 && `
# Technical Specs: Paid Growth Blueprint
ROAS = Revenue / Ad Spend
CAC = Total Ad Spend / Number of Customers
Scale Triggers: Green (ROAS 3.0+), Yellow (2.0-3.0), Red (< 2.0)
              `}
              {selectedFile.endsWith('-specs.md') && activeDropId === 17 && `
# Technical Specs: Agency Operations v2
Utilization % = Billable Hours / Available Hours
Optimal: 70-80%
Capacity: Green (0-70%), Yellow (71-85%), Red (86%+)
              `}
              {selectedFile.endsWith('-specs.md') && activeDropId === 16 && `
# Technical Specs: Outreach Automation Hub
Priority = (Fit × 0.4) + (Intent × 0.3) + (Value × 0.3)
Follow-up: Initial → 2d → F1 → 4d → F2 → 7d → Nurture
              `}
              {selectedFile.endsWith('-specs.md') && activeDropId === 15 && `
# Technical Specs: Financial Freedom Dashboard
Net Profit = Total Revenue - Total Expenses
Net Margin % = (Net Profit / Revenue) × 100
Quarterly Reserve = (YTD Net Profit × Rate %) / 4
              `}
              {selectedFile.endsWith('-specs.md') && activeDropId === 14 && `
# Technical Specs: Personal Brand OS
PKM Workflow: Inbox → Processed → Archived
Sponsorship Pipeline: Identified → Contacted → Pitching ��� Signed
              `}
              {selectedFile.endsWith('-specs.md') && activeDropId === 13 && `
# Technical Specs: Client Portal v2
Project Timeline: Phase Name, Start Date, Due Date, Status
Deliverable Workflow: Draft → Under Review → Approved
              `}
              {selectedFile === 'automation-specs.md' && `
# Technical Specs: Email Marketing Engine
Trigger: Tag added: Status: Lead
Delay 0: Send Email 1 (Delivery)
Delay 1 Day: Send Email 2 (Origin)
              `}
              {selectedFile === 'strategy.md' && activeDropId === 24 && `
# Content Agency OS - Strategic Blueprint
## Value Proposition
Standardize the entire creative pipeline for content agencies - from script to final delivery - with high margins.

### Core Modules:
1. Infinite Production Pipeline - Multi-stage content tracking
2. Client Collaboration Portal - White-labeled review workspace
3. Agency Capacity Hub - Real-time workload visibility
4. Profit Margin Tracker - Automated project profitability
              `}
              {selectedFile === 'strategy.md' && activeDropId === 23 && `
# Performance Creative Lab - Strategic Blueprint
## Value Proposition
High-fidelity system for batching, testing, and optimizing ad creative without a design team.

### Core Modules:
1. The Hook Factory - 100+ proven ad hook formulas
2. Creative Asset Manager - Centralized ad asset hub
3. The 3-Step Blitz Testing Framework - $5/day workflow
4. Performance Matrix Dashboard - Creative metrics tracking
              `}
              {selectedFile === 'strategy.md' && activeDropId === 22 && `
# Digital Product Lab - Strategic Blueprint
## Value Proposition
High-velocity framework for validating, building, and launching mini-products in 14 days.

### Core Modules:
1. The Validation Engine - Score ideas by client pain points
2. The Build Sprint Hub - Rapid product creation
3. Product Asset Library - Centralized assets
4. The Blitz Launch Protocol - 7-day promotional sequence
              `}
              {selectedFile === 'strategy.md' && activeDropId === 21 && `
# Feedback & Referral Loop - Strategic Blueprint
## Value Proposition
Automated system for capturing testimonials and turning clients into a referral engine.

### Core Modules:
1. The Feedback Automator - Triggered at peak satisfaction
2. Testimonial Library - Centralized social proof
3. Referral Partner Portal - Track codes and impact
4. The Incentive Engine - Rewards for referrals
              `}
              {selectedFile === 'strategy.md' && activeDropId === 20 && `
# AI-Powered Workflow - Strategic Blueprint
## Value Proposition
Move beyond simple chat-based AI interaction to an automated layer within your business OS.

### Core Modules:
1. AI Research & Synthesis Engine - Centralized competitive insights
2. Style Injector & Formatting Factory - Brand voice automation
3. AI Prompt Library - Version-controlled system prompts
4. Performance Analysis Dashboard - AI-driven business analytics
              `}
              {selectedFile === 'strategy.md' && activeDropId === 19 && `
# Collaborative Systems - Strategic Blueprint
## Value Proposition
Bridge the gap between solo operations and a managed freelance team without administrative bloat.

### Core Modules:
1. The Handover Protocol - Standardized context packaging for contractors
2. Shared Team Dashboard - Personal Workbench views for collaborators
3. Resource Allocation Tracker - Real-time team capacity visibility
4. Client Transparency Sync - Automated client-facing progress reports
              `}
              {selectedFile.includes('guide') && activeDropId === 24 && `
# Content Agency OS - User Guide
1. Map your agency's production stages and onboard your internal team
2. Set up Client Portals for active clients with white-labeled views
3. Populate the Internal SOP Hub with editing guidelines
4. Use the Capacity Hub to analyze team efficiency and refine labor allocation
              `}
              {selectedFile.includes('guide') && activeDropId === 23 && `
# Performance Creative Lab - User Guide
1. Categorize ad assets and populate the Hook Factory with winners
2. Run your first $5/day Blitz Test with 3 new hook variations
3. Use templates to batch 10 new creative assets in under 4 hours
4. Identify the Statistical Winner and scale the campaign
              `}
              {selectedFile.includes('guide') && activeDropId === 22 && `
# Digital Product Lab - User Guide
1. Dump 10 ideas into the Idea Lab and score them using the Validation Matrix
2. Execute a 5-day build sprint for the top-scoring idea
3. Finalize the checkout flow and delivery automation
4. Deploy the Blitz Launch Protocol across your primary channels
              `}
              {selectedFile.includes('guide') && activeDropId === 21 && `
# Feedback & Referral Loop - User Guide
1. Initialize the Testimonial Library and map your project milestones
2. Set up email/form triggers for automated feedback collection
3. Onboard top past clients into the Referral Partner database
4. Review feedback trends to improve service delivery
              `}
              {selectedFile.includes('guide') && activeDropId === 20 && `
# AI-Powered Workflow - User Guide
1. Populate the Research Repository with high-performing assets
2. Move scattered prompts into the version-controlled Prompt Library
3. Connect tools via the Transformation Log
4. Run month-end analytics through the Analysis Hub
              `}
              {selectedFile.includes('guide') && activeDropId === 19 && `
# Collaborative Systems - User Guide
1. Map roles, rates, and specialties in the Team Directory
2. Deploy the Project Handover Template for outsourced tasks
3. Grant workspace access and set up Personal Workbenches
4. Configure the Sync engine for automated client updates
              `}
              {selectedFile === 'database.md' && activeDropId === 22 && `
# Digital Product Lab - Database Specs
Validation Engine: Idea Name, Pain Point Score, Ease of Build, Total Score
Build Sprint Hub: Phase, Assets, Documentation, Status, Launch Date
Product Asset Library: Graphic URL, Checkout Link, Delivery Email
              `}
              {selectedFile === 'database.md' && activeDropId === 21 && `
# Feedback & Referral Loop - Database Specs
Testimonial Library: Client Name, Testimonial, Category, Approval Status
Referral Partner: Name, Code, Referrals Sent, Conversions, Reward Status
Feedback Automator: Trigger Event, Template, Delay, Status
              `}
              {selectedFile === 'feedback-request-templates.md' && activeDropId === 21 && `
# Feedback Request Templates
Pre-built email templates for requesting testimonials at key client milestones.
Templates: Project Completion, Milestone Reached, Positive Feedback Received.
              `}
              {selectedFile === 'referral-partner-agreement.md' && activeDropId === 21 && `
# Referral Partner Agreement
Standardized agreement template for referral partners including commission structure, terms, and tracking code setup.
              `}
              {selectedFile === 'blitz-launch-protocol.md' && activeDropId === 22 && `
# Blitz Launch Protocol
7-day promotional sequence template for moving from "Coming Soon" to "First 10 Sales." Includes social posts, email sequences, and launch day tactics.
              `}
              {selectedFile === 'validation-scoring-matrix.md' && activeDropId === 22 && `
# Validation Scoring Matrix
Score product ideas based on: Client Pain Points (0-30), Search Volume (0-25), Ease of Build (0-25), Revenue Potential (0-20). Total: 0-100.
              `}
              {selectedFile === 'design-specs.md' && activeDropId === 21 && `
# Social Media Asset Kit - Design Specifications

## Templates:
1. "The Cost of Chaos": Carousel highlighting bottlenecks vs. solutions.
2. "Project Spotlight": Showcase client projects using the Project Manager.
3. "Quick Tip": Single-slide template for productivity hacks.

## LinkedIn/Twitter Kit:
1. "Systems Showcase": Graphic showing the Workflow Hub dashboard.
2. "Authority Post": Text-heavy graphic with professional profile photo.
3. "Banner Assets": Profile header images.
            `}
            {selectedFile === 'database.md' && activeDropId === 20 && `
# AI Workflow - Database Specs
Prompt Library: Category, Prompt, Version, Performance Score
Research Repository: Topic, Source, Key Insights, Linked Campaigns
Style Injector: Brand Voice Rules, Format Templates, Transformations
              `}
              {selectedFile === 'database.md' && activeDropId === 19 && `
# Collaborative Systems - Database Specs
Team Directory: Role, Rate, Specialty, Capacity %
Handover Protocol: Task Brief, Assets, Success Criteria, Status
Project Timeline: Phase, Milestone, Assignee, Client-Visible
              `}
              {selectedFile === 'guide.md' && activeDropId === 1 && `
# The Content Engine - Strategy Guide
## Overview
A high-volume content creation workflow to help solopreneurs publish consistently across multiple platforms without burning out.

### The Workflow:
1. Define 3-5 Content Pillars
2. Batch production: Outline → Draft → Repurpose
3. Systematic Repurposing: One anchor piece → multiple social posts
            `}
              {selectedFile === 'guide.md' && activeDropId === 2 && `
# The Automation Audit - Strategy Guide
## Overview
Systematic process for identifying, documenting, and eliminating repetitive tasks using the ARC framework.

### The ARC Framework:
A - Automate: Can a tool handle this task?
R - Remove: Is this task actually moving the needle?
C - Centralize: Can we group tasks to minimize context switching?
            `}
              {selectedFile === 'README.md' && activeDropId === 3 && `
# The Lead Gen Machine - Strategy Guide
## Overview
Automated lead capture and scoring system with budget/timeline/fit scoring.

### Key Features:
- Inquiries Database with automated scoring algorithm
- Service Catalog for auto-matching leads to services
- Performance visualization dashboard
- Budget, Timeline, and Industry fit scoring
            `}
              {(selectedFile === 'inquiries-db.md' || selectedFile === 'service-catalog.md') && activeDropId === 3 && `
# Lead Gen Machine - Spec Preview
Scoring formula prioritizes leads by financial capacity and fit:
Budget (Max 50 pts) + Timeline (Max 30 pts) + Industry Fit (Max 20 pts)
Total Score: Hot (80+), Nurture (40-79), Low Fit (<40)
            `}
              {selectedFile === 'dashboard.md' && activeDropId === 3 && `
# Lead Gen Machine - Dashboard
Central workspace for monitoring lead pipeline, conversion rates, and service matching.
            `}
              {selectedFile === 'README.md' && activeDropId === 4 && `
# The Social Media Echo - Strategy Guide
## Overview
Semi-automated multi-platform content distribution from one "Anchor" piece.

### Key Components:
- Platform Master Database with platform-specific rules
- AI Prompt Library for automated repurposing
- Distribution log and performance tracker
- Hub and Spoke: One anchor → multiple platform posts
            `}
              {(selectedFile === 'platform-master.md' || selectedFile === 'log-and-prompts.md') && activeDropId === 4 && `
# Social Media Echo - Spec Preview
Platform Master stores rules per platform (character limits, formats, best practices).
AI Prompt Library houses prompts for automated content repurposing via Make/Zapier.
            `}
              {selectedFile === 'dashboard.md' && activeDropId === 4 && `
# Social Media Echo - Dashboard
Central workspace for reviewing drafts, scheduling posts, and tracking cross-platform performance.
            `}
              {selectedFile === 'copy-templates.md' && `
# Copy Templates
Welcome sequence templates for the Email Marketing Engine.
Includes: Welcome, Story, Value, Offer, Transition emails.
              `}
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <i className="fas fa-vault text-9xl"></i>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-bold text-indigo-600 flex items-center">
            <i className="fas fa-vault mr-2"></i>THE VAULT
          </h1>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeTab === 'dashboard' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-home w-6"></i>Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('roadmap')}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeTab === 'roadmap' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-rocket w-6"></i>Roadmap
          </button>
          <button 
            onClick={() => setActiveTab('library')}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeTab === 'library' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-book w-6"></i>Asset Library
          </button>
          <div className="pt-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider px-3">Strategy Drops</div>
          <button 
            onClick={() => handleOpenDrop(24)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 24 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-building w-6"></i>Drop #24
          </button>
          <button 
            onClick={() => handleOpenDrop(23)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 23 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-lightbulb w-6"></i>Drop #23
          </button>
          <button 
            onClick={() => handleOpenDrop(22)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 22 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-flask w-6"></i>Drop #22
          </button>
          <button 
            onClick={() => handleOpenDrop(21)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 21 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-star w-6"></i>Drop #21
          </button>
          <button 
            onClick={() => handleOpenDrop(20)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 20 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-robot w-6"></i>Drop #20
          </button>
          <button 
            onClick={() => handleOpenDrop(19)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 19 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-people-group w-6"></i>Drop #19
          </button>
          <button 
            onClick={() => handleOpenDrop(18)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 18 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-chart-line w-6"></i>Drop #18
          </button>
          <button 
            onClick={() => handleOpenDrop(17)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 17 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-building w-6"></i>Drop #17
          </button>
          <button 
            onClick={() => handleOpenDrop(16)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 16 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-share-alt w-6"></i>Drop #16
          </button>
          <button 
            onClick={() => handleOpenDrop(15)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 15 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-coins w-6"></i>Drop #15
          </button>
          <button 
            onClick={() => handleOpenDrop(14)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 14 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-user-tie w-6"></i>Drop #14
          </button>
          <button 
            onClick={() => handleOpenDrop(13)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 13 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-folder-open w-6"></i>Drop #13
          </button>
          <div className="pt-3 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider px-3">Classic Drops</div>
          <button 
            onClick={() => handleOpenDrop(12)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 12 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-envelope-open-text w-6"></i>Drop #12
          </button>
          <button 
            onClick={() => handleOpenDrop(11)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 11 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-file-invoice w-6"></i>Drop #11
          </button>
          <button 
            onClick={() => handleOpenDrop(10)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 10 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-book w-6"></i>Drop #10
          </button>
          <button 
            onClick={() => handleOpenDrop(9)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 9 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-filter w-6"></i>Drop #9
          </button>
          <button 
            onClick={() => handleOpenDrop(8)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 8 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-share-nodes w-6"></i>Drop #8
          </button>
          <button 
            onClick={() => handleOpenDrop(7)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 7 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-rocket w-6"></i>Drop #7
          </button>
          <button 
            onClick={() => handleOpenDrop(6)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 6 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-users w-6"></i>Drop #6
          </button>
          <button 
            onClick={() => handleOpenDrop(5)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 5 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-chart-simple w-6"></i>Drop #5
          </button>
          <button 
            onClick={() => handleOpenDrop(4)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 4 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-share-nodes w-6"></i>Drop #4
          </button>
          <button 
            onClick={() => handleOpenDrop(3)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 3 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-users-gear w-6"></i>Drop #3
          </button>
          <button 
            onClick={() => handleOpenDrop(2)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 2 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-robot w-6"></i>Drop #2
          </button>
          <button 
            onClick={() => handleOpenDrop(1)}
            className={`w-full flex items-center p-3 rounded-lg font-medium transition ${activeDropId === 1 && activeTab === 'drop-view' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <i className="fas fa-pen-nib w-6"></i>Drop #1
          </button>
          <div className="pt-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider px-3">Community</div>
          <button className="w-full flex items-center p-3 rounded-lg text-gray-600 font-medium hover:bg-gray-100">
            <i className="fas fa-users w-6"></i>Join Discord
          </button>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={() => setIsVaultPortal(false)}
            className="w-full flex items-center p-3 rounded-lg text-gray-500 hover:bg-gray-100 font-medium"
          >
            <i className="fas fa-sign-out-alt w-6"></i>Exit Portal
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {/* Top Navigation */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome back, Creator!</h2>
            <p className="text-gray-500">Access your digital systems and strategy drops.</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Active Member</span>
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">JD</div>
          </div>
        </header>

        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'roadmap' && renderRoadmap()}
        {activeTab === 'audit' && renderAudit()}
        {activeTab === 'library' && renderLibrary()}
        {activeTab === 'drop-view' && renderDropView()}
      </main>
    </div>
  );
};

export default VaultPortal;
