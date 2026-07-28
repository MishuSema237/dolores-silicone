import { NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Blog from "@/lib/models/Blog";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectMongoose();
    const { slug } = await params;
    const post = await Blog.findOne({
      slug,
      status: "published",
    }).lean();

    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}
