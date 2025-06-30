import mongoose from "mongoose";

const paragraphSchema = new mongoose.Schema({
  id: { type: String },
  text: { type: String },
  title: { type: String },
  details: {
    text: [{ type: String }],
    img: { type: String },
    numberList: [{ type: String }],
    bulletList: [{ title: { type: String }, text: { type: String } }],
    box: { type: String },
  },
});

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // عنوان خبر اجباری است
    trim: true, // حذف فضاهای خالی از ابتدا و انتها
  },
  category: {
    type: String,
    required: true, // دسته‌بندی خبر اجباری است
    trim: true,
    enum: ["Frontend", "Backend", "Seo & Design", "AI"],
  },
  image: {
    type: String,
    required: true, // تصویر خبر اجباری است
    trim: true,
  },
  text: {
    type: String,
    required: true, // متن خبر اجباری است
    trim: true,
  },
  paragraph: [paragraphSchema],
  createdAt: {
    type: Date,
    default: Date.now, // تاریخ ایجاد خبر به صورت خودکار تنظیم می‌شود
  },
  updatedAt: {
    type: Date,
    default: Date.now, // تاریخ به‌روزرسانی خبر به صورت خودکار تنظیم می‌شود
  },
});

// به‌روزرسانی `updatedAt` قبل از ذخیره
newsSchema.pre("save", function (next) {
  this.updatedAt = new Date(); // استفاده از new Date() به جای Date.now()
  next();
});

const News = mongoose.models.News || mongoose.model("News", newsSchema);

export default News;
