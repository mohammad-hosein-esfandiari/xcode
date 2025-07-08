import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { lessonId } = params;

  try {
    await dbConnect();

    // پیدا کردن دوره‌ای که شامل این درس هست
    const course = await Course.findOne({ "lessons._id": lessonId }).populate(
      "teacher"
    );

    if (!course) {
      return NextResponse.json(
        { message: "Course with this lesson not found" },
        { status: 404 }
      );
    }

    // فقط لیست دروس را برمی‌گردانیم
    return NextResponse.json(course, { status: 200 });
  } catch (error) {
    console.error("Error fetching lessons:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
