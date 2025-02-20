import dbConnect from "@/lib/dbConnect";
import User from "@/models/user";
import { NextResponse } from "next/server";

// اتصال به دیتابیس
await dbConnect();

export async function GET(req) {
  try {
    // دریافت تیچرها از دیتابیس
    const teachers = await User.find({ role: "teacher" });

    // بازگرداندن پاسخ موفقیت‌آمیز
    return NextResponse.json(teachers, { status: 200 });
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return NextResponse.json(
      { error: "Failed to fetch teachers" },
      { status: 500 }
    );
  }
}