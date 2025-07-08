import dbConnect from "@/lib/dbConnect";
import User from "../../../../models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req, { params }) {
  try {
    await dbConnect();
    const { password } = await req.json();
    const { token } = params;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }, // هنوز منقضی نشده
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // هش کردن رمز جدید
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    // پاک کردن توکن و تاریخ انقضا
    user.resetPasswordToken = "";
    user.resetPasswordExpires = null;

    await user.save();

    return NextResponse.json(
      { message: "Password changed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
