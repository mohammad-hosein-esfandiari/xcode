"use client";

import { FaFilter } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";


import FilterBox from "./FilterBox/FilterBox";
import Chips from "./Chips";

const RightFIlter = ({href,posts}) => {
  const [isShow, setIsShow] = useState(false);


  useEffect(()=>{
  
    window.addEventListener('click',()=> setIsShow(false))
    return ()=> window.removeEventListener('click',()=> setIsShow(false))
  },[])
  const filterBtnClick = (event)=>{
    event.stopPropagation()
    setIsShow(!isShow)
  }
  return (
    <div className="flex items-center">
      <div className="flex  sm:relative  items-center">
      <button
        onClick={filterBtnClick}
        className=" shadow-lg rounded-[4px] px-4 xs:py-1 py-2 flex items-center justify-between bg-primary">
        <FaFilter className="text-white" />
        <div className="xs:pr-4 text-white"><span className="xs:block hidden">فیلترسازی</span></div>
      </button>
      <AnimatePresence>
        {isShow && <FilterBox posts={posts} href={href} show={setIsShow} />}
      </AnimatePresence>
      <Chips href={href}/>
      </div>
    </div>
  );
};

export default RightFIlter;
