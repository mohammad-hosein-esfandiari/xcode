"use client";

import { useField } from "formik";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const InputText = ({ size, ...props }) => {
  const [isShowPass, setIsShowPass] = useState(false);
  const [field, meta] = useField(props);
  const clickHandler = () => {
    setIsShowPass(!isShowPass);
  };

  return (
    <div className={`${size}`}>
      <label
        className="text-mode-color mb-2 block pr-2 text-[14px]"
        htmlFor={field.name}>
        {props.label}:
      </label>
      {props.type === "textarea" ? (
        <textarea
          className={`w-full max-h-[120px] min-h-[40px] bg-transparent  border-[1px] ${
            meta.error && meta.touched
              ? "text-red-400 placeholder:text-red-400 border-red-400"
              : "border-primary text-mode-color"
          }  focus:shadow-lg rounded-lg focus:scale-[1.01]   transition-transform duration-500 outline-none  py-[5px] placeholder:text-[10px] px-[8px]`}
          id={field.name}
          {...field}
          {...props}
        />
      ) : props.type === 'select' ? (
        <select {...field}
        {...props} className="w-full h-[40px] focus:shadow-lg rounded-lg focus:scale-[1.01]  bg-transparent border-primary border-[1px] transition-transform duration-500 outline-none text-[14px] px-[8px] text-mode-color py-[5px]">
          <option value="man">مرد</option>
          <option value="woman">زن</option>
          <option value="other">سایر</option>
        </select>
      ): (
        <div className="h-[52px] relative">

          <input
            id={field.name}
            {...field}
            {...props}
            type={isShowPass ? "text" : props.type}
            className={`w-full bg-transparent h-[40px] border-[1px] ${
              meta.error && meta.touched
                ? "text-red-400 border-red-400 "
                : "border-primary text-mode-color"
            }  focus:shadow-lg  focus:scale-[1.01] transition-all duration-500 outline-none  py-[5px] px-[8px] text-[14px] placeholder:text-[10px] rounded-lg `}
          />
              {props.type === "password" && (
        <motion.span
          whileTap={{ scale: 1.05 }}
          className={`absolute  cursor-pointer left-2 top-[9.8px] text-[18px]  ${
            isShowPass ? "text-gray-500" : "text-gray-400 "
          } `}
          onClick={clickHandler}>
          {!isShowPass ? <AiFillEyeInvisible /> : <AiFillEye />}
        </motion.span>
      )}
        {meta.error && meta.touched && (
          <p className="ss:text-[10px] text-[9px] text-red-400 mt-1 pr-2">{meta.error}</p>
        )}

        </div>
        
      )}

    </div>
  );
};

export default InputText;
