import pic from "@/assets/images/bannercourse.png";
import { textToObjectBlogs } from "@/core/utils/blogsAoiConvertor";
import Image from "next/image";
import Link from "next/link";

import { CiCalendar } from "react-icons/ci";
import LinkCp from "../LinkCp";

const NewsBox = ({ image, title, _id, text }) => {
  const details = textToObjectBlogs(text);
  const textString = details[0].details.text.join("");
  return (
    <div
      className="hover:translate-y-[-10px] cursor-pointer transition-all duration-500 md:h-[445px] sm:h-[490px] flex flex-col justify-between shadow-modeShadow bg-box-color  rounded-lg 
    ">
      <div className="w-full md:h-[240px] border-b-[0.5px] border-[#bfbfbf4b] sm:h-[315px] ss:h-[220px] xs:h-[300px]">
        <Image
          className="rounded-t-lg h-full w-full object-cover object-center"
          src={image}
          alt="news"
          width={1000}
          height={200}
        />
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="flex-1">
          <h5 className="mb-2 font-semibold text-[18px] tracking-tight  text-mode-color ">
            {/* آموزش نحوه نوشتن به عنوان یک کد نویس حرفه ای */}
            {title.split("|")[0]}
          </h5>
        </div>
        <p className="mb-3 font-normal  leading-6  text-color-gray  line-clamp-3 text-[14px]">
          {textString}
        </p>

          <div className=" flex justify-between flex-row-reverse ">
            <LinkCp
              href={"/blogs/" + _id}
              className="inline-flex text-primary group hover:underline hover:underline-offset-1 items-center text-sm font-medium text-center text-[12px] rounded-[4px]    ">
              جزئیات بیشتر
            </LinkCp>
            <div className="flex items-center text-color-gray">
              <CiCalendar className="text-[16px] ml-2 text-color-orange" />
              <span className="text-[10px] pt-1">12/2/1401</span>
            </div>
          </div>

      </div>
    </div>
  );
};

export default NewsBox;
