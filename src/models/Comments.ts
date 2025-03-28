import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courses",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware برای به‌روزرسانی تاریخ
commentsSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const Comments =
  mongoose.models.Comments || mongoose.model("Comments", commentsSchema);

export default Comments;
