import mongoose, { Document, Schema } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  likedCount: number;
  students: number;
  disLikedCount: number;
  cost: number;
  lesson: string;
}

const CourseSchema: Schema = new Schema({
  title: { type: String, required: true },
  likedCount: { type: Number, default: 0 },
  students: { type: Number, default: 0 },
  disLikedCount: { type: Number, default: 0 },
  cost: { type: Number, required: true },
  lesson: { type: String, required: true },
});

const Course = mongoose.models.Course || mongoose.model<ICourse>('Course', CourseSchema);

export default Course;