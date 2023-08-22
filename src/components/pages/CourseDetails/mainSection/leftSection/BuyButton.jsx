"use client";

import { useEffect, useState } from "react";
import AcceptModal from "../../../../common/Modal/AcceptModal";
import { useBasket } from "@/context/basket";
import { getCookie } from "@/core/utils/cookies.storage";
import { useUserInfo } from "@/context/userInfoStore";
import { toast } from "react-toastify";

const BuyButton = ({ cost, users, courseId, title, image }) => {
  const setAddToBasket = useBasket((state) => state.setAddToBasket);
  const basket = useBasket((state) => state.basket);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const user = useUserInfo(state => state.userInfo);
  const isUserInCourse = users.some(
    (item) => item._id === user?.studentModel._id
  );
  console.log("isUserInCourse", isUserInCourse)
  const isInBasket = basket.some((item) => item.id === courseId);
  const addTobasketHandler = async () => {
    const obj = {
      id: courseId,
      title,
      price: cost,
      image,
      students:users
    };
    setLoading(true);
    setTimeout(async () => {
      await setAddToBasket(obj);
      setSuccess(true);
      setLoading(false);
    }, 500);
  };

  const buyCLickHandler =()=>{
   

      setModal(true)

  
  }

  return (
    <div>
      {isUserInCourse ? (
        <>
          <button className="w-full   md:shadow-none shadow-modeShadow  transition-all text-white duration-300  bg-primary md:py-4 ss:py-3 py-2 md:rounded-[4px] rounded-[30px] text-center sss:text-[16px] text-[10px]">
            شما دانشجوی این دوره اید
          </button>
        </>
      ) : (
        <>
          <button
            disabled={isInBasket}
            onClick={buyCLickHandler}
            className="w-full  hover:scale-[1.02] md:shadow-none shadow-modeShadow  transition-all text-white duration-300 cursor-pointer bg-primary md:py-4 ss:py-3 py-2 md:rounded-[4px] rounded-[30px] text-center sss:text-[16px] text-[10px]">
            {isInBasket ? (
              <span className="text-[14px]">دوره در سبد خرید موجود است</span>
            ) : (
              "افزودن به سبد خرید"
            )}
            <span className="mr-2 md:hidden text-[#e05858]">
              {!isInBasket && (
                <>{`( ${cost ? cost.toLocaleString("fa-IR") : "رایگان"} )`} </>
              )}
            </span>
          </button>
        </>
      )}

      <AcceptModal
        setSuccess={setSuccess}
        success={success}
        setLoading={setLoading}
        loading={loading}
        showModal={modal}
        setIsShowModal={setModal}
        submitHandler={addTobasketHandler}
        text="دوره مورد نظر به سبد خرید اضافه شود؟"
        successText="دوره به سبد خرید اضافه شد"
      />
    </div>
  );
};

export default BuyButton;
