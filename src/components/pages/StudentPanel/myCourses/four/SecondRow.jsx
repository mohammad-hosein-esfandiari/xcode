import Rating from "@/components/common/Rating/Rating";
import { AiOutlineHeart } from "react-icons/ai";
import { GoComment } from "react-icons/go";

const SecondRow = ({likeCount}) => {
  const like = likeCount+36

    return (
        <ul className="flex item-center ">
     

        <li className="flex text-gray-400 items-center  mb-4 xs:mb-4">
          <AiOutlineHeart />
          <span className="text-[12px] pt-[2px] mr-2">{like.toLocaleString('fa-IR')}</span>
        </li>
        <li className="flex text-gray-400 items-center mr-3 pt-[2px] mb-4 xs:mb-4">
          <GoComment />
          <span className="text-[12px]  mr-2">48</span>
        </li>
      </ul>
    );
}

export default SecondRow;