'use client'
import Link from "next/link";

import { studentTabLink } from "@/constant/studentPanelLink";
import { MdOutlineLogout } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

import UserInfo from "./UserInfo";
import LinkItem from "./LinkItem";
import { getCookie } from "@/core/utils/cookies.storage";
import { useUserInfo } from "@/context/userInfoStore";
import { useRouter } from "next/navigation";

const RightTabs = () => {
  const navigate = useRouter()
  const user = useUserInfo(state => state.userInfo)
  const setUserLogout = useUserInfo(state => state.setUserLogout)
  const logOutHnadler = ()=>{
    navigate.push('/')
    setUserLogout()
  }
  return (
    <ul className="ss:h-full  overflow-hidden hlg:py-6 flex pb-[6px] w-full items-center ss:items-stretch ss:mr-0 hlg:w-[23%] ss:w-16 lg:w-[25%] ss:flex-col justify-between">
      <li className="lg:pt-4  ss:block flex w-full items-center justify-around ss:px-0 px-2 ss:pt-2">
        <UserInfo userInfo={user} />
        <Link
          href="/"
          className="text-pl-white transition-all duration-300 ss:px-0 px-3 ss:mb-3 flex rounded-b-lg ss:rounded-bl-none ss:rounded-r-lg  items-center justify-center lg:justify-start py-3 lg:py-0  lg:absolute right-3 top-3  text-[25px]  hover:scale-[1.03]">
          <AiOutlineHome />
        </Link>
        {studentTabLink.map((item) => (
          <LinkItem key={item.id} {...item} />
        ))}
      </li>
      <button onClick={logOutHnadler} className=" hover:text-red-700 text-pl-white justify-center ss:mb-4 ss:py-2 flex items-center">
        <MdOutlineLogout className="lg:text-[20px] ss:block hidden text-[25px] ml-2" />
        <span  className="text-[14px] hidden lg:block">خروج از حساب کاربری</span>
      </button>
    </ul>
  );
};

export default RightTabs;
