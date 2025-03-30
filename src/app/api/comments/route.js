import { NextResponse } from "next/server";
import Comments from "@/models/Comments.ts";
import User from "@/models/User";
import dbConnect from "@/lib/dbConnect";

export async function GET(request) {
  await dbConnect();

  try { 
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { error: "postId parameter is required" },
        { status: 400 }
      );
    }

    const comments = await Comments.find({ postId })
      .populate("user", "username email")
      .sort({ createdAt: -1 });

    return NextResponse.json({ comments });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Server error while fetching comments" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  await dbConnect();

  try {
    const { postId, userId, content } = await request.json();

    if (!postId || !userId || !content) {
      return NextResponse.json(
        { error: "postId, userId and content are all required" },
        { status: 400 }
      );
    }

    const userExists = await User.findById(userId);
    if (!userExists) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const newComment = new Comments({
      postId,
      user: userId,
      content
    });

    await newComment.save();

    const commentWithUser = await Comments.findById(newComment._id)
      .populate("user", "username email");

    return NextResponse.json(
      { comment: commentWithUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Server error while creating comment" },
      { status: 500 }
    );
  }
}