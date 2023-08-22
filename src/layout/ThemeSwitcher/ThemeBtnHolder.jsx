"use client";
import DarkModeBtn from "./DarkModeBtn";
import ThemeColorBtn from "./ThemeColorBtn";

import { motion, AnimatePresence } from "framer-motion";

const ThemeBtnHolder = () => {
  return (
    <motion.div
      onClick={(event) => event.stopPropagation()}
   
      className="flex border-[1px]  rounded-full ss:p-1 p-1 bg-mode-color overflow-hidden mb-2  flex-col-reverse">
      <ThemeColorBtn />
      <DarkModeBtn />
    </motion.div>
  );
};

export default ThemeBtnHolder;
