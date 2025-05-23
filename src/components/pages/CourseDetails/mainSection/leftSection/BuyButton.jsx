"use client";

// React imports
import { useEffect, useState } from "react";

// Components
import AcceptModal from "../../../../common/Modal/AcceptModal";

// Hooks and Context
import { useBasket } from "@/context/basket";
import { useUserInfo } from "@/context/userInfoStore";

// Utils
import { getCookie } from "@/core/utils/cookies.storage";
import { toast } from "react-toastify";

const BuyButton = ({ cost, users, courseId, title, image }) => {
  // Context hooks
  const setAddToBasket = useBasket((state) => state.setAddToBasket);
  const basket = useBasket((state) => state.basket);
  const user = useUserInfo(state => state.userInfo);

  // Local state
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Computed values
  const isUserInCourse = users.some(
    (item) => item === user?.studentModel._id
  );
  const isInBasket = basket.some((item) => item.id === courseId);

  // Handlers
  const addTobasketHandler = async () => {
    const basketItem = {
      id: courseId,
      title,
      price: cost,
      image,
      students: users
    };

    setLoading(true);
    setTimeout(async () => {
      await setAddToBasket(basketItem);
      setSuccess(true);
      setLoading(false);
    }, 500);
  };

  const buyCLickHandler = () => {
    setModal(true);
  };

  return (
    <div>
      {isUserInCourse ? (
        <button className="w-full md:shadow-none shadow-modeShadow transition-all text-white duration-300 bg-primary md:py-4 ss:py-3 py-2 md:rounded-[4px] rounded-[30px] text-center sss:text-[16px] text-[10px]">
          Already in course
        </button>
      ) : (
        <button
          disabled={isInBasket}
          onClick={buyCLickHandler}
          className="w-full hover:scale-[1.02] md:shadow-none shadow-modeShadow transition-all text-white duration-300 cursor-pointer bg-primary md:py-4 ss:py-3 py-2 md:rounded-[4px] rounded-[30px] text-center sss:text-[16px] text-[10px]"
        >
          {isInBasket ? (
            <span className="text-[14px]">Course is in the shopping cart</span>
          ) : (
            "Add to Cart"
          )}
          <span className="mr-2 md:hidden text-[#e05858]">
            {!isInBasket && `( ${cost ? cost : "Free"} )`}
          </span>
        </button>
      )}

      <AcceptModal
        setSuccess={setSuccess}
        success={success}
        setLoading={setLoading}
        loading={loading}
        showModal={modal}
        setIsShowModal={setModal}
        submitHandler={addTobasketHandler}
        text="Add the desired course to the shopping cart?"
        successText="Course added to cart"
      />
    </div>
  );
};

export default BuyButton;
