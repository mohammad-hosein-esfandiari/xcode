"use client";
import { useSearchParams } from "next/navigation";
import VideoItem from "./VideoItem";

const VideoRightTabs = ({ headline,lessonId,lessonName }) => {
  const season = useSearchParams().get("season");
  const videoId = useSearchParams().get("video");

  return (
    <div className="pr-8 pl-2 py-8 w-[400px]  h-full">
      <div className="overflow-y-auto bg-linear5 shadow-modeShadow scrollbar-hide rounded-md h-full ">
        <div className="p-4 text-center text-primary border-b-[1px] mb-1  border-[#b6b6b663] font-bold  ">
            ویدیو های {headline[season].headline} درس {lessonName}
        </div>
        {headline[season].details.map((item) => (
          <VideoItem videoId={videoId} season={season} lessonId={lessonId} key={item.title + item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default VideoRightTabs;
