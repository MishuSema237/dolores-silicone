import { notFound } from "next/navigation";
import { BlogPostClient } from "@/components/blog/blog-post-client";
import connectMongoose from "@/lib/db/mongodb";
import Blog from "@/lib/models/Blog";

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

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    await connectMongoose();
    const post = await Blog.findOne({ slug }).lean();
    if (!post) return null;
    return {
      _id: String(post._id),
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      category: post.category,
      author: post.author,
      publishedAt: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
      createdAt: new Date(post.createdAt).toISOString(),
    };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const title = `${post.title} | Dolores Silicone Journal`;
  const description = post.excerpt || `Read ${post.title} on the Dolores Silicone blog.`;
  const ogImage = post.image || "/assets/og-logo.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://dolores-silicone.vercel.app/blog/${slug}`,
      siteName: "Dolores Silicone",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient initialPost={post} />;
}
