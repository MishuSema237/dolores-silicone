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
    return { title: "Publicación No Encontrada" };
  }

  const title = `${post.title} | Blog de Dolores Silicone`;
  const description = post.excerpt || `Lee ${post.title} en el blog de Dolores Silicone.`;
  const ogImage = post.image || "/assets/og-logo.png";

  return {
    title,
    description,
    keywords: [
      post.title,
      post.category || "artículo sobre muñecas reborn",
      "muñecas reborn de silicona",
      "cuidado de muñecas reborn",
      "consejos sobre muñecas reborn",
      "blog de Dolores Silicone",
    ],
    openGraph: {
      title,
      description,
      url: `https://doloressilicone.com/blog/${slug}`,
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

  return (
    <>
      {/* ── JSON-LD Article Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt || "",
            image: post.image || undefined,
            author: {
              "@type": "Organization",
              name: post.author || "Dolores Silicone",
            },
            publisher: {
              "@type": "Organization",
              name: "Dolores Silicone",
              logo: {
                "@type": "ImageObject",
                url: "https://doloressilicone.com/assets/owners-logo/Dolores Silicone Logo.png",
              },
            },
            datePublished: post.publishedAt || post.createdAt,
            dateModified: post.createdAt,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://doloressilicone.com/blog/${slug}`,
            },
            keywords: "cuidado de muñecas reborn, muñecas bebé de silicona, coleccionismo reborn, muñecas terapéuticas",
            articleSection: post.category || "Blog",
          }),
        }}
      />
      <BlogPostClient initialPost={post} />
    </>
  );
}
