
import { MdDone } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { TiSortNumerically } from "react-icons/ti";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiCakeFill } from "react-icons/ri";

const RightSideStepper = ({steps,currentStep}) => {

    const icons = [
        <IoCall />,
        <TiSortNumerically />,
        <MdDriveFileRenameOutline />,
        <RiCakeFill />,
        <RiLockPasswordFill />,
      ];

    return (
        <div className="bg-linear3 hidden  rounded-r-[6px] md:w-[40%] relative py-2 sm:flex items-center">

<div className="p-6 overflow-hidden  flex flex-col justify-center">
      {steps.map((step, index) => (
        <div key={index} className="flex transition-all duration-800">
          {/* bordered row detail */}
          <div className="flex mt-2 flex-col justify-center items-center">
            <span
              className={`transition-all duration-800 text-white flex items-center justify-center w-10 h-10 text-[18px] rounded-full
            ${
              currentStep + 1 === index + 1
                ? "border-[6px] scale-[1.4] opacity-100"
                : currentStep + 1 > index + 1
                ? "bg-white "
                : "border-[1px] opacity-50  text-register border-register"
            }
            `}>
              {currentStep + 1 === index + 1 ? (
                icons[index]
              ) : currentStep + 1 > index + 1 ? (
                <MdDone className="transition-all duration-800 text-primary " />
              ) : (
                 icons[index]
              )}
            </span>
            {index !== steps.length - 1 && (
              <span
                className={`  
              ${
                currentStep + 1 === index + 1
                  ? "h-[80px] mb-[-8px] transition-all duration-1000 border-white border-r-[2px] opacity-100"
                  : currentStep + 1 > index + 1
                  ? "border-r-[2px] h-12 mb-[-8px] transition-all duration-1000 border-white bg-white"
                  : "border-r-[1px] transition-all duration-1000 opacity-50  h-10 mb-[-8px] text-register border-register"
              }`}></span>
            )}
          </div>
          {/* description detail */}
          <div
            className={` transition-all hidden md:block duration-800 h-fit pt-3 pr-3 ${
              currentStep + 1 === index + 1
                ? " text-white font-bold text-[25px] pr-6 opacity-100 "
                : currentStep + 1 > index + 1
                ? "text-white  text-[20px]"
                : `text-register border-register opacity-50 text-[20px] `
            }`}>
            {step}
          </div>
        </div>
      ))}
    </div>
        </div>
    );
}

export default RightSideStepper;