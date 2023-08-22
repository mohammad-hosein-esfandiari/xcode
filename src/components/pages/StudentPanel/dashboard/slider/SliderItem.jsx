"use client";
import { dateForCourseCondition } from "@/core/utils/dateForCourseCondition";
import { convertTopicToObj } from "@/core/utils/topicApiConvertor";
import Link from "next/link";
import { AiFillStar, AiOutlineClockCircle } from "react-icons/ai";
import { GoBook } from "react-icons/go";
const SliderItem = ({
  title,
  lesson,
  cost,
  endDate,
  startDate,
  _id,
  likedCount,
}) => {
  const array = convertTopicToObj(lesson.topics);
  const newArray = array.flatMap((item) => {
    return item.details;
  });
  const lessonCount = newArray.length.toLocaleString("fa-IR");

  const { text, startText, endText } = dateForCourseCondition(
    startDate,
    endDate
  );

  const p2e = (s) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
  const date1 = startText.split("/")[1];
  const date2 = endText.split("/")[1];
  const date = p2e(date2) - p2e(date1);
  const likeFunc = () => {
    if (likedCount + 36 >= 50) {
      return 5;
    } else {
      let a = likedCount + 36 * 5;
      return a / 50;
    }
  };
  const like = likeFunc().toFixed(2);
  const likeCount = like.toLocaleString("fa-IR");
  return (
    <Link
      href={"/courses/" + _id}
      className="shadow-md hover:scale-[1.05] flex flex-col justify-between h-[150px] bg-primary hover:bg-[#4b4e72] text-white transition-all duration-300 rounded-lg px-6 py-4 cursor-pointer">
      <h2 className="sm:text-[16px] text-[14px] font-bold">{title.split('|')[0]}</h2>
      <div>
        <ul className="mt-4 pb-2 border-b-[1px] flex items-center justify-between pl-8 text-[13px]">
          <li className="flex items-center ">
            <AiOutlineClockCircle className="sm:text-[18px] text-[14px] ml-2" />
            <span className="">{date.toLocaleString("fa-IR")} ماه</span>
          </li>
          <li className="flex items-center ">
            <GoBook className="sm:text-[18px] text-[14px] ml-2" />
            <span>{lessonCount} درس</span>
          </li>
        </ul>
        <ul className="flex mt-2 items-center justify-between">
          <li className="text-[13px]">
            <span className="ml-1">قیمت:</span>
            {cost ? (
              <>
                {" "}
                <span className="ml-1">{cost.toLocaleString("fa-IR")}</span>
                <span>تومان</span>
              </>
            ) : (
              <span className="ml-1 text-red-500">رایگان</span>
            )}
          </li>
          <li className="flex items-center text-[13px]">
            <span>{likeCount}</span>
            <AiFillStar className="text-[#FEC60F]" />
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default SliderItem;
