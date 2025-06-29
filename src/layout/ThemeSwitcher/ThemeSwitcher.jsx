"use client";

import { useState, useEffect } from "react";
import { IoMdColorPalette } from "react-icons/io";
import ThemeBtnHolder from "./ThemeBtnHolder";
import { usePathname } from "next/navigation";
import { useUrlArray } from "@/hooks/useUrlArray";
const ThemeSwithcher = () => {
  const [isShowTheme, setIsShowTheme] = useState(false);
  const { pathname } = useUrlArray();

  useEffect(() => {
    window.addEventListener("click", () => setIsShowTheme(false));
    return () =>
      window.removeEventListener("click", () => setIsShowTheme(false));
  }, []);
  const clickHandler = (event) => {
    event.stopPropagation();
    setIsShowTheme(!isShowTheme);
  };
  return (
    <div
      className={`fixed ss:z-[100] z-[15] left-2 flex flex-col-reverse  ${
        pathname[1] === "student-panel"
          ? "ss:bottom-5 bottom-16 ss:left-5 left-4"
          : "ss:bottom-5 ss:left-5 left-3 bottom-3"
      }   `}>
      <button
        onClick={clickHandler}
        className="text-white bg-primary shadow-modeShadow rounded-full ss:p-3 p-2  cursor-pointer ">
        <IoMdColorPalette className="text-[25px]" />
      </button>
      <div
        className={`transition-all rounded-full overflow-hidden duration-500 ${
          isShowTheme ? "h-[175px] opacity-100" : "invisible opacity-0 h-0"
        } `}>
        <ThemeBtnHolder />
      </div>
    </div>
  );
};

export default ThemeSwithcher;
