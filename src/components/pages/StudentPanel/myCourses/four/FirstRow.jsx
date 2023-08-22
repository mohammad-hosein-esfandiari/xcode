import { convertTopicToObj } from "@/core/utils/topicApiConvertor";
import { SlNotebook } from "react-icons/sl";
import { TbClock } from "react-icons/tb";

const FirstRow = ({lesson,title}) => {
  const array = convertTopicToObj(lesson.topics)
  const newArray = array.flatMap(item=>{
    return item.details
  })
  const lessonCount = newArray.length.toLocaleString('fa-IR')
  return (
    <>
      <ul className="flex items-center pt-2 justify-between">
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
                className="text-[11px] group-hover:text-white text-gray-400 pr-2 flex items-center
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
                className="text-[11px] group-hover:text-white text-gray-400 flex pr-2  items-center 
            xs:text-[12px]
    ">
                ۱۰ ساعت و ۳۴ دقیقه
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
        {title.split('|')[0]}
      </h2>
    </>
  );
};

export default FirstRow;
