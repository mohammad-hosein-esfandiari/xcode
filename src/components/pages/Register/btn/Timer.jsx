import { useEffect, useState } from "react";
import { useStepperStore } from "@/context/stepperStore";
import { motion } from "framer-motion";
import { stepAnimate } from "@/constant/stepperInputAnimation";
function Timer({color}) {
  const setRandomCode = useStepperStore((state) => state.setRandomCode);
  const emptyRandomCode = useStepperStore((state) => state.emptyRandomCode);
  const randomCode = useStepperStore((state) => state.randomCode);
  const [second, setSecond] = useState(59);
  const [minute, setMinute] = useState(1);
  const [isStop, setIsStop] = useState(false);

  const clickHandler = () => {
    setRandomCode();
    setIsStop(false);
    setSecond(59);
    setMinute(1);
  };
  useEffect(() => {
    console.log(randomCode);
  }, [randomCode]);
  useEffect(() => {
    return () => emptyRandomCode();
  }, []);
  useEffect(() => {
    let timer;
    if (randomCode) {
      timer = setInterval(() => {
        if (second === 0) {
          setMinute((prev) => "0" + prev - 1);
          setSecond(59);
        }
        if (minute == 0 && second == 0) {
          clearInterval(timer);
          setIsStop(true);
          emptyRandomCode();
        }
        setSecond((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timer);
      setIsStop(true);
    }
    return () => clearInterval(timer);
  }, [second, randomCode]);

  
  return (
    <motion.div {...stepAnimate} className="">
      {!isStop ? (
        <div className="flex mt-4 items-center  ml-4 transition-all duration-500">
          <div
            className={`flex ${
              minute < 1 ? "text-red-500" : "text-green-700"
            } items-center text-[8px]`}>
            <span>{second < 10 ? "0" + second : second}</span>
            <span className="mt-[-3px]">:</span>
            <span>0{minute}</span>
          </div>
          <span className="text-[7px] mt-[-2px] text-gray-400 pr-2">
            زمان باقی مانده تا اعتبار کد
          </span>
        </div>
      ) : (
        <button
          onClick={clickHandler}
          className={` border-[1px] border-primary w-fit bg-transparent px-5 hover:scale-[1.05]  transition duration-500 py-[5px] ${color == 'white' ? 'sm:text-white text-mode-color ml-4': ' text-mode-color'}  rounded-[4px] text-[10px] mt-4`}>
          دریافت مجدد رمز
        </button>
      )}
    </motion.div>
  );
}

export default Timer;
