import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true }, // عنوان درس
  link: { type: String, required: true }, // لینک درس
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true }, // عنوان دوره
  likedCount: { type: Number, default: 0 }, // تعداد لایک‌ها
  disLikedCount: { type: Number, default: 0 }, // تعداد دیس‌لایک‌ها
  students: [
    {
      type:String
      // type: mongoose.Schema.Types.ObjectId,
      // ref: 'User', // ارجاع به مدل کاربران (اگر مدل User داری)
    },
  ], // لیست کاربران ثبت‌نام‌کرده در دوره
  cost: { type: Number, required: true }, // هزینه دوره
  image: { type: String, required: true }, // تصویر دوره
  description: { type: String, required: true }, // توضیحات دوره
  teacher: {
    type:String
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'User', // ارجاع به مدل کاربران (اگر مدل User داری)
    // required: true,
  }, // استاد دوره
  lessons: [lessonSchema], // لیست درس‌های دوره
});

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

export default Course;