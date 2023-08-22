"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import SearchBtn from "./SearchBtn";
import { useUserInfo } from "@/context/userInfoStore";
import { AiOutlineUserAdd } from "react-icons/ai";
import UserBtn from "./UserBtn";
import LinkCp from "@/components/common/LinkCp";
// import BasketBtn from "./BasketBtn";
const BasketBtn = dynamic(() => import("./BasketBtn"), {
  ssr: false,
});
const AuthBtn = () => {
  const userInfo = useUserInfo((state) => state.userInfo);
  const isUserLoggedIn = useUserInfo((state) => state.login);


  return (
    <ul className="flex items-center">
      {isUserLoggedIn ? (
        <>
          <li className="sm:block relative hidden">
            <UserBtn userRole={userInfo.studentModel.role} text={userInfo.studentModel.fullName}/>
            
        
          </li>
          <LinkCp
            href="/student-panel/dashboard"
            className="md:bg-white  rounded-[4px] hover:bg-primary w-[40px] h-[34px] flex sm:hidden sm:ml-[16px] group items-center justify-center  overflow-hidden md:shadow-btnShadow  sm:hover:bg-slate-500 ">
            <AiOutlineUserAdd className="text-primary group-hover:text-white transition-all duration-300  font-bold text-[18px]" />
          </LinkCp>
        </>
      ) : (
        <>
          {" "}
          <li className="sm:block hidden">
            <PrimaryBtn
              href="/auth/login"
              text="ورود/ثبت نام"
              icon={<AiOutlineUserAdd />}
            />
          </li>
          <LinkCp
            href="/auth/login"
            className="md:bg-white  rounded-[4px] hover:bg-primary w-[40px] h-[34px] flex sm:hidden sm:ml-[16px] group items-center justify-center  overflow-hidden md:shadow-btnShadow  sm:hover:bg-slate-500 ">
            <AiOutlineUserAdd className="text-primary group-hover:text-white transition-all duration-300  font-bold text-[18px]" />
          </LinkCp>
        </>
      )}

      <BasketBtn />
      <SearchBtn />
    </ul>
  );
};

export default AuthBtn;
