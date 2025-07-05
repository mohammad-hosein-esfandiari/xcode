import dbConnect from "@/lib/dbConnect..js";
import User from "../../../../models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as yup from "yup";
import { cookies } from "next/headers";

// Connect to database
await dbConnect();

// Define Yup validation schema
const userSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  profile: yup.string(),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  birthDate: yup.date().required("Birth date is required"),
  nationalId: yup.string().required("National ID is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  role: yup
    .string()
    .oneOf(["teacher", "student", "admin"], "Invalid role type"),
  teacherFields: yup.mixed().when("role", {
    is: "teacher",
    then: (schema) =>
      schema.required("Teacher specific information is required"),
  }),
  adminFields: yup.mixed().when("role", {
    is: "admin",
    then: (schema) => schema.required("Admin specific information is required"),
  }),
});

// Create new user
export async function POST(req) {
  try {
    const body = await req.json();

    // Validate request data
    await userSchema.validate(body, { abortEarly: false });

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

    // Check for existing user with the same email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Registration failed",
          error: "An account with this email already exists",
        },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user object
    const newUser = new User({
      fullName,
      profile,
      password: hashedPassword,
      phoneNumber,
      birthDate,
      nationalId,
      email,
      role: "student",
      isActive: true,
      courses: [],
      resetPasswordToken: "",
      resetPasswordExpires: "",
      registerDate: Date.now(),
      teacherFields: role === "teacher" ? teacherFields : undefined,
      adminFields: role === "admin" ? adminFields : undefined,
    });

    // Save user to database
    await newUser.save();

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: {
          id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in user registration:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Registration failed",
        error:
          error.errors ||
          error.message ||
          "An error occurred during registration",
      },
      { status: error.name === "ValidationError" ? 400 : 500 }
    );
  }
}
