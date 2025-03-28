import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as yup from "yup";
import { cookies } from "next/headers";

// اتصال به دیتابیس
await dbConnect(); 

// تعریف طرح اعتبارسنجی Yup
const userSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  profile: yup.string(),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  birthDate: yup.date().required("Birth date is required"),
  nationalId: yup.string().required("National ID is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  role: yup.string().oneOf(["teacher", "student", "admin"], "Invalid role"),
  teacherFields: yup.mixed().when("role", {
    is: "teacher",
    then: (schema) => schema.required("Teacher fields are required"),
  }),
  adminFields: yup.mixed().when("role", {
    is: "admin",
    then: (schema) => schema.required("Admin fields are required"),
  }),
});

// ایجاد کاربر جدید
export async function POST(req) {
  try {
    const body = await req.json();
    
    // اعتبارسنجی داده‌ها
    await userSchema.validate(body, { abortEarly: false });

    const { fullName, profile, password, phoneNumber, birthDate, nationalId, email, role, teacherFields, studentFields, adminFields } = body;
    console.log("strict kharab2")
    // بررسی اینکه ایمیل تکراری نباشد
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 400 });
    }

    // هش کردن رمز عبور
    const hashedPassword = await bcrypt.hash(password, 10);

    // ایجاد کاربر جدید
    const newUser = new User({
      fullName,
      profile,
      password: hashedPassword,
      phoneNumber,
      birthDate,
      nationalId,
      email,
      role:"student",
      isActive:true,
      courses:[],
      resetPasswordToken:"",
      resetPasswordExpires:"",
      registerDate:Date.now(),
      teacherFields: role === "teacher" ? teacherFields : undefined,
      adminFields: role === "admin" ? adminFields : undefined,
    });

    // ذخیره کاربر در دیتابیس
    await newUser.save();



    // بازگرداندن پاسخ موفقیت‌آمیز

    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: error.message || "Failed to create user" }, { status: 500 });
  }
}
