"use client";

import { useState } from "react";
import api from "@/core/interceptors/apiInterceptor";
import AcceptModal from "../../../../../common/Modal/AcceptModal";
import { toast } from "react-toastify";
const UserCommentTextbox = ({ userInfo, courseId,userId }) => {
  const [text, setText] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); 

  const clickHandler = () => {
    if (!text) {
      toast.warning("Comment field is empty");
    } else if (text.length < 10) {
      toast.warning("Comment must be at least 10 characters long");
    } else {
      setModal(true);
    }
  };
  const addTobasketHandler = async () => {
    const obj = {
      postId: courseId,
      user:userId,
      comment: text,
    };
    setLoading(true);
    try {
      const response = await api.post(process.env.NEXT_PUBLIC_BASE_URL+"comments", obj);
      setSuccess(true)
      setText('')
      console.log(response)
    } catch (error) {
      setLoading(false)
      console.log(error)
      toast.error('An error occured')
    }
  };
  return (
    <li className="pt-5">
      <textarea
        name=""
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Send us your feedback on this lesson..."
        className="w-full min-h-[150px] mb-2 border-[1px] leading-6  appearance-none text-[14px] text-mode-color focus:outline-none transition-colors duration-300  focus:border-primary bg-[#a1a1a124] p-4 rounded-[4px]"
      />
      <div className="flex flex-row-reverse">
        <button
          onClick={clickHandler}
          className="text-white px-6 p-2 mt-2 bg-primary rounded-[4px] hover:scale-[1.05] transition-all duration-300">
          Add comment
        </button>
      </div>
      <AcceptModal
        setSuccess={setSuccess}
        success={success}
        setLoading={setLoading}
        loading={loading}
        showModal={modal}
        setIsShowModal={setModal}
        submitHandler={addTobasketHandler}
        text="Are you sure you want to post this comment?"
        successText="Comment successfully submitted"
      />
    </li>
  );
};

export default UserCommentTextbox;
