import Image from "next/image";
import Link from "next/link";

const VideoItem = ({video,title,lessonId,season,videoId}) => {
  const lastIndex = video.lastIndexOf("/")
  const videoLink = video.substring(lastIndex+1)
  return (
    <Link href={`/video/${lessonId}?video=${videoLink}&season=${season}`} className={` cursor-pointer border-b-[1px]   border-[#b6b6b663]  transition-all duration-300 mb-[2px] ${videoId == videoLink ? "bg-primary scale-[0.95] rounded-md text-white": "text-mode-color hover:scale-[0.97]"}  h-[70px] p-1 grid grid-cols-3`}>
      <div className=" h-full  overflow-hidden rounded-md ">
        <Image
          src={`https://img.youtube.com/vi/${videoLink}/0.jpg`}
          className=" w-full h-full object-cover object-center "
          width={500}
          alt="yuotube"
          height={500}
        />
      </div>
      <div className="pr-1 mr-2 border-r-[1px] border-[#b6b6b663] flex items-center col-span-2">
        <h3 className=" pr-1 text-[12px] font-bold">
        {title}
        </h3>
      </div>
    </Link>
  );
};

export default VideoItem;
