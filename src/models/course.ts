import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  title: { type: String, required: true }, // عنوان درس
  details: [{ title: { type: String }, link: { type: String, required: true } }], // لینک درس
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true }, // عنوان دوره
  likedCount: { type: Number, default: 0 }, // تعداد لایک‌ها
  disLikedCount: { type: Number, default: 0 }, // تعداد دیس‌لایک‌ها
  students: [
    {
      type: String, // یا type: mongoose.Schema.Types.ObjectId برای ارجاع به کاربران
    },
  ], // لیست کاربران ثبت‌نام‌کرده در دوره
  cost: { type: Number, required: true }, // هزینه دوره
  image: { type: String, required: true }, // تصویر دوره
  description: { type: String, required: true }, // توضیحات دوره
  duration: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: ["frontend", "backend", "python", "miscellaneous"],
  },
  level: {
    type: String,
    required: true,
    enum: ["preliminary", "intermediate", "advanced"], // فقط یکی از این سه مقدار مجاز است
  }, // سطح دوره
  teacher: {
    type: String, // یا type: mongoose.Schema.Types.ObjectId برای ارجاع به کاربران
  }, // استاد دوره
  lessons: [lessonSchema], // لیست درس‌های دوره
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;
