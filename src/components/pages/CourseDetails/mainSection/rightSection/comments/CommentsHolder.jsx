"use client";
import { TfiComments } from "react-icons/tfi";
import SingleComment from "./SingleComment";
import { useEffect, useState } from "react";
import AdminAnswerBox from "./AdminAnswerBox";

const CommentsHolder = ({ courseId, allComments, userRole }) => {
  const comments = allComments.filter((item) => item.postId === courseId);
  const verfiedComments = comments.filter((item) => item.verified === true);
  const [verfiedCm ,setVerifyCm] = useState([])
  const [id ,setId] = useState("")
  const [modal, setModal] = useState(false);

  const [allComment,setAllComment] = useState([])
  useEffect(()=>{
    setVerifyCm(verfiedComments.map(item => item._id))
    setAllComment(comments)
  },[])
  console.log(verfiedCm)
  return (
    <li className="mt-8">
      <AdminAnswerBox commentId={id} setAllComment={setAllComment} allComment={allComment} setIsShowModal={setModal} showModal={modal}/>

      {userRole.studentModel.role !== "student" ? (
        <>
          {comments.length > 0 ? (
            <>
              {allComment.map((item) => (
                <SingleComment setModal={setModal} setId={setId} allComment={allComment} setAllComment={setAllComment} userRole={userRole.studentModel.role} setVerifyCm={setVerifyCm} verfiedCm={verfiedCm} key={item._id} {...item} />
              ))}
            </>
          ) : (
            <div className="flex bg-[#a1a1a124] shadow-md border-r-[4px] border-red-500 p-6  rounded-[4px] justify-center items-center">
              <TfiComments className="text-primary text-[40px]" />
              <div className="text-[#e05858] mr-8 ">
                نظری برای نمایش وجود ندارد
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {verfiedComments.length > 0 ? (
            <>
              {verfiedComments.map((item) => (
                <SingleComment verfiedCm={verfiedCm} userRole={userRole.studentModel.role} key={item._id} {...item} />
              ))}
            </>
          ) : (
            <div className="flex bg-[#a1a1a124] shadow-md border-r-[4px] border-red-500 p-6  rounded-[4px] justify-center items-center">
              <TfiComments className="text-primary text-[40px]" />
              <div className="text-[#e05858] mr-8 ">
                نظری برای نمایش وجود ندارد
              </div>
            </div>
          )}
        </>
      )}
    </li>
  );
};

export default CommentsHolder;
