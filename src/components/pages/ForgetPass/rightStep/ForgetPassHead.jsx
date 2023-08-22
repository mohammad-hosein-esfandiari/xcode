import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

const ForgetPassHead = () => {
  return (
    <>
      <Link
        href="/"
        className=" absolute group text-[30px] z-10 sm:text-white text-primary hover:scale-[1.1] transition-all duration-500 top-3 left-3">
        <AiOutlineHome />
        <div className=" bg-[#33333395] group-hover:opacity-100 opacity-0 group-hover:visible invisible text-center group-hover:left-10 transition-all duration-300   absolute top-[2px] left-8 text-[13px] px-6 py-1 rounded-md">
          خانه
        </div>
      </Link>
      <h1 className=" sm:mt-[-30px] mt-[-50px]  w-full text-center  sm:text-white text-primary sm:text-[40px] text-[30px]  h-fit ">
        فراموشی رمز عبور
      </h1>
    </>
  );
};

export default ForgetPassHead;
