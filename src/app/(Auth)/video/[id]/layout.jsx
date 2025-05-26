import VideoRightTabs from "@/components/pages/Video/VideoRightTasb";
import { convertTopicToObj } from "@/core/utils/topicApiConvertor";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

async function getCourseByLesson(id) {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"lessons/"+id,{cache:'no-store'});
  const course = await res.json();
  return course;
}

const layout = async ({ children ,searchParams,params}) => {  
  const course = await getCourseByLesson(params.id)
  const lesson = course.lessons.filter((item)=>item._id === params.id)
  return (
    <main className="flex flex-col bg-linear1 justify-center relative w-full min-h-[100vh]">
            <Link
          href="/"
          className=" fixed text-[30px] z-10 text-primary hover:scale-[1.1] transition-all duration-500 top-3 left-3">
          <AiOutlineHome />
        </Link>
      <section className="xl:container  lg:px-[150px] ">
        <div className="ss:pl-[7px]  relative hlg:h-[650px] lg:h-[580px] h-[100vh]  flex ss:flex-row flex-col-reverse items-center justify-between ss:bg-linear4 bg-linear3 mx-auto sm:shadow-modeShadow lg:rounded-lg ">
          <div className="w-full h-full pl-8 py-8 ">
            <div className="bg-linear5 shadow-modeShadow h-full rounded-md overflow-hidden">
              {children}
            </div> 
          </div>
          <VideoRightTabs lesson={lesson[0]} lessonId={params.id} />
        </div>
      </section>
    </main>
  );
};

export default layout;