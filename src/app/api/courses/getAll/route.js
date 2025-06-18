import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course.ts";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    // const courses = await Course.find({});
    const courses = await Course.find({}).populate("students teacher"); // populate برای دریافت اطلاعات کامل کاربران
    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}
