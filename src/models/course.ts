import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  title: { type: String, required: true },
  details: [{ title: { type: String }, video: { type: String, required: true } }],
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  likedCount: { type: Number, default: 0 },
  disLikedCount: { type: Number, default: 0 },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  cost: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true }, // مدت زمان به ساعت
  startDate: { 
    type: Date, 
    required: true,
    validate: {
      validator: function(value) {
        // تاریخ شروع نباید از تاریخ پایان بزرگتر باشد
        return !this.endDate || value <= this.endDate;
      },
      message: 'Start date must be before or equal to end date'
    }
  },
  endDate: { 
    type: Date,
    required: true 
  },
  category: {
    type: String,
    required: true,
    enum: ["frontend", "backend", "python", "miscellaneous"],
  },
  level: {
    type: String,
    required: true,
    enum: ["preliminary", "intermediate", "advanced"],
  },
  teacher: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lessons: [lessonSchema],
}, {
  timestamps: true // اضافه کردن createdAt و updatedDate
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;