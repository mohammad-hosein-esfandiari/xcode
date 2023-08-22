import CourseList from "@/components/pages/StudentPanel/courseList/CourseList";

const URL = process.env.NEXT_PUBLIC_BASE_URL
async function getPosts() {
  const res = await fetch(URL+"/course/getall",{cache:'no-store'});
  const posts = await res.json();
  return posts;
}

const CoursesListPage = async () => {
    const posts = await getPosts();
    return (
        <>
            <CourseList posts={posts.result}/>
        </>
    );
}

export default CoursesListPage;