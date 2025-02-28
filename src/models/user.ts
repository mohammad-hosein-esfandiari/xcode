import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true }, 
  profile: { type: String, required: true },
  password: { type: String, required: true }, 
  phoneNumber: { type: String, required: true },
  birthDate: { type: Date, required: true }, 
  nationalId: { type: String, required: true },
  email: { type: String, required: true, unique: true }, 
  role: {
    type: String,
    required: true,
    enum: ["admin", "teacher", "student"],
  },
  // فیلدهای اختصاصی برای استاد
  teacherFields: {
    expertise: {
      type: String,
      enum: ["frontend", "backend", "seo & design", "ai"],
    }, 
    bio: { type: String }, 
  },
  // فیلدهای اختصاصی برای ادمین
  adminFields: {
    permissions: [{ type: String }], 
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
