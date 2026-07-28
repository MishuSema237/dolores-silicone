import { NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Blog from "@/lib/models/Blog";

export async function GET() {
  try {
    await connectMongoose();
    const posts = await Blog.find({ status: "published" })
      .sort({ publishedAt: -1 })
      .lean();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}
