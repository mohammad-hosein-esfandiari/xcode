import dbConnect from "@/lib/dbConnect";
import User from "../../../../models/User.ts";
import { NextResponse } from "next/server";

// اتصال به دیتابیس
await dbConnect();

export async function GET(req, { params }) {
  // گرفتن آیدی کاربر
  const id = params.id;
  try {
    // دریافت کاربران از دیتابیس
    const user = await User.findOne({ _id: id });
    // بازگرداندن پاسخ موفقیت‌آمیز
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
