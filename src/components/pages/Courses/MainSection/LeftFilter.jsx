"use client";

import { useState } from "react";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import { BsGridFill } from "react-icons/bs";
import { useCoursesGridShow } from "@/context/coursesGridShow";
import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";
import PageToggle from "@/components/common/PageToggle/PageToggle";

const LeftFilter = () => {
  const {limit} = useSearchParamsInUrl()
  const setGridShow = useCoursesGridShow((state) => state.setGridShow);
  const gridShow = useCoursesGridShow((state) => state.grid);
  const [pageToggle, setPageToggle] = useState(false);
  const [pageShow, setPageShow] = useState(Number(limit).toLocaleString('fa-IR'));
  return (
    <div className=" flex items-center">
      {/* <ul className="flex flex-row-reverse ml-2">
        <li
          onClick={() => setGridShow(true)}
          className={`mr-2 cursor-pointer rounded-md  shadow-boxShadow p-2 ${
            gridShow ? "bg-primary text-white" : "text-slate-500 bg-white"
          } `}>
          <BsGridFill />
        </li>
        <li
          onClick={() => setGridShow(false)}
          className={` cursor-pointer rounded-md  shadow-boxShadow p-2 ${
            !gridShow ? "bg-primary text-white" : "text-slate-500 bg-white"
          } `}>
          <TfiLayoutListThumbAlt />
        </li>
      </ul> */}

      <PageToggle
        href='/courses'
        show1={6}
        show2={9}
        show3={12}
        pageToggle={pageToggle}
        setPageShow={setPageShow}
        pageShow={pageShow}
        setPageToggle={setPageToggle}
      />
    </div>
  );
};

export default LeftFilter;
