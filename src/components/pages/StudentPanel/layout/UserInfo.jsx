import Image from "next/image";
import unknown from "@/assets/images/user.jpg";

import instructor2 from '@/assets/images/instructor2.png'
import { useUserInfo } from "@/context/userInfoStore";

const UserInfo = ({userInfo}) => {
    const isUserLoggedIn = useUserInfo(state=> state.login)
    return (
        <ul className="md:flex hidden md:mb-10 ss:mb-4 lg:p-0 ss:p-2 ss:flex-col items-center justify-center">
        <li className="lg:border-4 border-2 relative shadow-mode-shadow ss:mt-0 mt-1   border-pl-white rounded-full  lg:h-[100px] lg:w-[100px] w-10">
            <div className="w-full h-full rounded-full overflow-hidden">

            <Image width={200} height={200} priority={true} alt='user' src={!isUserLoggedIn ? unknown : userInfo.studentModel.profile === 'image.png' ? unknown :  userInfo.studentModel.profile} className="w-full h-full object-center object-cover"/>
            </div>
            <span className="lg:bottom-[6px] border-[1px] border-[#6b6b6b] ss:block hidden bottom-[4px] absolute rounded-full lg:w-4 lg:h-4 w-2 h-2 bg-green-500"></span>
        </li>
        <span className="mt-4 hidden lg:block text-[14px] text-pl-white">{userInfo.studentModel.fullName}</span>
    </ul>
    );
}

export default UserInfo;