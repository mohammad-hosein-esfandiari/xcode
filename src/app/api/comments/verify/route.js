import { NextResponse } from "next/server";
import Comments from "@/models/Comments.ts";
import dbConnect from "@/lib/dbConnect";

export async function POST(request) {
  await dbConnect();

  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "Comment ID is required" },
        { status: 400 }
      );
    }

    // First, update the schema to include a verified field
    // Then update the comment
    const updatedComment = await Comments.findByIdAndUpdate(
      id,
      { $set: { verified: true } },
      { new: true } // Return the updated document
    );

    if (!updatedComment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "Comment verified successfully",
        comment: updatedComment,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying comment:", error);
    return NextResponse.json(
      { error: "Server error while verifying comment" },
      { status: 500 }
    );
  }
}
