"use client";

import { useState } from "react";
import { swipeTab } from "@/constant/swipeTapItem";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
const SwipeBox = ({ children, swipeClass, swipeItem, spanColor }) => {
  const [swipe, setSwipe] = useState(0);
  const pathname = usePathname().split("/")[2]
  return (
    <div className="">
      <ul
        className={`mb-6 ${swipeClass}  overflow-hidden rounded-[4px] ss:text-[16px] text-[14px] flex items-center justify-around `}>
        {swipeItem.map((item, index) => (
          <li
            key={item.id}
            onClick={() => setSwipe(index)}
            className={`text-center cursor-pointer w-fit px-4 py-3 text-mode-color relative transition-all duration-300 ${
              index === swipe && "text-primary"
            } z-0 ${index !== swipeTab.length - 1 && " "}  `}>
            {item.title}
            {index === swipe && (
              <motion.span
                layoutId="rect"
                transition={{
                  duration: 0.4,
                  delay: 0,
                }}
                className={`absolute ${spanColor} w-full bottom-0 right-0 h-[2px] block`}></motion.span>
            )}
          </li>
        ))}
      </ul>
      <div className="sm:px-4">
        <AnimatePresence mode="wait"><motion.div key={swipe}>{children[swipe]}</motion.div></AnimatePresence>
      </div>
    </div>
  );
};

export default SwipeBox;
