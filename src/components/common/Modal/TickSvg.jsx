"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
const TickSvg = ({successText,setIsShowModal,setLoading,setSuccess}) => {
    useEffect(()=>{
        setTimeout(()=>{
            setIsShowModal(false)
            setLoading(false)
            setSuccess(false)
        },1800)
    },[])
  return (
    <div className="flex flex-col h-full justify-between items-center">
      <div className="w-[70px] ">      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 37 37"
          version="1.1"
          viewBox="0 0 37 37"
          xmlSpace="preserve">
          <motion.path
            animate={{ strokeDashoffset: [108, 0] }}
            transition={{ duration: 0.8, delay: 0.1 }}
            strokeDasharray="108"
            fill="none"
            stroke="var(--green-color)"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M30.5 6.5h0c6.6 6.6 6.6 17.4 0 24h0c-6.6 6.6-17.4 6.6-24 0h0c-6.6-6.6-6.6-17.4 0-24h0c6.6-6.7 17.4-6.7 24 0z"
            className="circ path"></motion.path>
          <motion.path
            animate={{ strokeDashoffset: [25, 0] }}
            transition={{ duration: 0.8, delay: 0.3 }}
            strokeDasharray="25"
            fill="none"
            stroke="var(--green-color)"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M11.6 20L15.9 24.2 26.4 13.8"
            className="tick path"></motion.path>
        </svg>
      </div>
      <motion.p initial={{scale:0.5,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.8,delay:0.4}} className="text-color-green">{successText}</motion.p>
    </div>
  );
};

export default TickSvg;
