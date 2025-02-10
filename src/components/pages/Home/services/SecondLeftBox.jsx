import Image from "next/image";

import { HiArrowLongRight } from "react-icons/hi2";
import PrimaryBtn from "@/components/common/PrimaryBtn";

import instructor from '@/assets/images/instructor2.png'

const SecondLeftBox = () => {
  return (
    <ul
      className="cursor-pointer group mx-auto w-[200px] hover:scale-[1.01] transition-all duration-500 bg-box-color p-4 shadow-md rounded-md mt-10 
        lg:mt-[55px] lg:ml-[40px] 
        sm:mx-0 
        sss:w-[250px] sss:h-[250px]
        ">
      <li className=" h-[33.33%] flex justify-between items-center">
        <span className="text-primary sss:text-[18px] text-[13px]">
        Hamed Nazari
        </span>
        <div className="h-[55px] w-[55px] bg-color-orange rounded-full relative">
          <Image src={instructor} width="auto" height="auto"  alt="instrauctor" />
          <span className=" bg-green-500 border-[1px] border-white absolute w-4 h-4 rounded-full bottom-1 "></span>
        </div>
      </li>
      <li className=" h-[33.33%] flex flex-col justify-center">
        <h1 className="sss:text-[20px] sss:pt-0 pt-4  mb-2 font-bold text-mode-color">
          UI/UX Design Workshop
        </h1>
        <h2 className=" text-zinc-500 sss:text-[16px] sss:mb-0 text-[12px] mb-4">
          Today at 6 am
        </h2>
      </li>
      <li className=" h-[33.33%] flex items-center">
        <PrimaryBtn
          href="/"
          text="Start Your Journey"
          icon={<HiArrowLongRight />}
        />
      </li>
    </ul>
  );
};

export default SecondLeftBox;
