"use client";
import { useState, useEffect } from "react";
import { Field } from "formik";
import { motion } from "framer-motion";
import { stepAnimate } from "@/constant/stepperInputAnimation";
import JCalendar from "reactjs-persian-calendar";
const BirthDatePicker = ({ name, size, ...props }) => {
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
    <div {...stepAnimate} onClick={openCalendar} className="relative">
      <Field name="birthDate">
        {({ field, form, meta }) => {
          const { setFieldValue } = form;
          const { value } = field;
          const clickHandler = (date) => {
            setFieldValue(name, date.split("-").join("/"));
            setSHowDate(false);
          };

          return (
            <div className={size}>
                <label
                  className="text-mode-color mb-2 block pr-2 text-[14px]"
                  htmlFor={field.name}>
                  تاریخ تولد:
                </label>
              <div className="h-[52px]">
                <input
                  className={` w-full bg-transparent h-[40px] border-[1px] appearance-none ${
                    meta.error && meta.touched
                      ? "border-red-400"
                      : "border-primary"
                  } focus:shadow-lg text-mode-color  focus:scale-[1.01] transition-all duration-500 outline-none  py-[5px] px-[8px] text-[14px] placeholder:text-[10px] rounded-lg  ${
                    showDate && "shadow-lg scale-[1.01]"
                  }  `}
                  readOnly
                  placeholder="تاریخ تولد خود را وارد کنید"
                  {...field}
                />
                {meta.error && meta.touched && (
                  <p className="ss:text-[10px] text-[9px] text-red-400 mt-1 pr-2">
                    {meta.error}
                  </p>
                )}
              </div>
              {showDate && (
                <motion.div
                  animate={{ y: 0, opacity: 100, scale: 0.8, x: 14 }}
                  initial={{ y: 50, opacity: 0, scale: 0.8, x: 14 }}
                  exit={{ y: 50, opacity: 0, scale: 0.8, x: 14 }}
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
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default BirthDatePicker;
