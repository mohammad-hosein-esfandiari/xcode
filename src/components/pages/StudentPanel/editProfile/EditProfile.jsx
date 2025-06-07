"use client";
import HeaderRow from "./HeaderRow";
import ProfileImg from "./ProfileImg";
import FormHolder from "./forms/FormHolder";
import { useUserInfo } from "@/context/userInfoStore";

const EditProfile = () => {
  const user = useUserInfo((state) => state.userInfo);

  return (
    <div className=" w-full pb-3  h-full overflow-y-scroll scrollbar-hide">
      <HeaderRow />
      <div className="ss:px-8 mt-[110px] relative px-4">
        <ProfileImg user={user} />
        <FormHolder user={user} />
      </div>
    </div>
  );
};

export default EditProfile;
