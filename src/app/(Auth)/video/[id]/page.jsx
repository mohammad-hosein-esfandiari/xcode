import AnimTrue from "@/components/common/AnimTrue";
import InfoEmployee from "@/components/pages/Video/InfoEmployee";
import { convertTopicToObj } from "@/core/utils/topicApiConvertor";


async function getCourseByLesson(id) {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "lessons/" + id, { cache: "no-store" });
  const course = await res.json();
  return course;
}

const VideoPage = async ({ searchParams, params }) => {
  const course = await getCourseByLesson(params.id);
  // const headline = convertTopicToObj(lessons.topics);
  const season = searchParams.season;
  const video = searchParams.video;
  const text = headline[season].details.find((item) =>
    item.video.includes(video)
  );

  const headlineText = headline[season].headline

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
        <InfoEmployee headlineText={headlineText} text={text.title} title={course.title} lessonName={course.lesson?.lessonName} teacherEmail={course.teacher.email} teacherProfile={course.teacher.profile} teacherName={course.teacher.fullName} />
        
      </div>
    </div>
  );
};

export default VideoPage;
