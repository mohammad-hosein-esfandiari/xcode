"use client";
import { useState, useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import { Field } from "formik";
import { motion } from "framer-motion";
import { stepAnimate } from "@/constant/stepperInputAnimation";
import "react-international-phone/style.css";

export default function PhonePicker({ name, color }) {
  const [bgColor, setBgColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const resizeFunc = () => {
    if (window.innerWidth > 768) {
      setBgColor("#fff");
      setFontColor("black");
    } else {
      setBgColor("transparent");
      setFontColor("var(--text-color)");
    }
  };

  useEffect(() => {
    resizeFunc();
    window.addEventListener("resize", resizeFunc);
    return () => window.removeEventListener("resize", resizeFunc);
  }, []);

  return (
    <motion.div {...stepAnimate} className=" mt-[-50px] " dir="ltr">
      <Field name="phonenumber">
        {({ field, form, meta }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <div
              className={`w-fit rounded-[5px] ${
                color === "white" ? "sm:bg-[#fff]" : "bg-transparent"
              }`}>
              <PhoneInput
                inputStyle={{
                  backgroundColor: "transparent",
                  border: `1px solid ${
                    meta.touched && meta.error
                      ? "#f87171"
                      : "var(--primary-color)"
                  } `,
                  color: `${
                    meta.error && meta.touched
                      ? "#f87171"
                      : `${color === "white" ? fontColor : "var(--text-color"}`
                  }`,
                }}
                countrySelectorStyleProps={{
                  buttonStyle: {
                    border: `1px solid ${
                      meta.touched && meta.error
                        ? "#f87171"
                        : "var(--primary-color)"
                    }`,
                    backgroundColor: "transparent",
                  },
                }}
                placeHolder="sdvsdv"
                {...field}
                {...meta}
                initialCountry="ir"
                id="phonenumber"
                value={value}
                onChange={(phone) => setFieldValue(name, phone)}
              />
              {meta.touched && meta.error && (
                <p className="text-[9px]  text-red-400 mt-1 pr-2" dir="rtl">
                  {meta.error}
                </p>
              )}
            </div>
          );
        }}
      </Field>
    </motion.div>
  );
}


{/* <PhonePicker
validationschema={Yup.object({
  phonenumber: Yup.string()
    .required("وارد کردن شماره تماس الزامی است")
    .min(14, "شماره تماس باید حداقل ۱۰ کاراکتر باشد"),
})}
name="phonenumber"
type="number"
/> */}



