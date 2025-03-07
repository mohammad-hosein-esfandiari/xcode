import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/user";
import jwt from "jsonwebtoken"; // برای تولید توکن

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    // اتصال به دیتابیس
    await dbConnect();

    // جست‌وجو برای کاربر با ایمیل وارد شده
    const user = await User.findOne({ email });

    // اگر کاربر وجود نداشت، خطا برگردان
    if (!user) {
      return NextResponse.json(
        { message: "No user found with this email." },
        { status: 404 }
      );
    }

    // مقایسه پسورد وارد شده با پسورد هش شده در دیتابیس
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // اگر پسورد نامعتبر بود، خطا برگردان
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid password." },
        { status: 401 }
      );
    }

    // تولید توکن JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email }, // payload
      process.env.NEXT_PUBLIC_JWT_SECRET, // کلید مخفی
      { expiresIn: "1h" } // زمان انقضای توکن
    );

    // برگرداندن اطلاعات کاربر و توکن در پاسخ
    const { password: _, ...userWithoutPassword } = user.toObject(); // حذف پسورد از اطلاعات کاربر
    console.log("userwithout ==========================================>",userWithoutPassword)
    return NextResponse.json({
      user: userWithoutPassword,
      token, // توکن در پاسخ برگردانده می‌شود
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "An error occurred on the server." },
      { status: 500 }
    );
  }
}