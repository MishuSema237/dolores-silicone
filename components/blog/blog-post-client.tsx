"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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

function estimateReadingTime(html: string): string {
  const text = html.replace(/<[^>]+>/g, "");
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogPostClient({ initialPost }: { initialPost: BlogPost | null }) {
  const params = useParams();
  const slug = params?.slug as string;

  const [post, setPost] = useState<BlogPost | null>(initialPost);
  const [related, setRelated] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(!initialPost);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (post) {
      // Fetch related posts even if we have the initial post
      fetch("/api/blog")
        .then((res) => res.json())
        .then((data) => {
          const all = Array.isArray(data) ? data : [];
          setRelated(all.filter((p: BlogPost) => p.slug !== post.slug).slice(0, 3));
        })
        .catch(() => {});
      return;
    }

    if (!slug) return;

    async function load() {
      try {
        const res = await fetch(`/api/blog/${slug}`);
        if (!res.ok) return;
        const data = await res.json();
        setPost(data);

        const allRes = await fetch("/api/blog");
        const allData = await allRes.json();
        const others = (Array.isArray(allData) ? allData : []).filter(
          (p: BlogPost) => p.slug !== slug
        );
        setRelated(others.slice(0, 3));
      } catch {
        // stay null
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug, post]);

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleShareTwitter() {
    if (!post) return;
    const url = window.location.href;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        post.title
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-purple-400 text-lg">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl font-bold text-purple-200 mb-4">404</p>
          <p className="text-xl text-gray-500 mb-8">Post not found.</p>
          <Link
            href="/blog"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            &larr; Back to Journal
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-24">
        <Link
          href="/blog"
          className="inline-block text-purple-600 hover:text-purple-700 font-medium mb-8 transition-colors"
        >
          &larr; Back to Journal
        </Link>

        {post.image && (
          <div className="w-full max-h-[500px] rounded-2xl overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              style={{ maxHeight: 500 }}
            />
          </div>
        )}

        {post.category && (
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider">
            {post.category}
          </span>
        )}

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-12 pb-8 border-b border-gray-100">
          {post.author && <span>{post.author}</span>}
          {post.publishedAt && <time>{formatDate(post.publishedAt)}</time>}
          <span>{estimateReadingTime(post.content)}</span>
        </div>

        <div className="max-w-3xl mx-auto" style={{ lineHeight: 1.8 }}>
          <div
            className="text-gray-700 text-lg leading-relaxed [&_h1]:text-gray-900 [&_h1]:font-bold [&_h1]:text-3xl [&_h1]:mt-10 [&_h1]:mb-4 [&_h2]:text-gray-900 [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-gray-900 [&_h3]:font-bold [&_h3]:text-xl [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-6 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_li]:mb-2 [&_a]:text-purple-600 [&_a]:underline [&_strong]:text-gray-900 [&_strong]:font-bold [&_img]:rounded-xl [&_img]:my-8 [&_img]:w-full [&_blockquote]:border-l-4 [&_blockquote]:border-purple-300 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-gray-500 [&_blockquote]:my-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm font-medium text-gray-900 mb-3">Share this article</p>
          <div className="flex gap-6">
            <button
              onClick={handleCopyLink}
              className="text-sm text-purple-600 hover:text-purple-700 transition-colors"
            >
              {copied ? "Copied!" : "Copy link"}
            </button>
            <button
              onClick={handleShareTwitter}
              className="text-sm text-purple-600 hover:text-purple-700 transition-colors"
            >
              Share on Twitter
            </button>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              More from the Journal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r._id}
                  href={`/blog/${r.slug}`}
                  className="group block"
                >
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 mb-3">
                    {r.image ? (
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200" />
                    )}
                  </div>
                  {r.category && (
                    <span className="text-xs text-purple-600 font-medium uppercase tracking-wider">
                      {r.category}
                    </span>
                  )}
                  <h3 className="text-base font-bold text-gray-900 mt-1 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {formatDate(r.publishedAt)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
