"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
const DarkModeBtn = () => {
  const [toggle, setToggle] = useState(false);
  const input = useRef();
  useEffect(()=>{
    const activeTheme = localStorage.getItem("mode");
    if(activeTheme === "dark"){
      input.current.nextElementSibling.checked = true
      setToggle(true);
    }else{
      input.current.nextElementSibling.checked = false
      setToggle(false);
    }
  },[])
  const changeHandler = () => {
    if (input.current.nextElementSibling.checked) {
      localStorage.setItem("mode", "light");
      setToggle(false);
    } else {
      localStorage.setItem("mode", "dark");
      setToggle(true);
    }
  };
  return (
    <div className=" my-2 flex justify-center rounded-full ">
      <div
        className={`relative flex flex-col ${
          !toggle ? "bg-[#676767]" : "bg-white"
        }  rounded-full justify-center items-center w-[30px] h-[30px]`}>
        <label
          ref={input}
          onClick={changeHandler}
          htmlFor="dark"
          className=" cursor-pointer block text-mode-color text-[19px]">
          <AnimatePresence>
            {toggle ? (
              <motion.div
                initial={{ rotate: 360, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}>
                <MdDarkMode className="text-black" />
              </motion.div>
            ) : (
              <motion.div initial={{ rotate: 90 }} transition={{ duration: 1 }}>
                <MdLightMode className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </label>
        <input
          type="checkbox"
          id="dark"
          name="b"
          className=" appearance-none "
        />
      </div>
    </div>
  );
};

export default DarkModeBtn;

