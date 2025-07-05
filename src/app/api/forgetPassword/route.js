import dbConnect from "@/lib/dbConnect..js";
import User from "../../../models/User";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  try {
    await dbConnect();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // ایجاد توکن تصادفی
    const token = crypto.randomBytes(20).toString("hex");

    // تنظیم توکن و تاریخ انقضا (10 دقیقه بعد)
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000;
    await user.save();

    // ✅ در اینجا توکن رو برای ارسال ایمیل استفاده کن یا به کلاینت برگردون
    // مثلاً: await sendResetEmail(user.email, token)

    return NextResponse.json({
      message: "Reset code sent",
      token, // فقط برای تست؛ در عمل ارسال به ایمیل
      expires: user.resetPasswordExpires,
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
