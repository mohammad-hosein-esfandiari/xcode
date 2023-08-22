"use client";
import TickSvg from "@/components/common/Modal/TickSvg";
import { AnimatePresence, motion } from "framer-motion";
import ModalDetails from "./ModalDetails";
const AcceptModal = ({
  text,
  setSuccess,
  success,
  showModal,
  setIsShowModal,
  submitHandler,
  successText,
  loading,
  setLoading,
}) => {
  const cancelHandler = () => {
    setIsShowModal(false);
  };
  const submitHandlerModal = () => {
    submitHandler();
    // don another thing
  };

  return (
    <>
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
              <div
                onClick={(event) => event.stopPropagation()}
                className=" rounded-[4px] ss:text-[16px] text-[14px] ss:min-w-[300px] h-[160px] min-w-fit bg-linear1 p-6">
                {success ? (
                  <TickSvg
                    setSuccess={setSuccess}
                    setIsShowModal={setIsShowModal}
                    setLoading={setLoading}
                    successText={successText}
                  />
                ) : (
                  <ModalDetails
                    loading={loading}
                    cancelHandler={cancelHandler}
                    text={text}
                    submitHandlerModal={submitHandlerModal}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AcceptModal;
