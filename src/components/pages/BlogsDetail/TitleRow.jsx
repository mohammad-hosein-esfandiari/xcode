import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

import { TbClock } from "react-icons/tb";
import instructor from "@/assets/images/instructor2.png";
const TitleRow = ({title}) => {
  return (
    <div className="py-8 md:mt-32 sm:mt-16 mt-8">
      <ul className="w-full flex-wrap flex justify-evenly">
        <li className="flex mt-2 text-[#919191] text-[20px] items-center ">
          <TbClock className=" opacity-80" />
          <span className=" text-[#919191] text-[15px] flex pr-2  items-center ">
            ۴ دقیقه خواندن
          </span>
        </li>
        <li className="flex mt-2 text-[#919191] text-[18px] items-center ">
          <BiCommentDetail className=" opacity-80" />
          <span className=" text-[#919191] text-[15px] flex pr-2  items-center ">
            ۲ کامنت
          </span>
        </li>
        <li className="flex mt-2 text-[#919191] text-[20px] items-center ">
          <AiOutlineCalendar className=" opacity-80" />
          <span className=" text-[#919191] text-[15px] flex pr-2  items-center ">
            ۲۹,۱۴۰۱ مهر
          </span>
        </li>
        <li className="flex mt-2 text-[#919191] text-[20px] items-center ">
          {/* <div className="w-[25px] h-[25px] rounded-full overflow-hidden">
            <Image
              src={instructor}
              className="w-full h-full object-cover object-center"
            />
          </div> */}
          <span className=" text-[#919191] text-[15px] flex pr-2  items-center ">
            استاد محسن اسفندیاری
          </span>
        </li>
      </ul>
      <h1 className="w-full font-bold md:px-32 sm:px-24 px-2 pt-8 md:text-[50px] sm:text-[40px] text-[25px] text-mode-color text-center">{title}</h1>
    </div>
  );
};

export default TitleRow;
