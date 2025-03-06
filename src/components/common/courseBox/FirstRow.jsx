'use client'
import { SlNotebook } from "react-icons/sl";
import { TbClock } from "react-icons/tb";
import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { convertTopicToObj } from "@/core/utils/topicApiConvertor";
import formatDuration from "@/core/utils/timeFormat"
const FirstRow = ({ title ,lessons,duration }) => {
  const courseDuration = formatDuration(duration)
  return (
    <div>
      <ul className="flex items-center justify-between">
        <li className="">
          {" "}
          <ul className=" flex items-center pt-4">
            <li className="flex mr-[8px] items-center">
              <SlNotebook
                className="text-color-orange2 opacity-80 text-[11px]
           xs:text-[16px]
    "
              />
              <span
                className="text-[11px] text-gray-400 pl-2 flex items-center
            xs:text-[12px]
    ">
                {lessons.length} Lessons
              </span>
            </li>
            <li className="flex items-center ">
              <TbClock
                className="text-color-orange2 opacity-80 text-[10px]
              xs:text-[18px]"
              />
              <span
                className="text-[11px] text-gray-400 flex pl-2  items-center 
            xs:text-[12px]
    ">
                {courseDuration}
              </span>
            </li>
            <li></li>
          </ul>
        </li>
      </ul>
      <h2 className="py-4 text-[18px] font-semibold pl-3 text-mode-color">{title}</h2>
    </div>
  );
};

export default FirstRow;
