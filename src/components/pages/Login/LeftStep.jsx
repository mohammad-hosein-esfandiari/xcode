import Image from "next/image";
import login from "@/assets/images/login.jpg";
const LeftStep = () => {
  return (
    <div className=" md:flex justify-between relative bg-transparent overflow-hidden hidden flex-col flex-1">
      <div className="flex-1 overflow-hidden mr-[-5px] bg-no-repeat bg-cover object-cover object-center sm:relative rounded-l-[6px] flex flex-col ">
        <Image
        alt="login"
        priority={true}
          src={login}
          className="w-full h-full bg-cover object-cover object-center"
        />
        <div className="w-full h-full  absolute bg-[#131731c7]"></div>
      </div>
      <div className="absolute top-0 right-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-color-green drop-shadow-text text-[45px] font-bold">
          به XCODE خوش اومدید
        </h1>
        <span className="mt-4 text-white drop-shadow-text">
          با ما بهترین و ساده ترین روش آموزش را تجربه کنید...
        </span>
      </div>
    </div>
  );
};

export default LeftStep;
