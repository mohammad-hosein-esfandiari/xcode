
import LoginHead from "./LoginHead";

import RegisterLink from "./RegisterLink";
import LoginForm from "./LoginForm";
export default function RightStep (){
  return (
    <div className="sm:bg-linear3  w-full md:rounded-l-[0px] rounded-l-[6px] rounded-r-[6px] md:w-[40%]  flex flex-col items-center justify-between sm:relative py-2 ">
      <div className=" w-fit ">
        <LoginHead/>
        <LoginForm/>
      </div>
        <RegisterLink/>
    </div>
  );
};