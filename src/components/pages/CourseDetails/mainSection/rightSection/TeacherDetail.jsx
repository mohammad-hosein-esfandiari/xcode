import Image from "next/image";
import Rating from "@/components/common/Rating/Rating";
import teacher1 from "@/assets/images/instructor2.png";
import { AiOutlineHeart, AiOutlineLike, AiTwotoneLike } from "react-icons/ai";

const TeacherDetail = ({teacher}) => {


    return (
        <li className="flex items-center justify-between">
          <div className="flex items-center ">

        <Image src={teacher.profile === "image.png" ? teacher1 : teacher.profile}  width={50} height={50} alt="ostad" className="ss:w-[60px] rounded-full ss:h-[60px] w-[48px] h-[48px]" />
        <div className="pr-4 flex flex-col text-mode-color">
          <div className="mb-2 ss:text-[16px] text-[14px]">
          <span>استاد </span>
          <span>{teacher.fullName}</span>

          </div>
        <div  dir="ltr" className="flex flex-row-reverse">
          <Rating rate={4}/>
        </div>
        </div>
          </div>
          {/* <div className="flex  text-mode-color items-center">
            <span className="ml-2 text-[14px]"><span>{likeNumber} </span><span className="ss:inline hidden">این دوره را برگزیدند</span></span>
          <AiOutlineLike className="text-[25px] hover:scale-[1.1] hover:text-primary transition-all duration-300 cursor-pointer"/>
          </div> */}
      </li>
    );
}

export default TeacherDetail;