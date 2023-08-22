"use client";
import { toggleMenus } from "@/animations/toggleMenues";
import { motion } from "framer-motion";
import BasketItem from "./BasketItem";
import Pricing from "./Pricing";
import Head from "./HeadRow";
import BasketItemHolder from "./BasketItemHolder";
const BasketBox = ({ toggle, setToggle }) => {
  return (
    <motion.div
      onClick={(event) => event.stopPropagation()}
      initial={{ x: "100%" }}
      animate={toggle ? toggleMenus.open : toggleMenus.closed}
      exit={toggleMenus.exit}
      className={` border-l-[1px] border-[#91919167]  ss:w-[500px] xs:w-[96.5%] w-[95.5%] h-full  flex flex-col justify-between   overflow-hidden shadow-boxShadow2  bg-linear2 `}>
      <div className="flex-1 flex flex-col">
        <Head setToggle={setToggle} title="سبد خرید" />
        <BasketItemHolder />
      </div>
      <Pricing />
    </motion.div>
  );
};

export default BasketBox;
