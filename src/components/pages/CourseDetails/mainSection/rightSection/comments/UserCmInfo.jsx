
import Image from "next/image";
import unknown from "@/assets/images/user.jpg";
import { useUserInfo } from "@/context/userInfoStore";
const UserCmInfo = ({ userInfo }) => {
  const isUserLoggedIn = useUserInfo(state=> state.login)
  const {studentModel} = userInfo
  return (
    <li className="w-fit flex mt-20">
      <div className="rounded-full ss:w-[60px] ss:h-[60px] w-[48px] h-[48px] overflow-hidden">
        <Image
          src={!isUserLoggedIn ? unknown : studentModel.profile === 'image.png' ? unknown :  studentModel.profile}
          alt=""
          width={100}
          height={100}
          className="object-cover w-full h-full object-center"
        />
      </div>
      <div className="flex flex-col pr-4 py-[6px] justify-between ">
        <span className=" text-mode-color">{studentModel.fullName}</span>
        <span className=" ss:text-[14px] text-[12px]  text-color-gray">
          {studentModel.email}
        </span>
      </div>
    </li>
  );
};

export default UserCmInfo;