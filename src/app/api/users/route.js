import dbConnect from "@/lib/dbConnect";
import User from "@/models/user";
import { NextResponse } from "next/server";

// اتصال به دیتابیس
await dbConnect();

// ایجاد کاربر جدید
export async function POST(req) {
  try {
    const body = await req.json();

    // اعتبارسنجی داده‌ها
    const {
      fullName,
      profile,
      password,
      phoneNumber,
      birthDate,
      nationalId,
      email,
      role,
      teacherFields,
      studentFields,
      adminFields,
    } = body;

    if (
      !fullName ||
      !profile ||
      !password ||
      !phoneNumber ||
      !birthDate ||
      !nationalId ||
      !email ||
      !role
    ) {
      return NextResponse.json(
        { error: "All required fields must be provided" },
        { status: 400 }
      );
    }

    // بررسی اینکه ایمیل تکراری نباشد
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    // ایجاد کاربر جدید
    const newUser = new User({
      fullName,
      profile,
      password,
      phoneNumber,
      birthDate,
      nationalId,
      email,
      role,
      teacherFields: role === "teacher" ? teacherFields : undefined,
      studentFields: role === "student" ? studentFields : undefined,
      adminFields: role === "admin" ? adminFields : undefined,
    });

    // ذخیره کاربر در دیتابیس
    await newUser.save();

    // بازگرداندن پاسخ موفقیت‌آمیز
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
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
