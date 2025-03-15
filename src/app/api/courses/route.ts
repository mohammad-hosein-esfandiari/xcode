import dbConnect from "@/lib/dbConnect";
import Course from "@/models/course";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    // دریافت تمام دوره‌ها از دیتابیس
    const courses = await Course.find({})
    // const courses = await Course.find({}).populate('students teacher'); // populate برای دریافت اطلاعات کامل کاربران
    return NextResponse.json(courses,{status:200});
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();

    // دریافت داده‌های ارسالی از درخواست POST
    const {
      title,
      likedCount,
      students,
      disLikedCount,
      cost,
      image,
      description,
      category,
      level,
      duration,
      teacher,
      lessons,
    } = body;

    // اعتبارسنجی داده‌ها
    if (!title || !cost || !image || !description || !teacher || !lessons) {
      return NextResponse.json(
        {
          error:
            "Title, cost, image, description, teacher, and lessons are required",
        },
        { status: 400 }
      );
    }

    // ایجاد دوره جدید
    const newCourse = new Course({
      title,
      likedCount: likedCount || 0,
      students: students || [], // اگر students ارسال نشده باشد، آرایه خالی در نظر گرفته می‌شود
      disLikedCount: disLikedCount || 0,
      cost,
      image,
      category,
      level,
      duration,
      description,
      teacher, // انتظار می‌رود teacher به عنوان ObjectId ارسال شود
      lessons, // انتظار می‌رود lessons به شکل [{ title: "...", link: "..." }] ارسال شود
    });

    // ذخیره دوره در دیتابیس
    await newCourse.save();

    // بازگرداندن پاسخ موفقیت‌آمیز
    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 }
    );
  }
}