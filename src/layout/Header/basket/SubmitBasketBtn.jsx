"use client";

import AcceptModal from "@/components/common/Modal/AcceptModal";
import { useBasket } from "@/context/basket";
import api from "@/core/interceptors/apiInterceptor";
import { getCookie } from "@/core/utils/cookies.storage";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SubmitBasketBtn = () => {
    const navigate = useRouter()
  const submitHandler = async () => {
    const user = await getCookie("UoXa-I");
    const basket = await useBasket.getState().getBasket();
    
    
    if (user && basket.length) {
       navigate.push('/pricing')
    //   try {
    //     const response = await axios.all(
    //       courseIdArray.map((item) =>
    //          api.post("/course/addStudentToCourse/" + userId, {courseId:item})
    //       )
    //     );
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error);
    //   }
        
    } else {
      toast.warning("برای خرید لطفا وارد شوید");
    }
  };
  return (
    <button
      onClick={submitHandler}
      className="hover:scale-[1.03] hover:shadow-modeShadow transition-all duration-300 bg-primary px-8 py-2 rounded-[4px] text-white">
      خرید
    </button>
  );
};

export default SubmitBasketBtn;
