import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course.ts";
import User from "@/models/User.ts";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const { id } = params;
  const { userId } = await req.json();

  try {
    await dbConnect();

    const course = await Course.findById(id);
    const user = await User.findById(userId);
    if (!course || !user) {
      return NextResponse.json(
        { message: "User or Course not found" },
        { status: 404 }
      );
    }

    // اگر کاربر قبلا ثبت‌نام کرده باشد، ثبت‌نام مجدد نکند
    const isUserAlreadyEnrolled = course.students.includes(userId);
    const isCourseAlreadyAddedToUser = user.courses.includes(id);

    if (!isUserAlreadyEnrolled) {
      course.students.push(userId);
      await course.save();
    }

    if (!isCourseAlreadyAddedToUser) {
      user.courses.push(id);
      await user.save();
    }

    return NextResponse.json(
      { message: "User successfully enrolled in the course" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Course registration error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
