import AnimTrue from "@/components/common/AnimTrue";
import InfoEmployee from "@/components/pages/Video/InfoEmployee";
import { getCourseAndLesson } from "./actions";

const VideoPage = async ({ searchParams, params }) => {
  const { course, lesson } = await getCourseAndLesson(params.id);
  const season = searchParams.season;
  const video = searchParams.video;

  return (
    <div className="flex flex-col justify-between h-full"> 
      <AnimTrue/>
      <div className="relative w-[100%] border-b-[1px] border-[#b6b6b663] hlg:pb-[46.25%] pb-[55.25%] h-0 ">
        <iframe
          className=" absolute top-0 left-0 w-full h-full" 
          src={`https://www.youtube.com/embed/${video}`}
          title="YouTube video player"
          allowFullScreen={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      <div className="w-full text-mode-color font-bold h-full  flex items-center ">
        <InfoEmployee 
          title={course.title} 
          lessonName={lesson.title} 
          teacherExpertise={course.teacher.teacherFields.expertise}
          teacherProfile={course.teacher.profile} 
          teacherName={course.teacher.fullName} 
        />
      </div>
    </div>
  );
};

export default VideoPage;
