"use client";
import { motion } from "framer-motion";
import { header } from "@/constant/headerLinks";
import Link from "next/link";
import {useUrlArray} from '@/hooks/useUrlArray'
import LinkCp from "@/components/common/LinkCp";
export const CenterLinks = () => {
const {pathname} = useUrlArray()
  return (
    <motion.div  className="md:flex flex-1 sm:hidden hidden items-center justify-center pl-[30px]">
      {header.map((item) => (
        <LinkCp
       
          key={item.id}
          className={`relative text-textColor py-2 px-5 transition-all duration-300 hover:text-primary h-full flex items-center cursor-pointer ${
            pathname[0] === item.href && "text-primary"
          }`}
          href={item.href}>
          {item.title}
          {item.href.includes(pathname[1]) && pathname[1] !== '' && (
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ ease: 0, duration: 0.3, delay: 0, ease: "linear" }}
              className=" absolute transition-all duration-500 bg-primary w-full bottom-0 right-0 h-[1.5px] block"></motion.span>
          )}
          { item.title === 'خانه'&& pathname[1] === '' && (
             <motion.span
             initial={{ width: 0 }}
             animate={{ width: "100%" }}
             transition={{ ease: 0, duration: 0.3, delay: 0, ease: "linear" }}
             className=" absolute transition-all duration-500 bg-primary w-full bottom-0 right-0 h-[1.5px] block"></motion.span>
          )}
        </LinkCp>
      ))}
    </motion.div>
  );
};
