"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import api from "@/core/interceptors/apiInterceptor";
import AcceptModal from "../../../../../common/Modal/AcceptModal";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
const AdminAnswerBox = ({
  commentId,
  setIsShowModal,
  showModal,
  setAllComment,
  allComment,
}) => {
  const [text, setText] = useState("");
  //   const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const clickHandler = async () => {
    if (!text) {
      toast.warning("فیلد پاسخ خالی است");
    } else if (text.length < 10) {
      toast.warning(" پاسخ باید دارای حداقل ۱۰ کاراکتر باشد");
    } else {
      setLoading(true);
      const obj = {
        id: commentId,
        answer: text,
      };
      try {
        const response = await api.post("/comments/answer", obj)
          let comments = [...allComment];
          comments.forEach((item) => {
            if (item._id == commentId) {
              item.answer = text;
            }
          });
          setText("")
          setAllComment(comments);
          setLoading(false)
          setIsShowModal(false)
          toast.success("پاسخ با موفقیت ثبت شد")
      } catch (error) {
        setLoading(false)
        toast.error("خطایی رخ داده است")
      }
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          exit={{ opacity: 0, display: "hidden" }}
          initial={{ opacity: 0, display: "block" }}
          animate={{ opacity: 1, display: "block" }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className=" z-[100] bg-[#0d0d0d8b] fixed w-[100vw] h-[100vh] right-0 top-0">
          <motion.div
            onClick={() => setIsShowModal(false)}
            exit={{ opacity: 0, scale: 0 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full h-full  flex items-center justify-center">
                <form onSubmit={(event)=> event.preventDefault()}>

            <div
              onClick={(event) => event.stopPropagation()}
              className=" rounded-md shadow-md pr-4 py-4 pl-6 bg-mode-color md:w-[600px] w-full">
              <textarea
                name=""
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="پاسخ خود را وارد کنید"
                className="w-full min-h-[250px] mb-2 border-[1px] leading-6  appearance-none text-[14px] text-mode-color focus:outline-none transition-colors duration-300  focus:border-primary bg-[#a1a1a15a] p-4 rounded-[4px]"
              />
              <div className=" grid grid-cols-2 gap-4">
                <button
                type="submit"
                  onClick={clickHandler}
                  className="text-white px-3 py-2 text-[12px] flex items-center justify-center  bg-primary rounded-[4px] hover:scale-[1.05] transition-all duration-300">
                  {loading ? (
                    <BeatLoader size={6} color="#fff" />
                  ) : (
                    "ثبت پاسخ"
                  )}
                </button>
                <button
                type="button"
                  onClick={() => {
                    setIsShowModal(false);
                    setText("");
                  }}
                  className=" px-3 py-2 text-[12px] text-mode-color bg-[#a8a8a884] rounded-[4px] hover:scale-[1.05] transition-all duration-300">
                  بازگشت
                </button>
              </div>
              {/* <AcceptModal
                setSuccess={setSuccess}
                success={success}
                setLoading={setLoading}
                loading={loading}
                showModal={modal}
                setIsShowModal={setModal}
                submitHandler={sendAnswer}
                text="از ثبت پاسخ اطمینان دارید؟"
                successText="پاسخ با موفقیت ثبت شد"
              /> */}
            </div>
                </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdminAnswerBox;
