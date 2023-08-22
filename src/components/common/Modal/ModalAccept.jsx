"use client";
import TickSvg from "@/components/common/Modal/TickSvg";
import { AnimatePresence, motion } from "framer-motion";

import { useModalAccept } from "@/context/modalBox";
import ModalDetails from "./ModalDetails";
import { useEffect } from "react";
const ModalAccept = ({ submitHandler }) => {
  const Modaltext = useModalAccept((state) => state.Modaltext);
  const setModalText = useModalAccept((state) => state.setModalText);
  const success = useModalAccept((state) => state.success);
  const setSuccess = useModalAccept((state) => state.setSuccess);
  const showModal = useModalAccept((state) => state.showModal);
  const loading = useModalAccept((state) => state.loading);
  const setLoading = useModalAccept((state) => state.setLoading);
  const setIsShowModal = useModalAccept((state) => state.setIsShowModal);
  const successText = useModalAccept((state) => state.successText);
  const info = useModalAccept((state) => state.info);
  const cancelHandler = () => {
    setIsShowModal(false);
  };
  const submitHandlerModal = () => {
    submitHandler(info);
    // don another thing
  };
  useEffect(() => {
    return () => {
      setTimeout(async() => {
        setModalText("");
        setLoading(false);
        setSuccess(false);
      }, 550);
    };
  }, []);

  return (
    <>
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
          transition={{ delay: 0.2 }}
          className="w-full h-full  flex items-center justify-center">
          <div
            onClick={(event) => event.stopPropagation()}
            className=" rounded-[4px] ss:text-[16px] text-[14px] ss:min-w-[300px] h-[160px] min-w-fit bg-linear1 p-6">
            {success ? (
              <TickSvg
                setSuccess={setSuccess}
                setIsShowModal={setIsShowModal}
                setLoading={setLoading}
                successText={"عملیات با موفقیت انجام شد"}
              />
            ) : (
              <ModalDetails
                loading={loading}
                cancelHandler={cancelHandler}
                text={Modaltext}
                submitHandlerModal={submitHandlerModal}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ModalAccept;
