import VideoRightTabs from "@/components/pages/Video/VideoRightTasb";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { getCourseAndLesson } from "./actions";

const layout = async ({ children, params }) => {
  const { course, lesson } = await getCourseAndLesson(params.id);

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
          <VideoRightTabs lesson={lesson} lessonId={params.id} />
        </div>
      </section>
    </main>
  );
};

export default layout;
