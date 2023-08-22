
import {
  BsPlayCircle,
  BsCalendar2Check,
  BsCalendar2Week,
} from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import { dateToString } from "@/core/utils/dateConvertor";
import { dateForCourseCondition } from "@/core/utils/dateForCourseCondition";

const LeftBoxDetails = ({ studentsCount, endDate, startDate }) => {
  const studentNum = studentsCount + 247;
  const student = studentNum.toLocaleString("fa-IR");
  const { text, startText, endText } = dateForCourseCondition(
    startDate,
    endDate
  );

  const courseDetailsSalesBoxItems = [
    {
      id: 2,
      title: "تعداد دانشجو",
      desc: student,
      icon: <TbSchool />,
    },
    {
      id: 3,
      title: "وضعیت دوره",
      desc: text,
      icon: <BsPlayCircle />,
    },
    {
      id: 1,
      title: "شروع دوره",
      desc: startText,
      icon: <BsCalendar2Week />,
    },
    {
      id: 4,
      title: "پایان دوره",
      desc: endText,
      icon: <BsCalendar2Check />,
    },
  ];
  return (
    <ul className=" w-full flex md:flex-col ss:flex-row flex-wrap py-4 px-4 md:px-8 md:[&>li]:w-full ss:[&>li]:w-[48%] [&>li]:w-full md:justify-start ss:justify-between">
      {courseDetailsSalesBoxItems.map((item, index) => (
        <li
          key={item.id}
          className={`${
            index === courseDetailsSalesBoxItems.length - 1
              ? "md:border-b-0 border-b-[1px]"
              : "border-b-[1px]"
          } border-b-[1px] border-[#8f8f8f97] py-5 flex justify-between items-center`}>
          <div className="flex items-center">
            <i className="text-primary text-[20px]">{item.icon}</i>

            <span className="sss:text-[14px] text-[10px] pr-2 text-color-black">
              {item.title}
            </span>
          </div>
          <span className="sss:text-[14px] text-[10px] text-color-black">
            {item.desc}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default LeftBoxDetails;
