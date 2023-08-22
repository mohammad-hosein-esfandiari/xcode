import { useState, useRef, useEffect } from "react";
import { useField } from "formik";
import { motion } from "framer-motion";
import { stepAnimate } from "@/constant/stepperInputAnimation";
import { useStepperStore } from "@/context/stepperStore";

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

export default function TextInput({ color, label, type, ...props }) {
  const step = useStepperStore((state) => state.step);
  const error = useStepperStore((state) => state.error);
  const [isShowPass, setIsShowPass] = useState(false);
  const [field, meta,helpers] = useField(props);
  const keydown = (event) => {
    if (props.name == "nationalcode") {
      let k = event.which ? event.which : event.keyCode;
      if ((k < 48 || k > 57) && (k < 96 || k > 105) && k != 13 && k != 8) {
        event.preventDefault();
      }
    }
  };

  const clickHandler = () => {
    setIsShowPass(!isShowPass);
  };

  return (
    <motion.div
      key={step}
      {...stepAnimate}
      className="w-fit h-[52px] flex flex-col  mx-auto relative ">
      <input
        type={isShowPass ? "text" : type}
        onKeyDown={keydown}
        placeholder={label}
        className={` ${
          color === "white" ? "sm:bg-white bg-transparent" : "bg-transparent"
        }  border-[1px]  h-[34px]   ${
          meta.error && meta.touched
            ? "border-red-600 text-red-600 "
            : `border-primary ${
                color == "white"
                  ? "sm:text-black text-mode-color"
                  : "text-mode-color"
              } `
        } w-[200px] focus:shadow-lg  focus:scale-[1.03] focus:border-[2px] transition-all duration-500 outline-none  py-[5px] px-[8px] text-[10px] rounded-[4px] `}
        {...field}
        {...props}
        autoComplete="off"
      />
      {type === "password" && (
        <motion.span
          whileTap={{ scale: 1.05 }}
          className={`absolute cursor-pointer left-2 top-[9.8px] text-[13px]  ${
            isShowPass ? "text-gray-500" : "text-gray-400 "
          } `}
          onClick={clickHandler}>
          {!isShowPass ? <AiFillEyeInvisible /> : <AiFillEye />}
        </motion.span>
      )}
      {meta.error && meta.touched && (
        <p className="text-[7px] transition-all text-red-600  mt-1 pr-2">{meta.error}</p>
      )}
    </motion.div>
  );
}
