"use client";
import LinkCp from "@/components/common/LinkCp";
import { useUserInfo } from "@/context/userInfoStore";
import Link from "next/link";

const UserBtn = ({ icon, userRole ,text }) => {
  const logOutHandler = () => {
    useUserInfo.getState().setUserLogout();
  };
  return (
    <div className="bg-primary cursor-pointer group relative rounded-[4px] flex items-center sm:ml-[8px] h-[34px] py-[6px] px-[10px] text-[14px]  text-white shadow-btnShadow hover:bg-[#5c5c5c] transition-all duration-300">
      <span>{text}</span>
      {icon && <i className="text-[16px] mr-2">{icon}</i>}
      <ul className="overflow-hidden absolute bg-mode-color shadow-boxShadow2 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 w-[200px] border-[#a6a6a67d] border-[1px] top-[2.5rem] rounded-[4px] group-hover:right-0 right-[100%]">
        {userRole == "student" && (
          <>
            <li className="border-b-[1px] text-center cursor-pointer px-4 py-4 text-primary md:text-[16px] text-[14px] hover:bg-primary hover:text-white transition-all duration-300  border-[#a6a6a67d]">
              <LinkCp href="/student-panel/dashboard">پنل دانشجو</LinkCp>
            </li>
          </>
        )}
        <li
          onClick={logOutHandler}
          className="text-center cursor-pointer text-red-500 px-4 py-4 md:text-[16px] text-[14px] hover:bg-red-500 hover:text-white transition-all duration-300 ">
          <button>خروج از حساب کاربری</button>
        </li>
      </ul>
    </div>
  );
};

export default UserBtn;
