"use client";

import axios from "axios";
import { getCookie } from "@/core/utils/cookies.storage";
import api from "@/core/interceptors/apiInterceptor";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getLocaleStorage } from "@/core/utils/getlocaleStorage";
import { useBasket } from "@/context/basket";
import { useRouter } from "next/navigation";
import { useUserInfo } from "@/context/userInfoStore";
import { BeatLoader } from "react-spinners";

const SubmitPricing = () => {
  const navigate = useRouter();
  const [basket, setBasket] = useState([]);
  const [loading, setLoading] = useState(false);
  const arrayBasket = useBasket((state) => state.basket);
  const setBasketEmpty = useBasket((state) => state.setBasketEmpty);
  useEffect(() => {
    const getBasket = async () => {
      const array = await getLocaleStorage("basket");
      if (array?.state.basket) {
        const basket = array.state.basket;
        setBasket(basket);
      }
    };
    getBasket();
  }, [arrayBasket]);
  const submitHandler = async () => {
    const user = useUserInfo.getState().userInfo;
    const userId = user?.studentModel._id;
    const courseIdArray = basket.map((item) => item.id);
    if (basket.length) {
      setLoading(true);
      try {
        const response = await axios.all(
          courseIdArray.map((item) =>
            api.post("/course/addStudentToCourse/" + userId, { courseId: item })
          )
        );
        setBasket([]);
        setBasketEmpty();
        setLoading(false);
        toast.success("دوره با موفقیت اضافه شد");
        setTimeout(() => {
          navigate.push("/");
        }, 2000);
        console.log(response);
      } catch (error) {
        setLoading(false);
        console.log(error);
        setBasketEmpty();
        if (error.response) {
          error.response.data.message.forEach((item) =>
            toast.error(item.message)
          );
        }
      }
    } else {
      toast.error("سبد خرید خالی است");
    }
  };
  return (
    <button
      disabled={loading}
      onClick={submitHandler}
      className=" bg-primary text-white text-bold ss:px-8 px-2 rounded-[4px] py-2  hover:scale-[1.05] transition-all duration-300">
      {loading ? (
        <BeatLoader color="white" size={6} margin={0} />
      ) : (
        "تکمیل فرآیند خرید"
      )}
    </button>
  );
};

export default SubmitPricing;
