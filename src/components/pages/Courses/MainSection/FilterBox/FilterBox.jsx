"use client";

import { motion } from "framer-motion";
import { filterBox } from "@/animations/filterBoxAnim";
import HeadRow from "@/layout/Header/basket/HeadRow";
import InputHolder from "./InputHolder";
import FilterButton from "./FilterButton";
const FilterBox = ({ show ,href}) => {
  return (
    <motion.div
      {...filterBox}
      onClick={(event) => event.stopPropagation()}
      className=" sm:rounded-[4px] border-[1px] border-[#7777778b] overflow-hidden sm:absolute right-0 fixed sm:top-10 top-[0] sm:h-fit sm:z-[18] z-[25] bg-linear5 flex flex-col justify-between shadow-boxShadow sm:w-[400px] w-[100vw] h-[100vh]">
      <HeadRow setToggle={show} title="فیلتر سازی" />
      <InputHolder href={href} />
      <FilterButton href={href} />
    </motion.div>
  );
};

export default FilterBox;
