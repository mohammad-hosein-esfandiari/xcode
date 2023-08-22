import Image from "next/image";
import forgetpass from '@/assets/images/forgetpass.jpg'
import forget from "@/assets/images/forget.png";
const LeftStep = () => {
    return (
        <div className=" md:flex justify-between relative bg-transparent overflow-hidden hidden flex-col flex-1">
        <div className="flex-1 overflow-hidden mr-[-5px]  bg-no-repeat bg-cover object-cover object-center sm:relative rounded-l-[6px] flex flex-col ">
          <Image  src={forgetpass} className="bg-cover w-full h-full object-cover object-center" priority={true} alt='forget'/>
          <div className="w-full h-full absolute bg-[#1b2146c7]"></div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full flex flex-col items-center justify-center">
          <div className="p-3 bg-[#44969080] rounded-full">
            <div className="text-color-green drop-shadow-text p-3 bg-color-green  rounded-full font-bold">
              <Image src={forget} alt="forget-pass" />
            </div>
          </div>
          <span className="mt-4 text-white drop-shadow-text">
            نگران نباشید ما دستورعمل های بازنشانی را برای شما ارسال خواهیم کرد..
          </span>
        </div>
      </div>
    );
}

export default LeftStep;