"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import image14 from "@/assets/images/smallerIcon/14.png";
import image6 from "@/assets/images/smallerIcon/6.png";
import image5 from "@/assets/images/smallerIcon/5.png";
import image18 from "@/assets/images/smallerIcon/18.png";

const PaginationSI = () => {
  return (
    <>

      <motion.div
      
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute z-0 w-[80px] h-[80px] left-[-30px] top-[-60px] rotate-45 md:block hidden">
        <Image
          src={image6}
          width="auto"
          height="auto"
          priority={true}
          alt="pic"
        />
      </motion.div>
      <motion.div
      
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute z-0 w-[60px] h-[60px] left-[300px] top-[30px] md:block hidden">
        <Image
          src={image5}
          width="auto"
          height="auto"
          priority={true}
          alt="pic"
        />
      </motion.div>
      <motion.div
      
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute z-0 w-[200px] h-[200px] right-[250px] top-[-70px] md:block hidden">
        <Image
          src={image18}
          width="auto"
          height="auto"
          priority={true}
          alt="pic"
        />
      </motion.div>
    </>
  );
};

export default PaginationSI;
