'use server';

const courseCache = new Map();

export async function getCourseAndLesson(id) {
  // Check cache first
  if (courseCache.has(id)) {
    return courseCache.get(id);
  }

  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "lessons/" + id, { cache: 'no-store' });
  const course = await res.json();
  const lesson = course.lessons.filter((item) => item._id === id)[0];
  const data = { course, lesson };
  courseCache.set(id, data);
  
  return data;
} 