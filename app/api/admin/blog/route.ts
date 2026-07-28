import { NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Blog from "@/lib/models/Blog";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function GET() {
  try {
    await connectMongoose();
    const posts = await Blog.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectMongoose();
    const body = await request.json();

    const slug = generateSlug(body.title);

    const existing = await Blog.findOne({ slug });
    if (existing) {
      return NextResponse.json(
        { error: "A post with a similar title already exists" },
        { status: 409 }
      );
    }

    const post = await Blog.create({
      title: body.title,
      slug,
      content: body.content || "",
      excerpt: body.excerpt || "",
      image: body.image || "",
      category: body.category || "",
      author: body.author || "",
      status: body.status || "draft",
      publishedAt: body.status === "published" ? new Date() : undefined,
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
