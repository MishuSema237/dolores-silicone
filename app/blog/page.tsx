"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  category?: string;
  author?: string;
  publishedAt?: string;
  createdAt: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        const dbPosts = Array.isArray(data) ? data : [];
        setPosts(dbPosts);
      } catch {
        // posts stay empty
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const featured = posts[0] || null;
  const remaining = posts.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-purple-400 text-lg">Cargando...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0c0517] text-white pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 via-[#0c0517] to-violet-900/20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] -translate-y-1/3" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />
        <div className="absolute top-[20%] left-[15%] w-20 h-20 border border-purple-500/15 rounded-full" />
        <div className="absolute bottom-[15%] right-[12%] w-14 h-14 border-2 border-violet-400/10 rounded-lg rotate-45" />
        <div className="relative max-w-5xl mx-auto text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-1.5 h-1.5 bg-purple-400/60 rotate-45" />
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-purple-400/60" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-transparent">
              El Blog de
            </span>
            <br />
            <span className="text-purple-400/80">Dolores Silicone</span>
          </h1>
          <p className="text-purple-200/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Perspectivas sobre el mundo del arte reborn, el cuidado de los bebés de silicona,
            los usos terapéuticos y la artesanía detrás de cada creación de Dolores.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-16 pb-24">
        {/* Featured Post */}
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="block mb-16">
            <div className="relative w-full h-[400px] md:h-[520px] rounded-3xl overflow-hidden group">
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-400" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                {featured.category && (
                  <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                    {featured.category}
                  </span>
                )}
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                  {featured.title}
                </h2>
                <p className="text-white/80 text-base md:text-lg max-w-2xl line-clamp-2">
                  {featured.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-white/60">
                  {featured.author && <span>{featured.author}</span>}
                  {featured.publishedAt && (
                    <time>
                      {new Date(featured.publishedAt).toLocaleDateString(
                        "es-ES",
                        { month: "long", day: "numeric", year: "numeric" }
                      )}
                    </time>
                  )}
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Post Grid */}
        {remaining.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {remaining.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
                  {"image" in post && post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200" />
                  )}
                </div>
                <div className="pt-5">
                  {post.category && (
                    <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                      {post.category}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
                    {post.author && <span>{post.author}</span>}
                    {post.publishedAt && (
                      <time>
                      {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                      </time>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
