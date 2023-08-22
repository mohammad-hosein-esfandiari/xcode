"use client";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useGridStudentPanel } from "@/context/studentPanelGridShow";
import { dateToString } from "@/core/utils/dateConvertor";
import { useModalAccept } from "@/context/modalBox";
import Link from "next/link";
import { useUrlArray } from "@/hooks/useUrlArray";

const SixShowBox = ({
  lesson,
  teacher,
  startDate,
  endDate,
  capacity,
  cost,
  _id,
}) => {
  const { path } = useUrlArray();
  const setInfo = useModalAccept((state) => state.setInfo);
  const setIsShowModal = useModalAccept((state) => state.setIsShowModal);
  const setModalText = useModalAccept((state) => state.setModalText);
  const grid = useGridStudentPanel((state) => state.grid);
  let startDateNum = dateToString(startDate);
  let endDateNum = dateToString(endDate);

  const deleteCourse = (event) => {
    event.preventDefault();
    setModalText("از حذف دوره اطمینان دارید؟");
    setIsShowModal(true);
    setInfo(_id);
  };
  return (
    <Link
      className="py-2 shadow-boxShadow hover:scale-[1.005] transition-all duration-300 hover:bg-primary rounded-lg  bg-[#fbfbfbae] px-2"
      href={`/courses/${_id}`}>
      <ul
        className={`w-full h-full grid  hover:text-white  cursor-pointer ${
          grid == 6 && path.includes('courses-list') ? "sm:grid-cols-6" : "sm:grid-cols-7"
        }  grid-cols-3 [ [&>li]:items-center [&>li]:justify-center   text-[14px]  [&>li]:text-center  `}>
        <li className="flex">{lesson.lessonName}</li>
        <li className="flex">{teacher.fullName}</li>
        <li className="sm:flex hidden">{startDateNum}</li>
        <li className="sm:flex hidden">{endDateNum}</li>
        <li className="sm:flex hidden">{capacity.toLocaleString("fa-IR")}</li>
    
          <>
            <li className={` ${grid === 6 ? "flex" : "sm:flex hidden"} `}>
              {cost ? (
                <>
                  {cost.toLocaleString("fa-IR")}{" "}
                  <span className="mr-1">تومان</span>
                </>
              ) : (
                <span className="text-red-500">رایگان</span>
              )}
            </li>
          </>
     
        {path.includes("my-courses") && (
          <li className="text-red-500  flex justify-center items-center">
            <IoCloseCircleOutline
              className="hover:scale-[1.5] transition-all duration-300 text-[20px] cursor-pointer"
              onClick={deleteCourse}
            />
          </li>
        )}
      </ul>
    </Link>
  );
};

export default SixShowBox;
