import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true }, // نام کاربر
  profile: { type: String, required: true }, // عکس کاربر
  password: { type: String, required: true }, // رمز عبور حساب
  phoneNumber: { type: String, required: true }, // شماره تلفن کاربر
  birthDate: { type: Date, required: true }, // تاریخ تولد کاربر
  nationalId: { type: String, required: true }, // کدملی کاربر
  email: { type: String, required: true, unique: true }, // ایمیل کاربر
  role: {
    type: String,
    required: true,
    enum: ["admin", "teacher", "student"], // نقش کاربر
  },
  // فیلدهای اختصاصی برای استاد
  teacherFields: {
    expertise: {
      type: String,
      enum: ["frontend", "backend", "seo & design", "ai"],
    }, // تخصص استاد
    bio: { type: String }, // بیوگرافی استاد
  },
  // فیلدهای اختصاصی برای دانشجو
  studentFields: {
    grade: { type: String }, // مقطع تحصیلی دانشجو
  },
  // فیلدهای اختصاصی برای ادمین
  adminFields: {
    permissions: [{ type: String }], // دسترسی‌های ادمین
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
