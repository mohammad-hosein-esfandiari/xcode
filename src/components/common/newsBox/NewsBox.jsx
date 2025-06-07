import Image from "next/image";
import nodejsVdjango from "@/assets/images/nodejs-django.png";
import { CiCalendar } from "react-icons/ci";
import LinkCp from "../LinkCp";

const NewsBox = ({ image, title, _id, text, createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div
      className="hover:translate-y-[-10px] cursor-pointer transition-all duration-500 md:h-[445px] sm:h-[490px] flex flex-col justify-between shadow-modeShadow bg-box-color  rounded-lg 
    ">
      <div className="w-full md:h-[240px] border-b-[0.5px] border-[#bfbfbf4b] sm:h-[315px] ss:h-[220px] xs:h-[300px]">
        <Image
          className="rounded-t-lg h-full w-full object-cover object-center"
          src={image == "image.png" ? nodejsVdjango : image}
          alt="news"
          width={1000}
          height={200}
        />
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="flex-1">
          <h5 className="mb-2 font-semibold text-[18px] tracking-tight  text-mode-color ">
            {title}
          </h5>
        </div>
        <p className="mb-3 font-normal  leading-6  text-color-gray  line-clamp-3 text-[14px]">
          {text}
        </p>

        <div className=" flex justify-between flex-row-reverse ">
          <div className="flex items-center text-color-gray">
            <CiCalendar className="text-[16px] mr-2 text-color-orange" />
            <span className="text-[10px] pt-1">{date}</span>
          </div>
          <LinkCp
            href={"/blogs/" + _id}
            className="inline-flex text-primary group hover:underline hover:underline-offset-1 items-center text-sm font-medium text-center text-[12px] rounded-[4px]    ">
            more details
          </LinkCp>
        </div>
      </div>
    </div>
  );
};

export default NewsBox;
