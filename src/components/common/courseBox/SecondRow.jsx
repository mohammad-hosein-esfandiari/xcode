"use client";
import { useState ,useEffect} from "react";
import Rating from "@/components/common/Rating/Rating";
import { useUserInfo } from "@/context/userInfoStore";
import { disLikeFunc, likeFunc } from "@/core/services/LikeFunc";
import { getCookie } from "@/core/utils/cookies.storage";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { toast } from "react-toastify";

const SecondRow = ({ likeCount, disLikedCount, courseId }) => {
  const user =  getCookie("UoXa-I");

  const [likeCountNum, setLikeCountNum] = useState(likeCount);
  const [isLike, setIslike] = useState(false);
  const [isdisLike, setDisIslike] = useState(false);
  const [dislikeCountNum, setDisLikeCountNum] = useState(disLikedCount);
  const userInfo = useUserInfo((state) => state.userInfo);
  const like = likeCountNum + 36;
  const likeNumber = like?.toLocaleString("fa-IR");
  const disLikedNumber = dislikeCountNum?.toLocaleString("fa-IR");

  const likeHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (user) {
      const obj = {
        courseId: courseId,
        userId: userInfo.studentModel._id,
      };
      await likeFunc(obj, setLikeCountNum,setIslike);
    } else {
      toast.error("برای ثبت نظر لطفا وارد سایت شوید");
    }
  };

  const disLikeHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();
   
    if (user) {
      const obj = {
        courseId: courseId,
        userId: userInfo.studentModel._id,
      };
      await disLikeFunc(obj, setDisLikeCountNum,setDisIslike);
    } else {
      toast.error("برای ثبت نظر لطفا وارد سایت شوید");
    }
  };
  return (
    <ul className="flex  item-center pb-3">
      <li className="flex text-mode-color  text-[24px] items-center transition-all duration-300 hover:shadow-modeShadow hover:scale-[1.2] bg-[#c3c3c348] rounded-[7px] px-3 py-[3px] ">
        <div
          onClick={likeHandler}
          className="group hover:scale-[1.2] transition-all duration-300">
            {
              isLike ? <AiFillLike className="scale-x-[-1] transition-all duration-300 text-color-green" /> : <AiOutlineLike className="scale-x-[-1]  text-color-green" />
            }
          
        </div>
        <span className="text-[12px] pt-[4px] mr-2">{likeNumber}</span>
      </li>

      <li className="flex text-mode-color text-[24px] hover:scale-[1.2] transition-all duration-300 items-center mr-3 hover:shadow-modeShadow bg-[#c3c3c348]  rounded-[7px] px-3 py-[3px] ">
        <div
          onClick={disLikeHandler}
          className="group hover:scale-[1.2] transition-all duration-300">
            {
              !isdisLike ? <AiOutlineDislike className=" scale-x-[-1]  text-color-orange2" /> : <AiFillDislike className="scale-x-[-1]  transition-all duration-300 text-color-orange2" />
            }
          
          
        </div>
        <span className="text-[12px] pt-[2px] mr-2">{disLikedNumber}</span>
      </li>
    </ul>
  );
};

export default SecondRow;
