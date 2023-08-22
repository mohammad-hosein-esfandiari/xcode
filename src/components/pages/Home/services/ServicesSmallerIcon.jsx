"use client";
import { motion } from "framer-motion";
import Image from "next/image"
import image26 from "@/assets/images/smallerIcon/26.png"

const ServicesSmallercon = () => {
  return (
    <div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="absolute w-[40px] h-[40px] opacity-70 left-[100px] top-[250px] md:block hidden">
      <Image src={image26} width='auto' height='auto' priority={true} alt="pic"/>
    </div>
  );
};

export default ServicesSmallercon;
