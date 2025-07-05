import CourseList from "@/components/pages/StudentPanel/courseList/CourseList";
import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course";

async function getPosts() {
  await dbConnect();
  const posts = await Course.find({});
  return JSON.parse(JSON.stringify(posts));
}

const CoursesListPage = async () => {
    const posts = await getPosts();
    return (
        <>
            <CourseList posts={posts}/>
        </>
    );
}

export default CoursesListPage;
