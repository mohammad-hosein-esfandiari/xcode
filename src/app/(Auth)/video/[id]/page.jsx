import AnimTrue from "@/components/common/AnimTrue";
import InfoEmployee from "@/components/pages/Video/InfoEmployee";
import { convertTopicToObj } from "@/core/utils/topicApiConvertor";

const URL = process.env.NEXT_PUBLIC_BASE_URL;
async function getLessons(id) {
  const res = await fetch(URL + "/lesson/" + id, { cache: "no-store" });
  const lessons = await res.json();
  return lessons;
}

async function getCourse(id) {
  const res = await fetch(URL + "/course/" + id, { cache: "no-store" });
  const course = await res.json();
  return course;
}

const VideoPage = async ({ searchParams, params }) => {
  const lessons = await getLessons(params.id);
  const course = await getCourse(lessons.result.courses[0]._id);
  const headline = convertTopicToObj(lessons.result.topics);
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
        <InfoEmployee headlineText={headlineText} text={text.title} title={course.result.title} lessonName={course.result.lesson?.lessonName} teacherEmail={course.result.teacher.email} teacherProfile={course.result.teacher.profile} teacherName={course.result.teacher.fullName} />
        
      </div>
    </div>
  );
};

export default VideoPage;
