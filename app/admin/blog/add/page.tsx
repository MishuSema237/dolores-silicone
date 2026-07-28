"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FormInput, FormTextarea, FormSelect } from "@/components/ui/form-input";
import { ImageUpload } from "@/components/admin/image-upload";

export default function AddBlogPostPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: "",
    category: "Reborn Dolls",
    author: "Dolores Silicone",
    status: "draft",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to create blog post");
      }

      router.push("/admin/blog");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-gray-900">
        New Blog Post
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-2xl shadow-sm">
        <div className="block lg:grid lg:grid-cols-2 gap-6">
          <FormInput
            id="title"
            name="title"
            label="Title"
            required
            value={formData.title}
            onChange={(e) => {
              const title = e.target.value;
              const slug = title
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, "")
                .replace(/[\s_]+/g, "-")
                .replace(/-+/g, "-")
                .replace(/^-+|-+$/g, "");
              setFormData({ ...formData, title, slug });
            }}
          />
          <FormInput
            id="slug"
            name="slug"
            label="Slug (URL friendly)"
            required
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          />
          <p className="text-xs text-gray-500 mt-1 col-span-2 -mt-4">
            Auto-generated from the title. Edit if needed.
          </p>
        </div>

        <FormInput
          id="author"
          name="author"
          label="Author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        />

        <FormTextarea
          id="excerpt"
          label="Excerpt (short summary)"
          required
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          rows={3}
        />

        <FormTextarea
          id="content"
          label="Content"
          required
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          rows={12}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Featured Image
          </label>
          <ImageUpload
            value={formData.image ? [formData.image] : []}
            onChange={(urls) => setFormData({ ...formData, image: urls[0] || "" })}
            maxFiles={1}
          />
        </div>

        <FormSelect
          id="category"
          label="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          options={[
            { value: "Reborn Dolls", label: "Reborn Dolls" },
            { value: "Care & Materials", label: "Care & Materials" },
            { value: "Collecting Tips", label: "Collecting Tips" },
            { value: "Behind the Scenes", label: "Behind the Scenes" },
            { value: "Customer Stories", label: "Customer Stories" },
            { value: "General", label: "General" },
          ]}
        />

        <FormSelect
          id="status"
          label="Status"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          options={[
            { value: "draft", label: "Draft" },
            { value: "published", label: "Published" },
          ]}
        />

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
            {error}
          </div>
        )}

        <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}
