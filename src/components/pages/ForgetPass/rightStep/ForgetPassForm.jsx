"use client";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useStepperStore } from "@/context/stepperStore";
import { ForgetPassInitialValues } from "@/constant/forms/forgetpass";
import { MdLogin } from "react-icons/md";
import { motion } from "framer-motion";
import { stepAnimate } from "@/constant/stepperInputAnimation";
import Timer from "../../Register/btn/Timer";
import PrevBtn from "../../Register/btn/PrevBtn";
import LoadingBtn from "../../Register/btn/LoadingBtn";
import SubmitBtn from "../../Register/btn/SubmitBtn";
import ForgetPassHead from "./ForgetPassHead";
import Link from "next/link";
import { useUserInfo } from "@/context/userInfoStore";

export default function ForgetPassForm({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const step = useStepperStore((state) => state.step);
  const setStepNext = useStepperStore((state) => state.setStepNext);
  const setStepZero = useStepperStore((state) => state.setStepZero);
  const setStepPrev = useStepperStore((state) => state.setStepPrev);
  const setRandomCode = useStepperStore((state) => state.setRandomCode);
  const userInfo = useUserInfo((state) => state.userInfo);

  useEffect(() => {
    setStepZero();
  }, []);

  useEffect(() => {
    if (step === 5) {
      setTimeout(() => {
        setStepNext();
      }, 2000);
    }
  }, [step]);

  const handleNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStepNext();
    }, 2000);
  };
  const onSubmit = async (values, actions) => {
    if (!isLoading) {
      if (step === children.length - 1) {
          console.log(values)
        console.log(userInfo.studentModel._id)
      } else {
        handleNext();
        actions.setTouched({});
        actions.setSubmitting(false);
        if (step === 0) {
          setRandomCode();
        }
      }
    }
  };
  return (
    <div className="sm:bg-linear3  w-full md:rounded-l-[0px] rounded-l-[6px] rounded-r-[6px] md:w-[40%]  flex flex-col items-center  justify-evenly sm:relative py-28 ">
      <ForgetPassHead />
      <div className=" sss:scale-[1.4] mt-[70px]">
        <Formik
          initialValues={ForgetPassInitialValues}
          validateOnChange={step === 1 ? false : true}
          validationSchema={children[step]?.props.validationschema}
          onSubmit={onSubmit}>
          {() => (
            <Form autoComplete="off">
              {children[step]}
              <motion.div
                key={step}
                {...stepAnimate}
                className=" flex  items-center justify-evenly flex-row-reverse">
                {step != 5 && (
                  <>
                    {isLoading ? (
                      <LoadingBtn />
                    ) : (
                      <SubmitBtn length={4} isLoading={isLoading} step={step} />
                    )}

                    {step > 1 && <PrevBtn color="white" setStepPrev={setStepPrev} />}
                  </>
                )}
                {step == 1 && <Timer color="white" />}
              </motion.div>
            </Form>
          )}
        </Formik>
      </div>
      <Link
        href="/auth/login"
        className=" absolute text-[30px] group z-10 sm:text-white text-primary peer hover:scale-[1.1] transition-all duration-500 top-3 right-3">
        <MdLogin className="" />

        <div className=" bg-[#33333395] group-hover:opacity-100 opacity-0 group-hover:visible invisible text-center group-hover:right-10 transition-all duration-300   absolute top-[2px] right-8 text-[13px] px-6 py-1 rounded-md">
          ورود
        </div>
      </Link>
    </div>
  );
}
