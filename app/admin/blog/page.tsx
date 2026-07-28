"use client";

import { useEffect, useState } from "react";
import { DataTable } from "@/components/admin/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  status: "draft" | "published";
  publishedAt?: string;
  createdAt: string;
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/admin/blog");
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    } catch (error) {
      console.error("Failed to fetch blog posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (post: BlogPost) => {
    if (!confirm(`Are you sure you want to delete "${post.title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/blog/${post._id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchPosts();
      } else {
        alert("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleToggleStatus = async (post: BlogPost) => {
    const newStatus = post.status === "published" ? "draft" : "published";
    try {
      const res = await fetch(`/api/admin/blog/${post._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        fetchPosts();
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const columns = [
    {
      header: "Title",
      accessor: (post: BlogPost) => (
        <div>
          <div className="font-medium text-gray-900">{post.title}</div>
          <div className="text-xs text-gray-500">/{post.slug}</div>
        </div>
      ),
    },
    {
      header: "Category",
      accessor: (post: BlogPost) => (
        <span className="text-sm text-gray-600">{post.category || "—"}</span>
      ),
    },
    {
      header: "Author",
      accessor: (post: BlogPost) => (
        <span className="text-sm text-gray-600">{post.author || "—"}</span>
      ),
    },
    {
      header: "Status",
      accessor: (post: BlogPost) => (
        <button
          onClick={() => handleToggleStatus(post)}
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
            post.status === "published"
              ? "bg-green-100 text-green-800 hover:bg-green-200"
              : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
          }`}
        >
          {post.status}
        </button>
      ),
    },
    {
      header: "Date",
      accessor: (post: BlogPost) => (
        <span className="text-sm text-gray-500">
          {new Date(post.createdAt).toLocaleDateString("en-GB")}
        </span>
      ),
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
            Blog
          </h1>
          <p className="text-gray-500">Manage your blog posts and articles.</p>
        </div>
        <Link href="/admin/blog/add">
          <Button className="flex items-center gap-2">
            <FaPlus /> New Post
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-gray-500">Loading posts...</div>
        ) : posts.length > 0 ? (
          <DataTable
            data={posts}
            columns={columns}
            keyField="_id"
            onDelete={handleDelete}
            onEdit={(post) => window.location.href = `/admin/blog/edit/${post._id}`}
            isLoading={isLoading}
          />
        ) : (
          <div className="p-12 text-center">
            <p className="text-gray-500 mb-4">No blog posts yet.</p>
            <Link href="/admin/blog/add">
              <Button variant="outline">Create your first post</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
