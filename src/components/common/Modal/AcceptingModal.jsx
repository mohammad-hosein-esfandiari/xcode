"use client";
import { AnimatePresence } from "framer-motion";
import ModalAccept from "./ModalAccept";
import { useModalAccept } from "@/context/modalBox";
const AcceptingModal = ({ submitHandler }) => {
  const showModal = useModalAccept((state) => state.showModal);

  return (
    <AnimatePresence>
      {showModal && <ModalAccept submitHandler={submitHandler} />}
    </AnimatePresence>
  );
};

export default AcceptingModal;
