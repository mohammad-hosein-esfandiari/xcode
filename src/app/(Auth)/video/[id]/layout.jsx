import VideoRightTabs from "@/components/pages/Video/VideoRightTasb";
import { convertTopicToObj } from "@/core/utils/topicApiConvertor";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
const URL = process.env.NEXT_PUBLIC_BASE_URL
async function getLessons(id) {
  const res = await fetch(URL+"/lesson/"+id,{cache:'no-store'});
  const lessons = await res.json();
  return lessons;
}
const layout = async ({ children ,searchParams,params}) => {
  const lessons = await getLessons(params.id)
  const headline = convertTopicToObj(lessons.result.topics);
    console.log(lessons.result.courses[0])
  return (
    <main className="flex flex-col bg-linear1 justify-center relative w-full min-h-[100vh]">
            <Link
          href="/"
          className=" fixed text-[30px] z-10 text-primary hover:scale-[1.1] transition-all duration-500 top-3 left-3">
          <AiOutlineHome />
        </Link>
      <section className="xl:container  lg:px-[150px] ">
        <div className="ss:pl-[7px]  relative hlg:h-[650px] lg:h-[580px] h-[100vh]  flex ss:flex-row flex-col-reverse items-center justify-between ss:bg-linear4 bg-linear3 mx-auto sm:shadow-modeShadow lg:rounded-lg ">
          <VideoRightTabs lessonName={lessons.result.lessonName} lessonId={params.id} headline={headline} />
          <div className="w-full h-full pl-8 py-8 ">
            <div className="bg-linear5 shadow-modeShadow h-full rounded-md overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default layout;