'use client'
import{ useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";
import { useStepperStore } from "@/context/stepperStore";
import { useRouter } from "next/navigation";

function Final() {
  const userData = useStepperStore((state) => state.data);
  const navigate = useRouter();
  useEffect(() => {
    setTimeout(() => {
      navigate.push("/");
    }, 3000);
  }, []);
  return (
    <motion.div
      transition={{ duration: 1 }}
      animate={{ y: 0, opacity: 1,  }}
      initial={{ y: 50, opacity: 0,  }}
      className=" h-[400px] md:w-[70%] flex px-8  mx-auto shadow-boxShadow rounded-lg bg-color-green">
      <motion.div
        transition={{ duration: 1, delay: 1.2 }}
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        className="w-full h-full py-4 flex flex-col items-center justify-between">
        <div className="flex h-[70%] flex-col items-center pt-6 justify-between">
          <div className=" flex items-center justify-center ">
            <TiTick className="text-[80px] text-white border-8 rounded-full " />
          </div>
          <span className="">ثبت نام با موفقیت انجام شد</span>
          <span className="font-bold text-center text-[20px]">
            کاربر گرامی {userData.name} به سایت ما خوش آمدید.{" "}
          </span>
        </div>
        <div className="flex items-center">
          <ClipLoader size={12} />
          <span className="pr-2">در حال انتقال به صفحه اصلی</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Final;
