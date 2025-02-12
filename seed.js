const fetch = require('node-fetch');

const courses = [
  {
    title: "Introduction to MongoDB",
    likedCount: 10,
    students: 100,
    disLikedCount: 2,
    cost: 49.99,
    lesson: "Getting Started with MongoDB"
  },
  {
    title: "Advanced MongoDB Techniques",
    likedCount: 15,
    students: 150,
    disLikedCount: 5,
    cost: 79.99,
    lesson: "Mastering MongoDB Aggregation"
  },
  {
    title: "Node.js with MongoDB",
    likedCount: 20,
    students: 200,
    disLikedCount: 3,
    cost: 59.99,
    lesson: "Building APIs with Node.js and MongoDB"
  },
  {
    title: "MongoDB for Data Science",
    likedCount: 12,
    students: 120,
    disLikedCount: 4,
    cost: 69.99,
    lesson: "Data Analysis with MongoDB"
  },
  {
    title: "MongoDB Security Best Practices",
    likedCount: 8,
    students: 80,
    disLikedCount: 1,
    cost: 89.99,
    lesson: "Securing Your MongoDB Database"
  },
  {
    title: "MongoDB Performance Tuning",
    likedCount: 18,
    students: 180,
    disLikedCount: 6,
    cost: 99.99,
    lesson: "Optimizing MongoDB Queries"
  },
  {
    title: "MongoDB and Cloud Integration",
    likedCount: 14,
    students: 140,
    disLikedCount: 2,
    cost: 109.99,
    lesson: "Using MongoDB with AWS and Azure"
  },
  {
    title: "MongoDB for Beginners",
    likedCount: 5,
    students: 50,
    disLikedCount: 0,
    cost: 39.99,
    lesson: "Understanding MongoDB Basics"
  }
];

async function seedDatabase() {
  for (const course of courses) {
    const response = await fetch('http://localhost:3000/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(course),
    });

    const data = await response.json();
    console.log('Course added:', data);
  }
}

seedDatabase();