import { useBasket } from "@/context/basket";
import PriceCount from "./PriceCount";
import SubmitBasketBtn from "./SubmitBasketBtn";

const Pricing = () => {
  const priceArray = useBasket.getState().basket;
  const basketPrice = priceArray.map((item) => item.price);
  const basketPriceSum = basketPrice.reduce((a, b) => a + b, 0);
  return (
    <>
      <div className="bg-mode-color  xs:text-[18px] text-[12px] pr-6 pl-3 py-3 flex  justify-between border-[#91919167] border-t-[1px] ">
        {priceArray.length ? (
          <>
            {" "}
            <div className="flex justify-between  w-full items-center ">
              <h4 className="font-bold text-primary ml-2">مجموع قیمت ها : </h4>
              <PriceCount price={basketPriceSum} />
             <SubmitBasketBtn basket={priceArray}/>
            </div>
          </>
        ) : (
          <>
            <div className="text-[#e05858] text-[12px]">
              دوره ای برای خرید موجود نیست
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Pricing;
