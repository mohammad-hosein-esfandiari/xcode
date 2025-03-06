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
          <span className="text-[8px] mt-[-2px] text-gray-400 pr-2">
          time remaining until the code expire
          </span>
            <span>0{minute}</span>
            <span className="mt-[-3px]">:</span>
            <span className="pr-2">{second < 10 ? "0" + second : second}</span>
          </div>
        </div>
      ) : (
        <button
          onClick={clickHandler}
          className={` border-[1px] border-primary w-fit mr-2 bg-transparent px-2 hover:scale-[1.03]  transition duration-500 py-[5px] ${color == 'white' ? 'sm:text-white text-mode-color': ' text-mode-color'}  rounded-[4px] text-[10px] mt-4`}>
          Resend verification code
        </button>
      )}
    </motion.div>
  );
}

export default Timer;
