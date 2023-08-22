'use client'
import { SlNotebook } from "react-icons/sl";
import { TbClock } from "react-icons/tb";
import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { convertTopicToObj } from "@/core/utils/topicApiConvertor";
const FirstRow = ({ title ,lesson }) => {
 
  const array = convertTopicToObj(lesson.topics)
  const newArray = array.flatMap(item=>{
    return item.details
  })
  const lessonCount = newArray.length.toLocaleString('fa-IR')
  return (
    <div>
      <ul className="flex items-center justify-between">
        <li className="">
          {" "}
          <ul className=" flex items-center pt-4">
            <li className="flex ml-[8px] items-center">
              <SlNotebook
                className="text-color-orange2 opacity-80 text-[11px]
           xs:text-[16px]
    "
              />
              <span
                className="text-[11px] text-gray-400 pr-2 flex items-center
            xs:text-[12px]
    ">
                {lessonCount} درس
              </span>
            </li>
            <li className="flex items-center ">
              <TbClock
                className="text-color-orange2 opacity-80 text-[10px]
              xs:text-[18px]"
              />
              <span
                className="text-[11px] text-gray-400 flex pr-2  items-center 
            xs:text-[12px]
    ">
                ۱۰ ساعت و ۳۴ دقیقه
              </span>
            </li>
            <li></li>
          </ul>
        </li>
      </ul>
      <h2 className="py-4 text-[18px] font-semibold pl-3 text-mode-color">{title.split('|')[0]}</h2>
    </div>
  );
};

export default FirstRow;
