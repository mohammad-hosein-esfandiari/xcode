"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { toggleMenus } from "@/animations/toggleMenues";
import { header } from "@/constant/headerLinks";
import { useUserInfo } from "@/context/userInfoStore";
import Link from "next/link";
import Logo from "@/assets/svg/Logo";

const DrawerMenu = () => {
  const userInfo = useUserInfo((state) => state.userInfo);
  const isUserLogin = useUserInfo((state) => state.login);
  const setUserLogout = useUserInfo((state) => state.setUserLogout);
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuBtn = (event) => {
    event.stopPropagation();
    setToggleMenu((prev) => !prev);
  };
  const logOutHandler = ()=>{
    setUserLogout()
    setToggleMenu(false)
  }
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1060 && setToggleMenu(false)
    );
  }, []);
  return (
    <div>
      <motion.li
        onClick={toggleMenuBtn}
        className="h-full sm:mr-0 mr-[-9px] overflow-hidden w-[36px] rounded-[4px] sm:ml-[8px]  md:hidden flex items-center justify-center p-[6px] sm:shadow-btnShadow  sm:bg-white">
        <button className="h-full group ">
          {toggleMenu ? (
            <motion.li
              className=""
              animate={{ rotate: "90deg" }}
              transition={{ duration: 0.8 }}>
              <HiOutlineMenu className="text-primary transition-all duration-300  text-[22px]" />
            </motion.li>
          ) : (
            <motion.li animate={{ rotate: "0" }} transition={{ duration: 0.8 }}>
              <HiOutlineMenu className="text-primary transition-all duration-300  text-[22px]" />
            </motion.li>
          )}
        </button>
      </motion.li>
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            onClick={() => setToggleMenu(false)}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className=" z-10  bg-[#0d0d0d8b] fixed w-[100vw] h-[100vh] flex right-0 top-0">
            <motion.li
              onClick={(event) => event.stopPropagation()}
              initial={{ x: "100%" }}
              animate={toggleMenu ? toggleMenus.open : toggleMenus.closed}
              exit={toggleMenus.exit}
              className={` flex flex-col md:w-[0] ss:w-1/2 w-full h-[100vh]  pl-0  shadow-boxShadow2 z-30 bg-mode-color  `}>
              <div
                dir="ltr"
                className="flex flex-row-reverse justify-between items-center px-8 py-4 border-b-[1px] w-full">
                <Logo />
                <motion.div
                  className="w-fit h-fit"
                  onClick={() => setToggleMenu(false)}
                  whileHover={{ rotate: "90deg" }}>
                  <MdOutlineClose className="text-mode-color text-[25px] cursor-pointer " />
                </motion.div>
              </div>
              {isUserLogin && (
                <div className=" bg-primary border-b-[1px] text-white text-center py-4 ">
                  {userInfo.studentModel.fullName}
                </div>
              )}
              <div className="flex flex-col xs:flex-1 xs:justify-between">
                <div className=" pt-4">
                  {toggleMenu &&
                    header.map((item, index) => (
                      <motion.div
                        key={item.id}
                        className=" py-3 flex items-center w-full border-b-[1px]  border-[#77777768] transition-all text-textColor  hover:text-slate-500 pr-4">
                        <Link
                          onClick={() => setToggleMenu(false)}
                          className=" w-full h-full flex   hover:text-slate-500"
                          href={item.href}>
                          <span className="ml-2 ">{item.icon}</span>
                          <span className="flex items-center">
                            {item.title}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                </div>
                {isUserLogin && (
                  <button
                    onClick={logOutHandler}
                    className="text-white bg-red-500 w-fit px-4 mx-auto my-3 rounded-[4px] py-2 text-center">
                    خروج از حساب کاربری
                  </button>
                )}
              </div>
            </motion.li>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DrawerMenu;
