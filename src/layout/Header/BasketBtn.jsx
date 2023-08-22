"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import BasketBox from "./basket/BasketBox";
import { HiShoppingCart } from "react-icons/hi";
import { useBasket } from "@/context/basket";
import { RiShoppingCartFill } from "react-icons/ri";

import BasketCount from "./basket/BasketCount";
const BasketBtn = ({ type, icon }) => {
  const basket = useBasket((state) => state.basket);
  const [isShowBasket, setIsShowBasket] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsShowBasket(true)}
        className={` ${
          type
            ? type
            : "h-[34px] relative z-[8] cursor-pointer group sm:mr-0 hover:bg-primary  w-[36px] rounded-[4px] sm:ml-[8px] flex items-center justify-center p-[6px] sm:shadow-btnShadow  sm:bg-white"
        } `}>
        {icon ? (
          <HiShoppingCart className={icon} />
        ) : (
          <>
            {basket.length ? (
              <RiShoppingCartFill className="text-primary group-hover:text-white transition-all duration-300  font-bold text-[18px]" />
            ) : (
              <FiShoppingCart className="text-primary group-hover:text-white transition-all duration-300  font-bold text-[18px]" />
            )}
          </>
        )}
        {basket.length > 0 && <BasketCount count={basket.length} />}
      </div>
      <AnimatePresence>
        {isShowBasket && (
          <motion.div
            onClick={() => setIsShowBasket(false)}
            exit={{ opacity: 0, display: "hidden" }}
            initial={{ opacity: 0, display: "block" }}
            animate={{ opacity: 1, display: "block" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className=" z-[100]   bg-[#0d0d0d8b] fixed w-screen h-screen right-0 top-0">
            <BasketBox setToggle={setIsShowBasket} toggle={isShowBasket} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BasketBtn;
