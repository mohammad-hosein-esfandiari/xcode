"use client";
import { useCallback, useEffect, useLayoutEffect } from "react";
import { useUserInfo } from "@/context/userInfoStore";
import { eraseCookie, getCookie } from "@/core/utils/cookies.storage";
import { getLocaleStorage } from "@/core/utils/getlocaleStorage";
import { useBasket } from "@/context/basket";
import { useImage } from "@/context/imageStore";
import api from "@/core/interceptors/apiInterceptor";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const GetUserInfo = () => {
  const navigate = useRouter()
  const user = getCookie("UoXa-I");
  const basket = getLocaleStorage("basket");
  const setUserInfo = useUserInfo((state) => state.setUserInfo);
  const setUserItemObj = useUserInfo((state) => state.setUserItemObj);
  const userInfo = useUserInfo((state) => state.userInfo);
  const login = useUserInfo((state) => state.login);
  const setUserLogin = useUserInfo((state) => state.setUserLogin);
  const setUserLogout = useUserInfo((state) => state.setUserLogout);

  const getUser = useCallback(async () => {
    try {
      const res = await api("/student/" + user.id);
      setUserLogin();
      setUserInfo(user.token, res.data.result);
      // setUserItemObj({resetPasswordToken:null})
      useImage.getState().setImage(res.data.result.profile);
      let newArray = basket.state.basket.filter((item) =>
        item.students.every((el) => el._id !== res.data.result._id)
      );
      useBasket.getState().setBasket(newArray);
      console.log(res);
    } catch (error) {
      try {
        const res = await api("/employee/" + user.id,{
          headers:{
            "x-auth-token": user.token
          }
        });
        setUserLogin();
        setUserInfo(user.token, res.data.result);
        // setUserItemObj({resetPasswordToken:null})
        useImage.getState().setImage(res.data.result.profile);
        let newArray = basket.state.basket.filter((item) =>
          item.students.every((el) => el._id !== res.data.result._id)
        );
        useBasket.getState().setBasket(newArray);
        console.log(res);
        
      } catch (error2) {
        
        
              toast.error('خطایی رخ داده است ')
              toast.warning('لطفا دوباره تلاش کنید')
              toast.update('درحال انتقال به صفحه ورود')
              setTimeout(()=>{navigate.push('/auth/login')},1000)
              eraseCookie('UoXa-I')
              setUserLogout()
      }


    }
  },[login,setUserLogout,setUserLogin]);
  const logOut =useCallback( ()=>{
    setUserLogout();
  },[login,setUserLogout,setUserLogin])

  useLayoutEffect(() => {
    if (user) {
      getUser();
    } else {
      logOut()
    }
    console.log(userInfo);
    console.log(login);
  }, [login]);
  return null;
};

export default GetUserInfo;
