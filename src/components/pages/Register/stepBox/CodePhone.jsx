"use client";
import { useEffect, useState } from "react";
import { Field } from "formik";
import { useStepperStore } from "@/context/stepperStore";
import { motion } from "framer-motion";
import { stepAnimate } from "@/constant/stepperInputAnimation";

import PinInput from "react-pin-input";

export function CodePhone({ name, color }) {
  const [bgColor, setBgColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const randomCode = useStepperStore((state) => state.randomCode);

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
    <>
      <motion.div {...stepAnimate} dir="ltr">
        <Field id="codephone" name="codephone">
          {(props) => {
            const { field, form, meta } = props;
            const { setFieldValue } = form;
            const { value } = field;
            const { setErrors, submitForm } = form;
            const handleCHange = (phone) => {
              setFieldValue(name, phone);
              if (phone !== randomCode) {
                setErrors({});
              }
            };

            return (
              <>
                <PinInput
                  {...meta}
                  {...field}
                  length={4}
                  initialValue=""
                  id="codephone"
                  value={value}
                  onChange={handleCHange}
                  type="numeric"
                  inputMode="number"
                  style={{ padding: "10px" }}
                  inputStyle={{
                    borderColor: `${
                      meta.error ? "#f87171" : "var(--primary-color)"
                    }`,
                    backgroundColor: `${
                      color === "white" ? bgColor : "transparent"
                    }`,
                    borderRadius: "4px",
                    color: `${
                      meta.error
                        ? "#f87171"
                        : `${
                            color === "white" ? fontColor : "var(--text-color)"
                          }`
                    }`,
                  }}
                  // inputFocusStyle={{ borderColor: "blue" }}
                  focus
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
                {meta.error && (
                  <p className="text-[7px] text-red-400  pr-4 " dir="rtl">
                    {meta.error}
                  </p>
                )}
              </>
            );
          }}
        </Field>
      </motion.div>
    </>
  );
}
