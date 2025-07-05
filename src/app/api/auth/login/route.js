import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect..js";
import User from "../../../../models/User";
import jwt from "jsonwebtoken"; // For token generation

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    // Connect to database
    await dbConnect();

    // Find user by email
    const user = await User.findOne({ email });

    // If user not found, return error
    if (!user) {
      return NextResponse.json(
        { message: "No user found with this email." },
        { status: 404 }
      );
    }

    // Compare provided password with hashed password in database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password is invalid, return error
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid password." },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email }, // payload
      process.env.NEXT_PUBLIC_JWT_SECRET, // secret key
      { expiresIn: "1h" } // token expiration time
    );

    // Return user info and token in response
    const { password: _, ...userWithoutPassword } = user.toObject(); // Remove password from user data
    return NextResponse.json({
      user: userWithoutPassword,
      token, // Include token in response
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "An error occurred on the server." },
      { status: 500 }
    );
  }
}
