"use client";

import { useEffect, useState } from "react";
import { useStepperStore } from "@/context/stepperStore";
import { Formik, Form, useFormikContext } from "formik";
import { initialValues } from "@/constant/forms/stepper";
import WrongNumber from "../btn/WrongNumber";
import Timer from "../btn/Timer";
import { motion } from "framer-motion";
import { stepAnimate } from "@/constant/stepperInputAnimation";
import BeatLoader from "react-spinners/BeatLoader";
import LoadingBtn from "../btn/LoadingBtn";
import SubmitBtn from "../btn/SubmitBtn";
import PrevBtn from "../btn/PrevBtn";

const InputBoxWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const step = useStepperStore((state) => state.step);
  const setStepNext = useStepperStore((state) => state.setStepNext);
  const setStepPrev = useStepperStore((state) => state.setStepPrev);
  const setRandomCode = useStepperStore((state) => state.setRandomCode);
  const setUserInfo = useStepperStore((state) => state.setData);
  const data = useStepperStore((state) => state.data);
  const error = useStepperStore((state) => state.error);
  const setError = useStepperStore((state) => state.setError);

  const handleNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStepNext();
    }, 2000);
  };

  const onSubmit = (values, actions) => {
    if (!isLoading) {
      if (step === children.length - 2) {
        setUserInfo({ ...values });
      } else {
        actions.setTouched({});
        actions.setSubmitting(false);
        if (step === 0) {
          setRandomCode();
        }
      }

      handleNext();
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnChange={step === 1 ? false : true}
        validationSchema={children[step]?.props.validationschema}
        onSubmit={onSubmit}>
        {(props) => {
          useEffect(() => {
            if (error) {
              props.setFieldValue("nationalcode", "");
              props.setFieldValue("email", "");
              setError(false);
            }
            return () => {
              if (error) {
                setError(false);
              }
            };
          }, [step]);
          const keyDownHandler = (event) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
              event.preventDefault();
            }
          };
          const keyUpHandler = (event) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
              props.handleSubmit();
            }
          };

          return (
            <Form
              onKeyDown={keyDownHandler}
              onKeyUp={keyUpHandler}
              autoComplete="off">
              {children[step]}
              <motion.div
                key={step}
                {...stepAnimate}
                className=" flex items-center justify-evenly flex-row-reverse">
                {step != 5 && (
                  <>
                    {isLoading ? (
                      <LoadingBtn />
                    ) : (
                      <SubmitBtn length={5} isLoading={isLoading} step={step} />
                    )}

                    {step > 1 && <PrevBtn setStepPrev={setStepPrev} />}
                  </>
                )}
                {step == 1 && <Timer />}
              </motion.div>
              {step == 1 && <WrongNumber click={setStepPrev} />}
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default InputBoxWrapper;
