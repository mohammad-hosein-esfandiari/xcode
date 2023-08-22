"use client";
import { useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";
import { useUrlArray } from "@/hooks/useUrlArray";
const PageToggle = ({
  href,
  setPageToggle,
  pageToggle,
  pageShow,
  setPageShow,
  show1,
  show2,
  show3,
}) => {
  const router = useRouter();
  const { queryArray, limit, page } = useSearchParamsInUrl();
  const { pathname } = useUrlArray();

  const openHandler = (event) => {
    event.stopPropagation();
    setPageToggle(!pageToggle);
  };

  const closeHandler = () => {
    setPageToggle(false);
  };
  useEffect(() => {
    setPageShow(Number(limit).toLocaleString("fa-IR"));
    window.addEventListener("click", closeHandler);
    return () => window.removeEventListener("click", closeHandler);
  }, []);
  const toggleHandler = (num) => {
    setPageShow(num);
    if (pathname[2] === "my-courses") {
      router.push(`/student-panel/my-courses?limit=${num}&page=1`);
    } else if (pathname[1] === "courses") {
      if (queryArray) {
        router.push(
          `${href}?limit=${num}&page=1&filter=${queryArray?.join("_")}`
        );
      } else {
        router.push(`${href}?limit=${num}&page=1&filter=newest`);
      }
    }else if(pathname[2] === "courses-list"){
      router.push(`/student-panel/courses-list?limit=${num}&page=1&filter=newest`);
    }
  };
  return (
    <ul
      onClick={openHandler}
      className="px-2 w-[50px] cursor-pointer relative py-1 rounded-md bg-primary shadow-boxShadow  h-full flex flex-row-reverse items-center">
      {!pageToggle ? (
        <MdKeyboardArrowUp className="text-white" />
      ) : (
        <MdKeyboardArrowDown className="text-white" />
      )}

      <span className="ml-2 text-white">
        {pageShow.toLocaleString("fa-IR")}
      </span>
      {pageToggle && (
        <li className="absolute z-20 shadow-boxShadow w-full left-0 top-10 rounded-md bg-white p-2">
          <ul className="rounded-md bg-indigo-200">
            <li
              onClick={() => toggleHandler(show1)}
              className={`px-3 ${
                pageShow == show1.toLocaleString("fa-IR") || pageShow == show1
                  ? "bg-primary text-white"
                  : "hover:bg-indigo-500 hover:text-white"
              }  rounded-t-md border-b-[1px] text-center`}>
              {show1.toLocaleString("fa-IR")}
            </li>
            <li
              onClick={() => toggleHandler(show2)}
              className={`px-3 ${
                pageShow == show2.toLocaleString("fa-IR") || pageShow == show2
                  ? "bg-primary text-white"
                  : "hover:bg-indigo-500 hover:text-white"
              }  border-b-[1px] text-center`}>
              {show2.toLocaleString("fa-IR")}
            </li>
            <li
              onClick={() => toggleHandler(show3)}
              className={`px-3 ${
                pageShow == show3.toLocaleString("fa-IR") || pageShow == show3
                  ? "bg-primary text-white"
                  : "hover:bg-indigo-500 hover:text-white"
              }  rounded-b-md  text-center`}>
              {show3.toLocaleString("fa-IR")}
            </li>
          </ul>
        </li>
      )}
    </ul>
  );
};

export default PageToggle;
