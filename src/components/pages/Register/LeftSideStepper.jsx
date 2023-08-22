

import Link from "next/link";
import RegisterForm from "./form/RegisterForm";
import { AiOutlineHome } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import LinkCp from "@/components/common/LinkCp";


const LeftSideStepper = () => {



    return (
        <div className=" flex justify-between flex-col flex-1">
        <div className="flex-1 sm:relative rounded-l-[6px] flex flex-col sm:bg-registerbg">
        <Link
          href="/"
          className=" absolute text-[30px] z-10 text-primary hover:scale-[1.1] transition-all duration-500 top-3 left-3">
          <AiOutlineHome />
        </Link>
        <LinkCp href='/auth/login' className=" absolute text-[30px] z-10  text-primary hover:scale-[1.1] transition-all duration-500 top-3 right-3"><MdLogin/></LinkCp>

          <h2 className=" drop-shadow-text pt-10 sm:pt-6 text-bold text-primary text-[35px] w-full text-center">
            ثبت نام
          </h2>
          <div className="flex flex-col items-center scale-[1.5] justify-center flex-1">
            <RegisterForm />
          </div>
        </div>
      </div>
    );
}

export default LeftSideStepper;