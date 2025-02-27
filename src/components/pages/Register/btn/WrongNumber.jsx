'use client'
import { stepAnimate } from "@/constant/stepperInputAnimation";
import { motion } from "framer-motion";
const WrongNumber = ({click}) => {
    return (
        <motion.div
        {...stepAnimate}
        className="mx-auto w-fit text-mode-color pt-5 text-[8px]">
        Wrong phone number?
        <button
          onClick={click}
          className=" text-color-orange hover:text-blue-500 pl-[2px] underline  ">
          Click here
        </button>
      </motion.div>
    );
}

export default WrongNumber;