import LinkCp from "@/components/common/LinkCp";
import { useUserInfo } from "@/context/userInfoStore";
import Link from "next/link";

import { MdSlowMotionVideo } from "react-icons/md";

import { RxLockClosed, RxLockOpen2 } from "react-icons/rx";

const AccordionItem = ({ title, index, length, isInStudents ,lessonId,video,headlineIndex}) => {
  const lastIndex = video.lastIndexOf("/")
  const videoLink = video.substring(lastIndex+1)
  const userInfo = useUserInfo.getState().userInfo.studentModel
  return (
    <button
    
      disabled={!isInStudents}
      className={`${
        index !== length && "border-b-[1px]"
      } border-[#d4d4d482]  w-full ${
        isInStudents && userInfo.isActive
          ? "cursor-pointer hover:bg-primary hover:text-white"
          : " opacity-50 cursor-default"
      }  transition-all relative duration-300 px-4 flex items-center text-mode-color justify-between py-2 `}>
      {isInStudents && userInfo.isActive && (
        <LinkCp href={`/video/${lessonId}?video=${videoLink}&season=${headlineIndex}`} className=" absolute  w-full h-full"></LinkCp>
      )}

      <div className="flex itemx-center text-[14px]">
        <div className="border-[1px] border-[#d4d4d482] rounded-full w-[28px] h-[28px] flex items-center justify-center ml-2">
          {(index + 1).toLocaleString('fa-IR')}
        </div>
        <div className="flex items-center">
          <MdSlowMotionVideo className="text-[17px] text-[#e05858]" />
          <span className="mr-1 text-[13px]">{title}</span>
        </div>
      </div>
      <div>{!isInStudents && <RxLockClosed className="text-[#e05858]" />}</div>
    </button>
  );
};

export default AccordionItem;
