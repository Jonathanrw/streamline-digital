import React, { useState, useEffect } from 'react';

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const cells = (row) =>
  row.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());

// Simple markdown → HTML renderer
function renderMarkdown(md) {
  if (!md) return '';
  const codeBlocks = [];

  let html = md
    // Fenced code blocks (parked so later passes leave them alone)
    .replace(/```[a-z]*\n([\s\S]*?)```/g, (_, code) => {
      codeBlocks.push(`<pre class="bg-black/40 border border-white/10 rounded-xl p-4 overflow-x-auto text-sm mb-6"><code>${escapeHtml(code.replace(/\n$/, ''))}</code></pre>`);
      return `\n<div data-code="${codeBlocks.length - 1}"></div>\n`;
    })
    // Tables
    .replace(/^\|(.+)\|\s*\n\|[\s:|-]+\|\s*\n((?:\|.*\|[ \t]*\n?)+)/gm, (_, head, body) => {
      const th = cells(head).map((c) => `<th class="text-left px-4 py-2 border-b border-white/10 font-bold text-white">${c}</th>`).join('');
      const trs = body.trim().split('\n').map((row) =>
        `<tr>${cells(row).map((c) => `<td class="px-4 py-2 border-b border-white/5">${c}</td>`).join('')}</tr>`
      ).join('');
      return `<div class="overflow-x-auto mb-6"><table class="w-full text-sm"><thead><tr>${th}</tr></thead><tbody>${trs}</tbody></table></div>`;
    })
    // Horizontal rules
    .replace(/^-{3,}\s*$/gm, '<hr class="border-white/10 my-10" />')
    // Headers
    .replace(/^#### (.+)$/gm, '<h4 class="text-xl font-bold text-blue-400 mt-6 mb-2">$1</h4>')
    .replace(/^### (.+)$/gm, '<h3 class="text-2xl font-bold text-white mt-8 mb-4">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-3xl font-bold text-white mt-10 mb-4">$1</h2>')
    // Bold and italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul class="list-disc pl-6 space-y-2 mb-6">$1</ul>')
    // Ordered lists
    .replace(/^\d+\.\s+(.+)$/gm, '<li class="list-decimal">$1</li>')
    .replace(/((?:<li class="list-decimal">.*<\/li>\n?)+)/g, '<ol class="list-decimal pl-6 space-y-2 mb-6">$1</ol>')
    // Paragraphs (lines not starting with <)
    .replace(/^(?!<[a-z/])(.+)$/gm, '<p class="mb-4">$1</p>')
    // Fix double-wrapped paragraphs
    .replace(/<p class="mb-4"><p class="mb-4">/g, '<p class="mb-4">')
    .replace(/<\/p><\/p>/g, '</p>')
    // Remove empty paragraphs
    .replace(/<p class="mb-4"><\/p>/g, '');

  // Restore parked code blocks
  html = html.replace(/<div data-code="(\d+)"><\/div>/g, (_, i) => codeBlocks[Number(i)] || '');
  return html;
}

const slugFromPath = () => {
  const parts = window.location.pathname.replace(/^\/+/, '').split('/');
  return parts[0] === 'blog' && parts[1] ? decodeURIComponent(parts[1]) : null;
};

const Blog = ({ setActivePage }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [postIndex, setPostIndex] = useState(-1);

  // Load all posts metadata on mount, then honour a /blog/<slug> deep link
  useEffect(() => {
    fetch('/api/articles')
      .then(r => r.json())
      .then(data => {
        const list = Array.isArray(data) ? data : [];
        setPosts(list);
        setLoading(false);
        const slug = slugFromPath();
        if (slug) loadPostBySlug(slug, list);
      })
      .catch(() => setLoading(false));
  }, []);

  // Browser back/forward between blog URLs
  useEffect(() => {
    const onPop = () => {
      const slug = slugFromPath();
      if (slug) loadPostBySlug(slug, posts);
      else setSelectedPost(null);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [posts]);

  const loadPostBySlug = async (slug, allPosts) => {
    const res = await fetch(`/api/articles/${encodeURIComponent(slug)}`);
    if (res.ok) {
      const post = await res.json();
      const idx = (allPosts || posts).findIndex(p => p.slug === slug);
      setPostIndex(idx);
      setSelectedPost(post);
      // Update meta tags
      document.title = `${post.title} — Streamline Digital Blog`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', post.excerpt);
      // Reflect the article in the URL
      window.history.pushState(null, '', `/blog/${slug}`);
      window.scrollTo(0, 0);
    }
  };

  const openPost = (post, idx) => {
    loadPostBySlug(post.slug, posts);
  };

  const closePost = () => {
    setSelectedPost(null);
    setPostIndex(-1);
    document.title = 'The Streamline Blog — Notion Systems for Solopreneurs';
    window.history.pushState(null, '', '/blog');
  };

  const prevPost = () => {
    if (postIndex > 0) openPost(posts[postIndex - 1], postIndex - 1);
  };

  const nextPost = () => {
    if (postIndex < posts.length - 1) openPost(posts[postIndex + 1], postIndex + 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0c10] text-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-32 text-center">
        <div className="animate-pulse text-4xl">📝</div>
        <p className="text-gray-400 mt-4">Loading articles...</p>
      </div>
      </div>
    );
  }

  // --- Single Post View ---
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-[#0a0c10] text-gray-100">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Back + Navigation */}
        <div className="flex items-center justify-between mb-12">
          <button onClick={closePost} className="text-blue-500 hover:text-blue-400 font-bold flex items-center gap-2 transition">
            <i className="fas fa-arrow-left"></i> Back to Articles
          </button>
          <div className="flex gap-2">
            <button onClick={prevPost} disabled={postIndex <= 0}
              className="px-3 py-1.5 rounded-lg text-sm font-bold bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition disabled:opacity-30 disabled:cursor-not-allowed">
              <i className="fas fa-chevron-left mr-1"></i> Prev
            </button>
            <button onClick={nextPost} disabled={postIndex >= posts.length - 1}
              className="px-3 py-1.5 rounded-lg text-sm font-bold bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition disabled:opacity-30 disabled:cursor-not-allowed">
              Next <i className="fas fa-chevron-right ml-1"></i>
            </button>
          </div>
        </div>

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
          <div className="border-t border-white/10 pt-8 text-gray-300 leading-relaxed text-lg space-y-6">
            {selectedPost.content ? (
              <div className="blog-content space-y-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(selectedPost.content) }} />
            ) : (
              <>
                <p>This is the full article content for "{selectedPost.title}". In production, this would be rendered from Markdown or a CMS.</p>
                <p>Key takeaways from this article will help you implement practical systems in your business.</p>
              </>
            )}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-12">
              <h3 className="font-bold text-white text-lg mb-4">Ready to implement this system?</h3>
              <p className="text-gray-400 mb-6">Get the complete template and automation workflow inside The Vault.</p>
              <button onClick={() => window.location.href = '/?vault=true'} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-500 transition">
                Open The Vault →
              </button>
            </div>
          </div>
        </article>

        {/* Bottom Navigation */}
        <div className="flex justify-between mt-16 pt-8 border-t border-white/10">
          {postIndex > 0 ? (
            <button onClick={prevPost} className="group text-left max-w-[45%]">
              <div className="text-xs text-gray-500 mb-1">← Previous Article</div>
              <div className="text-blue-400 group-hover:text-blue-300 font-bold text-sm">{posts[postIndex - 1]?.title}</div>
            </button>
          ) : <div></div>}
          {postIndex < posts.length - 1 ? (
            <button onClick={nextPost} className="group text-right max-w-[45%]">
              <div className="text-xs text-gray-500 mb-1">Next Article →</div>
              <div className="text-blue-400 group-hover:text-blue-300 font-bold text-sm">{posts[postIndex + 1]?.title}</div>
            </button>
          ) : <div></div>}
        </div>
      </div>
      </div>
    );
  }

  // --- Blog Index View ---
  return (
    <div className="min-h-screen bg-[#0a0c10] text-gray-100">
    <div className="max-w-7xl mx-auto px-8 py-16">
      {/* Header */}
      <div className="text-center space-y-6 mb-20">
        <div className="text-blue-500 font-bold uppercase tracking-widest text-sm">Resources</div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">The Streamline<span className="text-blue-500">Blog</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Systems thinking, productivity frameworks, and growth tactics for the modern solopreneur.</p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <div className="text-4xl mb-4">📝</div>
          <p>No articles yet. Check back soon!</p>
        </div>
      ) : (
        <>
          {/* Featured Post (first post) */}
          <div className="mb-20 group cursor-pointer" onClick={() => openPost(posts[0], 0)}>
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-500/20 rounded-[2rem] p-10 md:p-16 hover:border-blue-500/40 transition duration-500">
              <div className="max-w-3xl space-y-6">
                <div className="flex items-center gap-3 text-sm">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[10px]">Featured</span>
                  <span className="text-gray-500">{posts[0].category}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black leading-tight">{posts[0].title}</h2>
                <p className="text-xl text-gray-400">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 pt-4">
                  <span>{posts[0].date}</span>
                  <span>·</span>
                  <span>{posts[0].readTime} read</span>
                  <span className="text-blue-500 font-bold ml-auto">Read Article →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.slice(1).map((post, i) => (
              <div key={post.slug} onClick={() => openPost(post, i + 1)} className="group bg-white/5 border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition cursor-pointer duration-500">
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
        </>
      )}
    </div>
    </div>
  );
};

export default Blog;