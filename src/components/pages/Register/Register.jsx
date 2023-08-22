"use client";

import { useEffect } from "react";
import { stepText } from "@/constant/steps";

import { useStepperStore } from "@/context/stepperStore";
import RightSideStepper from "./RightSideStepper";
import LeftSideStepper from "./LeftSideStepper";
import Final from "./stepBox/Final";

const Register = () => {
  const setStepZero = useStepperStore((state) => state.setStepZero);
  const currentStep = useStepperStore((state) => state.step);


  useEffect(() => {
    document.body.style.backgroundImage = "var(--linear-1)";
    setStepZero();
    return () => setStepZero();
  }, []);
  return (
    <>
      <div className=" flex flex-col  justify-center w-full min-h-[100vh]">
        <div className="xl:container px-[10px] sm:px-[50px]  lg:px-[110px]">
          {currentStep === 6 ? (
            <>
              <Final />
            </>
          ) : (
            // stepper wrapper
            <div className="  h-[500px] flex  mx-auto sm:shadow-modeShadow rounded-lg   sm:bg-registerbg">
              <RightSideStepper steps={stepText} currentStep={currentStep} />
              <LeftSideStepper />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
