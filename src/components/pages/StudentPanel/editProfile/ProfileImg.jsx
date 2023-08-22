"use client";
import Image from "next/image";
import unknown from "@/assets/images/user.jpg";

import instructor2 from "@/assets/images/instructor2.png";
import { BsFillCameraFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useImage } from "@/context/imageStore";
import api from "@/core/interceptors/apiInterceptor";
import { BeatLoader, MoonLoader } from "react-spinners";
import { useUserInfo } from "@/context/userInfoStore";
const ProfileImg = () => {
  const isUserLoggedIn = useUserInfo(state=> state.login)
    const [loading,setLoading] = useState(false)
  const image = useImage((state) => state.image);
  const setImage = useImage((state) => state.setImage);
  const handleChange = async (event) => {
    console.log(event.target.files[0]);
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    setLoading(true)
    try {
      const response = await api.post("/upload/image", formData);
      await setImage(response.data.result)
      setLoading(false)
      console.log(response);
    } catch (error) {
        setLoading(false)
      console.log(error);
    }
  };
  return (
    <div className=" overflow-hidden xs:w-[160px] xs:h-[160px] w-[100px] h-[100px] z-10   absolute xs:top-[-183px] top-[-162px] rounded-full left-[50%] translate-x-[-50%]">
      <div className="w-full h-full z-10 relative">
        {
            loading && (   <div className=" absolute z-20 top-0 right-0 w-full h-full flex items-center justify-center bg-[#09090937]">
            <BeatLoader size={10} color="var(--primary-color)"/>
    </div>)
        }
     
        <Image
          src={!isUserLoggedIn ? unknown : image === "image.png" ? unknown : image}
          width={500}
          height={500}
          priority={true}
          alt="user"
          className={`w-full ${loading && "blur-sm"} peer-hover:blur-sm h-full object-center object-cover`}
        />
        <div className="group absolute w-full z-[11] bottom-0 transition-all peer duration-300 border-t-[0.5px] border-[#b6b6b679] bg-[#1616167a] hover:bg-primary py-1 text-white flex items-center justify-center hover:text-[35px] text-[25px]">
          <BsFillCameraFill className="" />
          <div className=" absolute w-full h-full top-0 right-0">
            <label
              className="block cursor-pointer absolute top-0 right-0 w-full h-full"
              htmlFor="file"></label>
            <input
              id="file"
              type="file"
              onChange={handleChange}
              className=" hidden "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImg;
