import commentPic from "@/assets/images/client-01.png";
import { dateToString } from "@/core/utils/dateConvertor";
import { timeToString } from "@/core/utils/timeToString";
import Image from "next/image";
import ReplyBtn from "./ReplyBtn";
import { TiInputChecked } from "react-icons/ti";
import { useEffect } from "react";
import api from "@/core/interceptors/apiInterceptor";
import { toast } from "react-toastify";
import AdminAnswerBox from "./AdminAnswerBox";
import { motion } from "framer-motion";
const SingleComment = ({
  createDate,
  comment,
  email,
  answer,
  username,
  userRole,
  verified,
  _id,
  verfiedCm,
  setVerifyCm,
  allComment,
  setAllComment,
  setId,
  setModal
}) => {
  const date = dateToString(createDate);
  const time = timeToString(createDate);

  const isVerified = verfiedCm.some((item) => item == _id);
  console.log(verfiedCm)

  const verifiedCommentHandler = async () => {
    try {
      const res = await api.post("/comments/verify", { id: _id });
      console.log(res);
      setVerifyCm([...verfiedCm, _id]);
    } catch (error) {
      toast.error("در تایید کامنت خطایی رخ داده است");
    }
  };
  console.log(userRole)
  return (
    <>
      <div className="border-b-[1px] border-[#a8a8a86a] relative py-5">
        {userRole == "admin" || userRole == "teacher" ? (
          <div
            className={` absolute left-2 top-6 text-[8px]  flex items-center `}>
            {!isVerified && (
              <div onClick={verifiedCommentHandler}>
                <TiInputChecked className=" hover:scale-[1.05] cursor-pointer ml-2 text-[20px] text-mode-color" />
              </div>
            )}

            <span
              className={`${
                !isVerified ? "bg-red-400" : " bg-color-green"
              } px-2 py-[2px] rounded-[4px]`}>
              {isVerified ? "تایید شده" : "در انتظار تایید"}
            </span>
          </div>
        ): null}

        <div className="flex items-center ">
          {/* <div className="rounded-full ss:w-[60px] ss:h-[60px] w-[48px] h-[48px] overflow-hidden">
          <Image
            src={commentPic}
            alt=""
            className="object-cover object-center object-fit"
          />
        </div> */}
          <div className="flex flex-col pr-4  [&>span]:h-[48%]">
            <span className="ss:text-[16px] text-[14px] text-mode-color">
              {username}
            </span>
            <pre className="pt-[6px] ss:text-[14px] text-[12px] text-color-gray">
              {date} {time} :
            </pre>
          </div>
        </div>
        <p className="w-[90%] pr-4 mt-4 text-mode-color leading-6 ss:text-[14px] text-[12px] mb-2">
          {comment}
        </p>
        {answer && (
          <motion.div initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} className=" my-2  border-[#a8a8a86a] pl-2 overflow-hidden pr-6 relative py-5">
           <div className="bg-[#9a9a9a30] p-2 rounded-[4px] shadow-sm">
            <div className="flex w-full items-center ">
              <div className="flex flex-col pr-4  [&>span]:h-[48%]">
                <span className="ss:text-[16px]  text-primary text-[14px] ">
                  پاسخ
                </span>
              </div>
            </div>
            <p className="w-[90%] mt-4 pr-2 text-mode-color leading-6 ss:text-[14px] text-[12px] ">
              {answer}
            </p>
  
           </div>
          </motion.div>
        )}
        {userRole && (
          <>
            {userRole === "admin" && !answer && (
              <ReplyBtn setModal={setModal} id={_id} setId={setId} userRole={userRole} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default SingleComment;
