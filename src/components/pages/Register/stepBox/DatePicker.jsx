'use client'
import { useState, useEffect } from "react";
import { Field } from "formik";
import { motion } from "framer-motion";
import { stepAnimate } from "@/constant/stepperInputAnimation";
import JCalendar from "reactjs-persian-calendar";
export default function DatePicker ({ name }) {
  const [showDate, setSHowDate] = useState(false);
  const handleCalendarShow = () => {
    setSHowDate(false);
  };
  const openCalendar = (event) => {
    event.stopPropagation();
    setSHowDate(true);
  };
  useEffect(() => {
    window.addEventListener("click", handleCalendarShow);
    return () => window.removeEventListener("click", handleCalendarShow);
  }, []);
  return (
    <motion.div {...stepAnimate} onClick={openCalendar} className="relative">
      <Field name="date">
        {({ field, form, meta }) => {
          const { setFieldValue } = form;
          const { value } = field;
          const clickHandler = (date) => {
          
            setFieldValue(name, date.split('-').join('/'));
            setSHowDate(false);
          };
         
          return (
            <div className="h-[52px]">
              <input

                className={` text-mode-color h-[34px] bg-transparent  cursor-pointer border-[1px] appearance-none ${
                  meta.error && meta.touched
                    ? "border-red-400"
                    : "border-primary"
                } w-[200px] ${
                  showDate && "shadow-lg scale-[1.01]"
                } transition-all duration-500 outline-none  py-[5px] px-[8px] text-[10px] rounded-[4px] `}
                readOnly
                placeholder='تاریخ تولد'
                {...field}
               
              />
              {showDate && (
                <motion.div 
                animate={{y:0,opacity:100,scale:0.8,x:14}}
                initial={{y:50,opacity:0,scale:0.8,x:14}}
                exit={{y:50,opacity:0,scale:0.8,x:14}}
                  onClick={(event) => event.stopPropagation()}
                  className="w-fit rounded-[6px] overflow-hidden scale-[0.7] top-[-180px] shadow-boxShadow right-0 absolute z-20">
                  <JCalendar
                    locale={"fa"}
                    color={"var(--primary-color)"}
                    size={30}
                    
                    onClick={clickHandler}
                    itemRender={(key, item, children) => children}
                  />
                </motion.div>
              )}
              {meta.touched && meta.error && (
                <p className="text-[7px] text-red-400 mt-1 pr-2">
                  {meta.error}
                </p>
              )}
            </div>
          );
        }}
      </Field>
    </motion.div>
  );
};
