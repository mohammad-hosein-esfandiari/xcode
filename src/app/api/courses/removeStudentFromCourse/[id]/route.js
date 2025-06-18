import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course.ts";
import User from "../../../../../models/User.ts"; // فرض می‌کنیم مدل User را دارید
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  try {
    await dbConnect();
    const { id } = params; // آیدی کاربر
    const { courseId } = await req.json(); // آیدی دوره

    // 1. حذف دوره از لیست دوره‌های کاربر
    const userUpdate = await User.findByIdAndUpdate(
      id,
      { $pull: { courses: courseId } }, // حذف courseId از آرایه courses
      { new: true }
    );

    if (!userUpdate) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 2. حذف کاربر از لیست دانشجویان دوره
    const courseUpdate = await Course.findByIdAndUpdate(
      courseId,
      { $pull: { students: id } }, // حذف id از آرایه students
      { new: true }
    ).populate("teacher");

    if (!courseUpdate) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "Successfully unenrolled",
        user: userUpdate,
        course: courseUpdate,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error unenrolling:", error);
    return NextResponse.json({ error: "Failed to unenroll" }, { status: 500 });
  }
}
