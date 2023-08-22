'use client'
import { useBasket } from "@/context/basket";
import BasketItem from "./BasketItem";
import { useEffect, useState } from "react";
import { FaShopify } from "react-icons/fa";


const BasketItemHolder = () => {
    const basket = useBasket(state => state.basket)
    const [basketArray,setBasketArray] = useState([])
    useEffect(()=>{
        setBasketArray(basket)
    },[basket])
  return (
    <div className="flex-1 overflow-y-auto">
      {
        basketArray.length ? (<> {basketArray.map((item) => (
          <BasketItem {...item} key={item.id} />
        ))}</>) : (<>
          <ul className=" w-full flex items-center justify-center h-full">
            <li className="flex  w-fit p-4 rounded-[4px] flex-col items-center justify-center">
              <FaShopify className="text-[100px] text-primary mb-4"/>
              <span className="text-[20px] font-bold text-[#e05858]">سبد خرید شما خالی است</span>
            </li>
          </ul>
        </>)
      }
     
    </div>
  );
};

export default BasketItemHolder;
