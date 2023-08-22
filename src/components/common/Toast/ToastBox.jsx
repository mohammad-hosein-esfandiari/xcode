"use client";
import { ToastContainer, toast } from "react-toastify";
import { useToastBox } from "@/context/toastBoxStore";
import { useEffect } from "react";
import { useStepperStore } from "@/context/stepperStore";
import { usePathname } from "next/navigation";
const ToastBox = () => {
  const path = usePathname()
  const randomCode = useStepperStore((state) => state.randomCode);


  useEffect(() => {
    if (randomCode) {
      setTimeout(() => {
        toast(`کد یک بار مصرف : ${randomCode}`, {
          autoClose: 120000,
        });
      }, 3000);
    } else {
      toast.dismiss();
    }
    return () => toast.dismiss();
  }, [randomCode,path]);
 
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={true}
        theme="light"
        rtl={true}
        className="sm:w-fit sm:mt-4 px-8 text-[14px]  rounded-[4px] mt-6 w-[95.5%]"
      />
    </>
  );
};

export default ToastBox;
