'use client'

import { useRouter } from "next/navigation";

const BackBtn = () => {
    const navigate = useRouter()
    const backHandler =()=>{
        navigate.push('/')
    }
    return (
        <button onClick={backHandler} className=" bg-[#c4c4c448] text-mode-color text-bold ss:px-8 px-2 rounded-[4px] py-2 hover:scale-[1.05] transition-all duration-300">
        بازگشت
      </button>
    );
}

export default BackBtn;