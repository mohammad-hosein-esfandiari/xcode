import Image from "next/image";
import bannercourse from "@/assets/images/bannercourse.png";

import { SlNotebook } from "react-icons/sl";
import { TbClock } from "react-icons/tb";

const FirstLeftBox = () => {
  return (
    <ul
      className="cursor-pointer sm:mx-0 mx-auto group relative transition-all duration-500 bg-box-color p-4 shadow-md rounded-md  
        w-[200px] h-fit
        xs:w-[70%] xs:h-fit
        sm:w-[345px] sm:h-fit
        sss:w-[100%] sss:h-fit
        
        ">
      <li className="absolute  w-[130px] h-[130px] z-10 opacity-70 left-[-30px] top-[-60px] md:block hidden">
        <svg
        className="animate-spinning "
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"

          viewBox="0 0 192 191">
          <defs>
            <pattern
              id="pattern"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 130 130">
              <image
                width="130"
                height="130"
                xlinkHref="data:image/png;base64,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"></image>
            </pattern>
          </defs>
          <path fill="url(#pattern)" d="M0 0H192V191H0z" opacity="0.84"></path>
        </svg>
      </li>
      <li className=" h-[50%] overflow-hidden rounded-md ">
        <Image
          src={bannercourse}
          className="w-full duration-500 group-hover:scale-[1.1] transition-all"
          alt="videCall"
        />
      </li>
      <li className=" h-[50%] px-2 ">
        <ul className=" flex items-center pt-4">
          <li className="flex pr-[14px] items-center">
            <SlNotebook
              className="text-color-orange2 text-[10px]
                xs:text-[24px]
                "
            />
            <span
              className="text-[8px] text-gray-500 pl-2 flex items-center
                xs:text-[14px]
                ">
              Lesson 32
            </span>
          </li>
          <li className="flex items-center ">
            <TbClock
              className="text-color-orange2 text-[10px]
                xs:text-[24px]"
            />
            <span
              className="text-[8px] flex pl-2 text-gray-500 items-center 
                xs:text-[14px]
                ">
              10 Hours & 34 Minutes
            </span>
          </li>
          <li></li>
        </ul>
        <h1
          className=" flex text-mode-color transition-all duration-500  hover:text-indigo-600 items-center py-5
          font-bold text-[18px]
            ">
          How to write as a professional author
        </h1>
        <p
          className=" font-normal mb-2  leading-6  text-color-gray  line-clamp-3 text-[14px]
     
            ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto tempore est commodi accusantium quae sint suscipit tenetur placeat sunt voluptatem, dolorum dolor beatae velit laborum necessitatibus esse delectus adipisci?
        </p>
      </li>
    </ul>
  );
};

export default FirstLeftBox;
