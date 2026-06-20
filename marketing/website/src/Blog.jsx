import React, { useState } from 'react';

const blogPosts = [
  { id: 1, title: 'The Ultimate Solopreneur Workflow: How to Reclaim 10+ Hours Every Week', date: '2026-06-15', category: 'Productivity', excerpt: 'Most solopreneurs lose up to 40% of their week on administrative overhead. Here\'s the 3-step system to centralize your brain, batch your content, and automate your operations.', image: '📊', author: 'Streamline Team', readTime: '6 min' },
  { id: 2, title: 'Why Notion for Freelancers is the Ultimate Competitive Advantage', date: '2026-06-10', category: 'Freelancing', excerpt: 'The difference between freelancers who struggle and those who scale to 6-figures comes down to systems. Learn how to replace the "App Spaghetti" with a single professional workspace.', image: '🏗️', author: 'Streamline Team', readTime: '5 min' },
  { id: 3, title: 'Business Automation for Creators: Stop Trading Time for Dollars', date: '2026-06-05', category: 'Automation', excerpt: 'Most creators spend 20% of their time creating and 80% managing. Master the automation pillars that handle distribution, sponsorship tracking, and delivery while you focus on your craft.', image: '✍️', author: 'Streamline Team', readTime: '7 min' },
  { id: 4, title: 'The ARC Framework: Automate, Remove, Centralize', date: '2026-05-28', category: 'Productivity', excerpt: 'Not every task needs automation. Some need to be removed entirely, and others just need a central home. Learn the ARC framework for operational clarity.', image: '🔄', author: 'Streamline Team', readTime: '4 min' },
  { id: 5, title: 'Why Your Lead Gen Is Leaking (And How to Fix It)', date: '2026-05-20', category: 'Sales', excerpt: 'You\'re generating leads — but they\'re falling through the cracks. Here\'s how to build a lead tracking system that captures, scores, and nurtures every single inquiry.', image: '🎯', author: 'Streamline Team', readTime: '6 min' },
];

const Blog = ({ setActivePage }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return (
      <div className="max-w-4xl mx-auto px-8 py-16">
        <button onClick={() => setSelectedPost(null)} className="text-blue-500 hover:text-blue-400 font-bold flex items-center gap-2 mb-12 transition">
          <i className="fas fa-arrow-left"></i> Back to Articles
        </button>
        <article className="space-y-8">
          <div className="text-7xl mb-4">{selectedPost.image}</div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[10px]">{selectedPost.category}</span>
            <span>{selectedPost.date}</span>
            <span>·</span>
            <span>{selectedPost.readTime} read</span>
          </div>
          <h1 className="text-5xl font-black leading-tight">{selectedPost.title}</h1>
          <p className="text-xl text-gray-400 leading-relaxed">{selectedPost.excerpt}</p>
          <div className="border-t border-white/10 pt-8 space-y-6 text-gray-300 leading-relaxed">
            <p>This is the full article content for "{selectedPost.title}". In production, this would be rendered from Markdown or a CMS. The blog infrastructure is ready for real content — simply update the <code className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">blogPosts</code> array or connect to a headless CMS.</p>
            <p>Key takeaways from this article will help you implement practical systems in your business. Watch for the full strategy drop in The Vault that covers this topic in depth with ready-to-use templates.</p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-8">
              <h3 className="font-bold text-white text-lg mb-4">Ready to implement this system?</h3>
              <p className="text-gray-400 mb-6">Get the complete template and automation workflow inside The Vault.</p>
              <button onClick={() => window.location.href = '/?vault=true'} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-500 transition">
                Open The Vault →
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      {/* Header */}
      <div className="text-center space-y-6 mb-20">
        <div className="text-blue-500 font-bold uppercase tracking-widest text-sm">Resources</div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">The Streamline<span className="text-blue-500">Blog</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Systems thinking, productivity frameworks, and growth tactics for the modern solopreneur.</p>
      </div>

      {/* Featured Post */}
      <div className="mb-20 group cursor-pointer" onClick={() => setSelectedPost(blogPosts[0])}>
        <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-500/20 rounded-[2rem] p-10 md:p-16 hover:border-blue-500/40 transition duration-500">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3 text-sm">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[10px]">Featured</span>
              <span className="text-gray-500">{blogPosts[0].category}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">{blogPosts[0].title}</h2>
            <p className="text-xl text-gray-400">{blogPosts[0].excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500 pt-4">
              <span>{blogPosts[0].date}</span>
              <span>·</span>
              <span>{blogPosts[0].readTime} read</span>
              <span className="text-blue-500 font-bold ml-auto">Read Article →</span>
            </div>
          </div>
        </div>
      </div>

      {/* Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.slice(1).map(post => (
          <div key={post.id} onClick={() => setSelectedPost(post)} className="group bg-white/5 border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition cursor-pointer duration-500">
            <div className="space-y-4">
              <div className="text-4xl">{post.image}</div>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">{post.category}</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold group-hover:text-blue-400 transition">{post.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
              <div className="text-blue-500 font-bold text-sm pt-2">Read Article →</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;