"use client";
import { motion } from "framer-motion";
import { heroImg } from "@/constant/heroImg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import PictureBox from "./PictureBox";
import HeroSmallerIcon from "./HeroSmallerIcon";
import TypewriterHolder from "./TypewriterHolder";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className=" sss:mb-[140px] mb-[100px] bg-linear1 z-10 md:h-[860px] sm:h-[500px] sss:h-fit sss:pt-[0] pt-[20px] h-fit pb-16 ss:pb-8">
      <div className=" xl:container relative h-full  sm:flex sm:justify-between block">
        <HeroSmallerIcon />

        <div className=" flex flex-col md:justify-start justify-center sss:items-start items-center md:w-3/6 sm:w-2/3 md:pl-[40px] sm:pl-[40px] sm:px-[0]  md:pt-48 sm:pt-0 xs:pt-[60px] sss:pt-24 pt-2 ss:h-full px-[25px] sm:pr-[100px] ">
          <motion.h3
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 1000, opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-primary  xl:text-[25px] hlg:text-[22px]  lg:text-[15px] xs:text-[13px] ss:pt-[40px] pt-[50px] sss:text-[15px] text-[10px] max-w-lg">
            We are trying to introduce you to the best professors and resources
          </motion.h3>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              type: "spring",
              stiffness: 15,
            }}>
            <h1 className="text-color-black  lg:text-[40px]  xl:text-[60px]  hlg:text-[50px]  md:text-[35px]  sm:text-[23px] xs:text-[40px] sss:text-[25px]  text-[15px] md:hidden first-letter font-extrabold mt-6  sm:pr-[100px]">
            Education Is About Academic Excellence
            </h1>
            <TypewriterHolder />
            <motion.p
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 400, opacity: 0 }}
              transition={{
                duration: 1,
                delay: 3,
                type: "spring",
                stiffness: 15,
              }}
              className="mt-6 text-gray-400 text-[13px]  md:text-[15px] sm:text-[12px]">
              All courses include support and if you are not satisfied, the
              money received will be returned to you.
            </motion.p>
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 400, opacity: 0 }}
              transition={{
                duration: 1,
                delay: 3.2,
                type: "spring",
                stiffness: 15, 
              }}
              className="mt-8 w-full">
              <Link
                href="#courses"
                className="bg-primary w-fit rounded-[4px] flex items-center sm:mr-[8px] mx-auto sm:mx-0 h-[34px] sm:h-[44px] py-[6px] px-[13px] text-[13px] sm:text-[16px] overflow-hidden text-white shadow-md hover:bg-[#5c5c5c] transition-all duration-300">
                <span className="mr-4">Start Your Journey</span>
                <i className="text-[16px]">
                  <HiOutlineArrowNarrowRight />
                </i>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="relative z-10  xl:pt-0  ss:pt-24 sss:pt-16 pt-4 flex items-center justify-center  w-[80%] mx-[auto] ss:h-full  ss:w-4/6">
          {heroImg.map((item) => (
            <PictureBox key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
