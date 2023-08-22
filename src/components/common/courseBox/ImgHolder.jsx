'use client'
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

const ImgHolder = ({versian,img,level}) => {


  return (
    <div className={`overflow-hidden ${versian === 1 ? 'w-full  h-[200px] sss:h-[210px] xs:h-[280px] ss:h-[200px]  sm:h-1/2 hlg:h-[220px]   relative bg-gray-200' : 'ss:w-1/2  overflow-hidden relative bg-gray-200 '} `}>
      <Image
        src={img}
        alt="courses"
        width={200}
        height={200}
        className="h-full w-full object-cover object-center  transition-all duration-500"
      />
      <span className="absolute top-6 text-[12px] text-gray-500 left-0 py-1 text-center rounded-r-[4px] bg-[#ffffffcf] px-2">
      {level}
      </span>

    </div>
  );
};


export default ImgHolder;
