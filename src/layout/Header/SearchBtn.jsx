"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSearch } from "react-icons/hi";

import SearchInput from "./SearchInput";
import ReactQueryWrapper from "@/components/ReactQueryWrapper";

const SearchBtn = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <ReactQueryWrapper>
      <li
        onClick={() => setIsShowModal(true)}
        className="h-[34px] cursor-pointer group sm:mr-0 overflow-hidden w-[36px] hover:bg-primary rounded-[4px] sm:ml-[8px] flex items-center justify-center p-[6px] sm:shadow-btnShadow  sm:bg-white">
        <HiSearch className="text-primary group-hover:text-white transition-all duration-300  font-bold text-[18px]" />
      </li>
      <AnimatePresence>
        {isShowModal && (
          <motion.div
            onClick={() => setIsShowModal(false)}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="z-20 flex px-1 ss:items-center justify-center bg-[#0d0d0d8b] fixed w-[100vw] h-[100vh] right-0 top-0">
            <div
              onClick={(event) => event.stopPropagation()}
              className="h-fit w-[94%] ss:mr-0 ss:mt-0  mt-4 ss:w-[600px]">
              <SearchInput />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactQueryWrapper>
  );
};

export default SearchBtn;
