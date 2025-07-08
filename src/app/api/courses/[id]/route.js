import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const course = await Course.findById(id).populate("teacher");
    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }
    console.log(course);
    // بازگرداندن پاسخ موفقیت‌آمیز
    return NextResponse.json(course, { status: 200 });
  } catch (error) {
    console.error("Error fetching course:", error);
    return NextResponse.json(
      { error: "Failed to fetch course" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id"); // دریافت id خبر از پارامترهای URL

    // بررسی وجود خبر
    const course = await News.findById(id);
    if (!course) {
      return NextResponse.json({ error: "course not found" }, { status: 404 });
    }

    // حذف خبر
    await Course.findByIdAndDelete(id);

    // بازگرداندن پاسخ موفقیت‌آمیز
    return NextResponse.json(
      { message: "Course deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting course:", error);
    return NextResponse.json(
      { error: "Failed to delete course" },
      { status: 500 }
    );
  }
}
