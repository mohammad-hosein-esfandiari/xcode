'use client'
import { useEffect } from "react";
import RightStep from "./RightStep";
import LeftStep from "./LeftStep";


const Login = () => {
    useEffect(() => {
        document.body.style.backgroundImage = "var(--linear-1)"
        return ()=> document.body.style.backgroundImage = "none"
      }, []);
  return (
    <>
    <div className=" flex flex-col  justify-center relative w-full min-h-[100vh]">
    <div className="xl:container px-[10px] sm:px-[50px]  lg:px-[200px]">
        <div className="  h-[550px] flex  mx-auto sm:shadow-modeShadow rounded-lg   sm:bg-registerbg">
            <RightStep/>
            <LeftStep/>
        </div>
    </div>
  </div>
    </>
  )
}

export default Login;