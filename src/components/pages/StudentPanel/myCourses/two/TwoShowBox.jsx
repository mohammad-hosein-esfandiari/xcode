"use client";
import { IoCloseCircleOutline } from "react-icons/io5";
import LastRow from "../four/LastRow";
import SecondRow from "../four/SecondRow";
import FirstRow from "./FirstRow";
import { useGridStudentPanel } from "@/context/studentPanelGridShow";
import Link from "next/link";
import { useUrlArray } from "@/hooks/useUrlArray";

const TwoShowBox = ({lessons, title, _id, likedCount, students, cost ,teacher,endDate,startDate,image,description,duration}) => {
  const {path} = useUrlArray()
  const grid = useGridStudentPanel((state) => state.grid);
  return (
    <Link href={`/courses/${_id}`} className="bg-linear5 text-mode-color relative transition-all duration-300 cursor-pointer hover:scale-[1.01] shadow-modeShadow rounded-lg md:p-6 p-4 flex flex-col justify-between  ">
      {grid == 6 && path.includes("my-courses")  && (
        <div  className="text-red-500 absolute lg:right-3 lg:top-3 right-5 top-5 lg:bg-transparent bg-white rounded-full hover:scale-[1.1] transition-all duration-300 text-[20px] cursor-pointer flex justify-center items-center">
          <IoCloseCircleOutline className="hover:scale-[1.5] transition-all duration-300" />
        </div>
      )}

      <div>
        <FirstRow endDate={endDate} duration={duration} startDate={startDate} lessons={lessons} image={image} />
        <h3 className="ss:py-4 py-2  sm:text-[18px] ">
          {title}
        </h3>
        <div className="ss:block hidden">
          <p className="  line-clamp-2   text-color-gray font-normal  leading-6 text-[12px]">
            {description}
          </p>
        </div>
        <div className="my-4 grid grid-cols-2">
          <SecondRow  likeCount={likedCount}/>
          <div className="text-[11px] xs:text-[12px] text-gray-400 group-hover:text-white">
            <span>teacher : </span>
            <span>{teacher.fullName}</span>
          </div>
        </div>
      </div>
      <LastRow cost={cost} students={students} />
    </Link>
  );
};

export default TwoShowBox;
