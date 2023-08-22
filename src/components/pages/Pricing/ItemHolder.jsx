"use client";
import { useBasket } from "@/context/basket";
import { getLocaleStorage } from "@/core/utils/getlocaleStorage";
import BasketItem from "@/layout/Header/basket/BasketItem";
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const ItemHolder = () => {
  const [basket, setBasket] = useState([]);
  const arrayBasket = useBasket(state => state.basket)
  useEffect(() => {
    const getBasket = async () => {
      const array = await getLocaleStorage("basket");
      if (array?.state.basket) {
        const basket = array.state.basket;
        setBasket(basket);
      }
    };
    getBasket()
  }, [arrayBasket]);
  return (
    <div className={`py-4 border-[2px] h-full overflow-y-auto rounded-[4px] ${basket.length ? "border-[#9494945d]" : "border-[#880b0ba3]"} `}>
        {basket.length ? (<>  {basket.map((item) => (
        <BasketItem key={item.id} {...item} />
      ))}</>): (<div className=" w-full h-full flex flex-col items-center justify-center">
        <FiShoppingCart className="text-[60px] text-primary"/>
        <div className="text-[#e05858] mt-4">سبد خرید خالی است</div>
      </div>)}
    
    </div>
  );
};

export default ItemHolder;
