'use client'
import { stepAnimate } from "@/constant/stepperInputAnimation";
import { motion } from "framer-motion";
const WrongNumber = ({click}) => {
    return (
        <motion.div
        {...stepAnimate}
        className="mx-auto w-fit text-mode-color pt-5 text-[8px]">
        شماره تماس خود را اشتباه وارد کرده اید؟
        <button
          onClick={click}
          className=" text-color-orange hover:text-blue-500 pr-[2px] underline  ">
          اینجا کلیک کنید
        </button>
      </motion.div>
    );
}

export default WrongNumber;