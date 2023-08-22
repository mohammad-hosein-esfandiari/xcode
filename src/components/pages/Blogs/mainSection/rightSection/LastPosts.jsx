
import { IoCalendarNumberOutline } from "react-icons/io5";
import { postItems } from "@/constant/blogsPostItems";
import { dateForCourseCondition } from "@/core/utils/dateForCourseCondition";
import Link from "next/link";

const LastPosts = ({lastCourses}) => {
 
    return (
        <>
             {lastCourses.map((item, index) => (
        <Link 
        href={`/courses/${item._id}`}
          key={item._id}
          className={`${
            index < lastCourses.length - 1 && "border-b-[1px] border-[#77777789]"
          }  flex items-center mb-4 pb-4 cursor-pointer hover:pr-4 transition-all duration-500 hover:border-primary group`}>
          <div className=" h-[60px] w-[20%] rounded-md overflow-hidden object-cover object-center">
            <img
              src={item.lesson.image}
              width={500}
              height={500}
              alt="student"
              className="h-full rounded-md  object-cover object-center"
            />
          </div>
          <div className=" flex flex-col justify-between  flex-1 pr-4 text-[14px]">
            <div className="flex text-[#8d8d8db9] ">
              <IoCalendarNumberOutline className="text-[18px] ml-2 " />
              <span>{dateForCourseCondition(item.startDate).startText}</span>
            </div>
            <span className="text-mode-color group-hover:text-primary transition-all duration-500">
              {item.title.split('|')[0]}
            </span>
          </div>
        </Link>
      ))}
        </>
    );
}

export default LastPosts;