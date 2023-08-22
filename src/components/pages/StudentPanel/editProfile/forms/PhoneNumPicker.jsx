"use client";
import { useState, useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import { Field } from "formik";
import { motion } from "framer-motion";
import { stepAnimate } from "@/constant/stepperInputAnimation";
import "react-international-phone/style.css";
const PhoneNumPicker = ({ name, color, ...props }) => {
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
    <div className="" dir="ltr">
      <Field name="phoneNumber">
        {({ field, form, meta }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <div
              className={` rounded-md ${
                color === "white" ? "sm:bg-[#fff]" : "bg-transparent"
              }`}>
              <label
                dir="rtl"
                className="text-mode-color mb-2 block pr-2 text-[14px]"
                htmlFor={field.name}>
                شماره تماس:
              </label>
              <div className="h-[52px]">
                <PhoneInput
                  inputStyle={{
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px",
                    paddingBottom: "19px",
                    paddingTop: "19px",
                    width: "100%",
                    backgroundColor: "transparent",
                    border: `1px solid ${
                      meta.touched && meta.error
                        ? "#f87171"
                        : "var(--primary-color)"
                    } `,
                    color: `${
                      meta.error && meta.touched
                        ? "#f87171"
                        : `${
                            color === "white" ? fontColor : "var(--text-color"
                          }`
                    }`,
                  }}

                  countrySelectorStyleProps={{
                    buttonStyle: {
                      paddingBottom: "19px",
                      paddingTop: "19px",
                      borderTopLeftRadius: "8px",
                      borderBottomLeftRadius: "8px",
                      border: `1px solid ${
                        meta.touched && meta.error
                          ? "#f87171"
                          : "var(--primary-color)"
                      }`,
                      backgroundColor: "transparent",
                    },
                  }}
                  placeHolder="شماره تماس خود را وارد کنید"
                  {...field}
                  {...meta}
                  initialCountry="ir"
                  id="phoneumber"
                  value={value}
                  onChange={(phone) => setFieldValue(name, phone)}
                />
                {meta.error && meta.touched && (
                  <p dir="rtl" className="ss:text-[10px] text-[9px] text-red-400 mt-1 pr-2">
                    {meta.error}
                  </p>
                )}
              </div>
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default PhoneNumPicker;
