import AnimTrue from "@/components/common/AnimTrue";
import ToastBox from "@/components/common/Toast/ToastBox";
import CourseDetails from "@/components/pages/CourseDetails/CourseDetails";
import { notFound } from "next/navigation";
const URL = "https://api.xcode.sepehracademy.ir/api"
async function getCourseById(slug) {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"courses/"+slug,{cache:'no-store'});
  if (!res.ok) return undefined;
  const courseDetail = await res.json();
  return courseDetail;
}
// async function getAllComments() {
//   const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"comments",{cache:'no-store'});
//   const allComments = await res.json();
//   return allComments;
// }
async function getPosts() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"courses",{cache:'no-store'});
  const posts = await res.json();
  return posts;
}
const CourseDetailPage = async ({params}) => {
  const courseDetail = await getCourseById(params.slug)
  if(!courseDetail) notFound()
  // const allComments = await getAllComments()
  const allComments = ["sssbsb","sdbsdbsb","sdbsdbdsb"]
  const posts = await getPosts();


  return (
    <main>
      <AnimTrue/>
      <CourseDetails posts={posts} allComments={allComments}  courseDetail={courseDetail}/>
    </main>
  );
};

export default CourseDetailPage;
