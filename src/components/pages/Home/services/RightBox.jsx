import Image from "next/image";
import videCallServices from "@/assets/images/videCallServices.jpg";

import { HiPhone } from "react-icons/hi";
import { BsCameraVideoFill } from "react-icons/bs";
import { IoMdMicOff } from "react-icons/io";
import { RiCameraFill } from "react-icons/ri";

const RightBox = () => {
    return (
        <div className=" sm:pt-16  w-[100%]
        sm:w-[48.5%]
        lg:w-[52%]
        sm:mb-0
        mb-10
        ">
          <ul className=" bg-box-color p-4 shadow-md rounded-md mx-auto 
          w-[200px] h-[300px] 
          hlg:w-[400px] hlg:h-[530px]
          lg:w-[335px] lg:h-[450px] 
          md:w-[395px] md:h-[470px] 
          sm:w-[317px] sm:h-[400px] 
          sss:w-[100%] sss:h-[390px]
          xs:w-[70%] xs:h-[400px]
          
          ">
            <li className=" h-[78%] overflow-hidden rounded-md
            ">
              <Image
                src={videCallServices}
                className="w-full  transition-all rounded-md"
                alt="videCall"
              />
            </li>
            <li className=" h-[22%]">
              <ul className="flex justify-evenly xs:px-6 sss:px-4 items-center h-[80%]">
                <li className=" bg-red-500 text-2xl text-gray-50 flex items-center justify-center w-[35px] h-[35px] sss:w-[47px] sss:h-[47px] rounded-full ">
                  <HiPhone />
                </li>
                <li className=" bg-indigo-100 text-2xl text-primary flex items-center justify-center w-[35px] h-[35px] sss:w-[47px] sss:h-[47px] rounded-full ">
                  <BsCameraVideoFill />
                </li>
                <li className=" bg-indigo-100 text-2xl text-primary flex items-center justify-center w-[35px] h-[35px] sss:w-[47px] sss:h-[47px] rounded-full ">
                  <IoMdMicOff />
                </li>
                <li className=" bg-indigo-100 text-2xl text-primary flex items-center justify-center w-[35px] h-[35px] sss:w-[47px] sss:h-[47px] rounded-full ">
                  <RiCameraFill />
                </li>
              </ul>
              <div className=" flex pt-[10px] items-center justify-center h-[20%]">
                <span className=" w-[80px] rounded-full bg-gray-200 h-[5px]"></span>
              </div>
            </li>
          </ul>
        </div>
    );
}

export default RightBox;