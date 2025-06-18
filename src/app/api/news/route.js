import dbConnect from "@/lib/dbConnect";
import News from "@/models/News.ts";
import { NextResponse } from "next/server";

// اتصال به دیتابیس
await dbConnect();

export async function GET() {
  try {
    // دریافت تمام اخبار و مقالات از دیتابیس
    const data = await News.find({});
    // const courses = await Course.find({}).populate('students teacher'); // populate برای دریافت اطلاعات کامل کاربران
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}

// ایجاد خبر جدید
export async function POST(req) {
  try {
    const body = await req.json();

    // اعتبارسنجی داده‌ها
    const { title, category, image, text, paragraph } = body;

    if (!title || !category || !image || !text) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // ایجاد خبر جدید
    const newNews = new News({
      title,
      category,
      image,
      text,
      paragraph,
    });

    // ذخیره خبر در دیتابیس
    await newNews.save();

    // بازگرداندن پاسخ موفقیت‌آمیز
    return NextResponse.json(newNews, { status: 201 });
  } catch (error) {
    console.error("Error creating news:", error);
    return NextResponse.json(
      { error: "Failed to create news" },
      { status: 500 }
    );
  }
}
