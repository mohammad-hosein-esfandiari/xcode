import dbConnect from "@/lib/dbConnect";
import Course from "@/models/course";
import { NextResponse } from "next/server";

export async function GET() {

  await dbConnect();
  try {
    const courses = await Course.find({});

    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();

    const { title, likedCount, students, disLikedCount, cost, lesson } = body;

    // اعتبارسنجی داده‌ها
    if (!title || !cost || !lesson) {
      return NextResponse.json(
        { error: "Title, cost, and lesson are required" },
        { status: 400 }
      );
    }

    // ایجاد دوره جدید
    const newCourse = new Course({
      title,
      likedCount: likedCount || 0,
      students: students || 0,
      disLikedCount: disLikedCount || 0,
      cost,
      lesson,
    });

    await newCourse.save();

    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 }
    );
  }

}