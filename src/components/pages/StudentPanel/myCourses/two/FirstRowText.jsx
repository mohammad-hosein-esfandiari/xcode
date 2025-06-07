import { dateForCourseCondition } from "@/core/utils/dateForCourseCondition";
import formatDuration from "@/core/utils/timeFormat";
import { convertTopicToObj } from "@/core/utils/topicApiConvertor";
import { SlNotebook } from "react-icons/sl";
import { TbClock } from "react-icons/tb";

const FirstRowText = ({lessons,endDate,startDate,duration}) => {
  // const array = convertTopicToObj(lesson.topics)
  // const newArray = array.flatMap(item=>{
  //   return item.details
  // })
  const lessonCount = lessons.length
  const { text, startText, endText } = dateForCourseCondition(
    startDate,
    endDate
  );
  const time = formatDuration(duration)
    return (
        <div className={` flex-1 sm:h-[150px] lg:px-0 px-2 lg:py-0 py-2  lg:pl-4`}>
        <ul className={` lg:flex-col flex  h-full py-2 sm:justify-between`}>
          <li className="flex items-center">
            <SlNotebook
              className="text-color-orange2 opacity-80 text-[11px] xs:text-[16px]"
            />
            <span
              className="text-[11px] group-hover:text-white text-gray-400 pl-2 flex items-center xs:text-[12px]">
              {lessonCount} Lessons
            </span>
          </li>
          <li className="flex items-center ">
            <TbClock
              className="text-color-orange2 opacity-80 text-[14px] xs:text-[18px]"
            />
            <span
              className="text-[11px] group-hover:text-white text-gray-400 flex pl-2  items-center xs:text-[10px]">
            {time}
            </span>
          </li>
          <li className="text-[11px] lg:block hidden xs:text-[12px] text-gray-400 group-hover:text-white">
              <span>Start Date : </span>
              <span>{startText}</span>
          </li>
          <li className="text-[11px] xs:text-[12px] sm:block hidden text-gray-400 group-hover:text-white">
              <span>End Date : </span>
              <span>{endText}</span>
          </li>
          
        </ul>
  </div>
    );
}

export default FirstRowText;