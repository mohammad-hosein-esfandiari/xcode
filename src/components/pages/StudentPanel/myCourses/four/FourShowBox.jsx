"use client";
import { IoCloseCircleOutline } from "react-icons/io5";
import FirstRow from "./FirstRow";
import LastRow from "./LastRow";
import SecondRow from "./SecondRow";
import { useGridStudentPanel } from "@/context/studentPanelGridShow";
import { convertTopicToObj } from "@/core/utils/topicApiConvertor";
import Link from "next/link";
import { useModalAccept } from "@/context/modalBox";
import { useUrlArray } from "@/hooks/useUrlArray";

const FourShowBox = ({ lesson, title, _id, likedCount, students, cost }) => {
  const {path} = useUrlArray()
  const grid = useGridStudentPanel((state) => state.grid);
  const setInfo = useModalAccept((state) => state.setInfo);
  const setIsShowModal = useModalAccept((state) => state.setIsShowModal);
  const setModalText = useModalAccept((state) => state.setModalText);

  const deleteCourse = (event) => {
    event.preventDefault();
    setModalText("از حذف دوره اطمینان دارید؟");
    setIsShowModal(true);
    setInfo(_id);
  };
  return (
    <Link
      href={`/courses/${_id}`}
      className="bg-linear5 pb-2 relative transition-all duration-300 cursor-pointer shadow-modeShadow rounded-lg px-6 hover:scale-[1.03] flex flex-col justify-between">
      {path.includes("my-courses") && (
        <div className="text-red-500 absolute left-3 top-3  rounded-full  transition-all duration-300 text-[20px] cursor-pointer flex justify-center items-center">
          <IoCloseCircleOutline onClick={deleteCourse} className="hover:scale-[1.5] transition-all duration-300 text-[20px] cursor-pointer" />
        </div>
      )}

      <FirstRow lesson={lesson} title={title} />
      <SecondRow likeCount={likedCount} />
      <LastRow students={students} cost={cost} />
    </Link>
  );
};

export default FourShowBox;
