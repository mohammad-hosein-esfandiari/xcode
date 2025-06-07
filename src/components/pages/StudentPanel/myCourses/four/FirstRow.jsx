import formatDuration from "@/core/utils/timeFormat";
import { convertTopicToObj } from "@/core/utils/topicApiConvertor";
import { SlNotebook } from "react-icons/sl";
import { TbClock } from "react-icons/tb";

const FirstRow = ({lessons,title,duration}) => {
  // const array = convertTopicToObj(lesson.topics)
  // const newArray = array.flatMap(item=>{
  //   return item.details
  // })
  const time = formatDuration(duration)
  const lessonCount = lessons.length
  return (
    <>
      <ul className="flex items-center pt-4 justify-between">
        <li className="">
          {" "}
          <ul className=" flex items-center">
            <li className="flex items-center">
              <SlNotebook
                className="text-color-orange2 opacity-80 text-[11px]
           xs:text-[16px]
    "
              />
              <span
                className="text-[11px] group-hover:text-white text-gray-400 pl-2 flex items-center
            xs:text-[12px]
    ">
                {lessonCount} Lesson
              </span>
            </li>
            <li className="flex items-center ml-2 ">
              <TbClock
                className="text-color-orange2 opacity-80 text-[10px]
              xs:text-[18px]"
              />
              <span
                className="text-[11px] group-hover:text-white text-gray-400 flex pl-2  items-center 
            xs:text-[12px]
    ">
              {time}
              </span>
            </li>
            <li></li>
          </ul>
        </li>
        <li className=" pt-3 text-[20px] text-mode-color ">
          {/* <AiOutlineHeart/> */}
        </li>
      </ul>
      <h2 className="py-4 text-mode-color sm:text-[18px] ">
        {title}
      </h2>
    </>
  );
};

export default FirstRow;
