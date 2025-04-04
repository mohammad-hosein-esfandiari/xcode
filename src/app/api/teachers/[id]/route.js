import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";

// اتصال به دیتابیس
await dbConnect();

export async function GET(req,{params}) {
  // گرفتن آیدی کاربر
    const id = params.id;
    try {

      // دریافت کاربران از دیتابیس
      const teacher = await User.findById(id); 
      // بازگرداندن پاسخ موفقیت‌آمیز
      return NextResponse.json({teacher}, { status: 200 });
    } catch (error) {
      console.error("Error fetching teacher:", error);
      return NextResponse.json(
        { error: "Failed to fetch teacher" },
        { status: 500 }
      );
    }
  }
