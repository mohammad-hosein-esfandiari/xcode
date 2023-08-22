"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const ProgressBar = () => {
  const [showProgress, setShowProgress] = useState(false);
  const [scroll, setScroll] = useState(298);

  const scrollHandler = () => {
    const documentHeight =
      document.body.scrollHeight - document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollTop;
    setScroll(
      -Math.ceil((298 * Math.ceil(scrollHeight)) / documentHeight) - 298
    );
    if(scrollHeight > 300){
        setShowProgress(true)
    }else{
        setShowProgress(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <>
      <AnimatePresence>
        {showProgress && (
          <motion.a
            initial={{y:100,opacity:0}}
            animate={{y:0,opacity:1}}
            exit={{y:100,opacity:0}}
            className="fixed ss:w-[49px] ss:h-[49px] w-[41px] h-[41px] md:block hidden rounded-full z-[10] ss:bottom-5 ss:right-5 bottom-2  right-2"
            href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-rotate-90 z-10 rounded-full relative"
              
              viewBox="0 0 100 100">
                
              <circle
                cx="50.3"
                strokeDasharray="298"
                strokeDashoffset={scroll}
                strokeWidth="6"
                cy="50.2"
                r="47"
                className=" fill-none stroke-primary"></circle>
            </svg>
            <div  className=" border-[3px] border-primary w-[99%] h-[99%] flex items-center justify-center  rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  opacity-25">
            </div>
                <MdOutlineKeyboardArrowUp className="text-primary absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[30px]"/>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProgressBar;
