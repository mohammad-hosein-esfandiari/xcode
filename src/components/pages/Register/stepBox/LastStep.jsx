"use client";
import axios from "axios";
import { useStepperStore } from "@/context/stepperStore";
import { useEffect, useState } from "react";
import { useErrorText } from "@/context/errorStore";
import BarLoader from "react-spinners/BarLoader";
import { registerFunc } from "@/core/services/register";
const LastStep = () => {
  const error = useErrorText((state) => state.error);
  const userData = useStepperStore((state) => state.data);
  const lastStepError = useStepperStore((state) => state.lastStepError);
  const lastStepLoading = useStepperStore((state) => state.lastStepLoading);

  const userInfo = {
    fullName: userData.name + " " + userData.lastname,
    email: userData.email,
    password: userData.password,
    phoneNumber: userData.phonenumber.split("+")[1].split(" ").join(""),
    birthDate: userData.date,
    nationalId: userData.nationalcode,
    profile: "image.png",
  };

  useEffect(() => {
    registerFunc(userInfo);
  }, []);
  return (
    <div className="flex flex-col  justify-center items-center">
      {error ? (
        <>
          <div className=" text-red-500 mt-3 sm:text-[14px] text-[10px]">
            {error}
          </div>
          <button
            type="button"
            onClick={registerFunc}
            className="mt-6 scale-[0.7] bg-primary text-white px-6 py-2 rounded-[4px]">
            دوباره امتحان کنید
          </button>
        </>
      ) : (
        <>
          {!lastStepLoading ? (
            <>
              {lastStepError?.map((item, index) => (
                <div
                  key={index}
                  className=" xs:scale-[1] mb-2 scale-[0.6] text-red-500 font-bold sm:text-[17px]">
                  {item.message}
                </div>
              ))}
              <div className=" text-primary mt-3 sm:text-[11px] text-[8px]">
                در حال انتقال به بخش مورد نظر
              </div>
            </>
          ) : (
            <>
              <div className=" font-bold text-mode-color sm:text-[17px]">
                در حال انجام فرآیند ثبت نام
              </div>
            </>
          )}
          <div className="pt-6 text-primary ">
            <BarLoader
              color="var(--primary-color)"
              size={4}
              margin={1}
              speedMultiplier={1}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default LastStep;
