import dbConnect from "@/lib/dbConnect";
import User from "@/models/user";
import { NextResponse } from "next/server";

// اتصال به دیتابیس
await dbConnect();

export async function GET(req) {
    try {

  
      // دریافت کاربران از دیتابیس
      const users = await User.find({}); 
  
      // بازگرداندن پاسخ موفقیت‌آمیز
      return NextResponse.json(users, { status: 200 });
    } catch (error) {
      console.error("Error fetching users:", error);
      return NextResponse.json(
        { error: "Failed to fetch users" },
        { status: 500 }
      );
    }
  }
