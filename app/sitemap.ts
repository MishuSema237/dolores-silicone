import { MetadataRoute } from "next";
import connectMongoose from "@/lib/db/mongodb";
import Product from "@/lib/models/Product";
import Blog from "@/lib/models/Blog";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://doloressilicone.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/shop`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/reviews`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/returns`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/shipping-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  try {
    await connectMongoose();

    const products = await Product.find({ status: "active" })
      .select("slug updatedAt createdAt")
      .lean()
      .exec();

    const productPages: MetadataRoute.Sitemap = products.map((product: any) => ({
      url: `${BASE_URL}/product/${encodeURIComponent(product.slug)}`,
      lastModified: product.updatedAt ? new Date(product.updatedAt) : new Date(product.createdAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    const posts = await Blog.find({ status: "published" })
      .select("slug updatedAt createdAt publishedAt")
      .lean()
      .exec();

    const blogPages: MetadataRoute.Sitemap = posts.map((post: any) => ({
      url: `${BASE_URL}/blog/${encodeURIComponent(post.slug)}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt || post.createdAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    return [...staticPages, ...productPages, ...blogPages];
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return staticPages;
  }
}
