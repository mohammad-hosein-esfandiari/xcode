"use client";

import { useState } from "react";
import api from "@/core/interceptors/apiInterceptor";
import AcceptModal from "../../../../../common/Modal/AcceptModal";
import { toast } from "react-toastify";
const UserCommentTextbox = ({ userInfo, courseId }) => {
  const [text, setText] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const clickHandler = () => {
    if (!text) {
      toast.warning("فیلد نظر خالی است");
    } else if (text.length < 10) {
      toast.warning(" نظر باید دارای حداقل ۱۰ کاراکتر باشد");
    } else {
      setModal(true);
    }
  };
  const addTobasketHandler = async () => {
    const obj = {
      postId: courseId,
      email: userInfo.email,
      username: userInfo.fullName,
      comment: text,
    };
    setLoading(true);
    try {
      const response = await api.post("/comments/send", obj);
      setSuccess(true)
      setText('')
      console.log(response)
    } catch (error) {
      setLoading(false)
      console.log(error)
      toast.error('خطایی رخ داده است')
    }
  };
  return (
    <li className="pt-5">
      <textarea
        name=""
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="نظر خودتون رو راجب به این درس برای ما ارسال کنید  ..."
        className="w-full min-h-[150px] mb-2 border-[1px] leading-6  appearance-none text-[14px] text-mode-color focus:outline-none transition-colors duration-300  focus:border-primary bg-[#a1a1a124] p-4 rounded-[4px]"
      />
      <div className="flex flex-row-reverse">
        <button
          onClick={clickHandler}
          className="text-white px-6 p-2 mt-2 bg-primary rounded-[4px] hover:scale-[1.05] transition-all duration-300">
          ثبت نظر
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
        text="از ثبت نظر اطمینان دارید؟"
        successText="نظر با موفقیت ثبت شد"
      />
    </li>
  );
};

export default UserCommentTextbox;
