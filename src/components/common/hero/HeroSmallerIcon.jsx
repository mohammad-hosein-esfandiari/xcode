"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import image5 from "@/assets/images/smallerIcon/5.png";
import image36 from "@/assets/images/smallerIcon/36.png";
import image29 from "@/assets/images/smallerIcon/29.png";
import image6 from "@/assets/images/smallerIcon/6.png";

const HeroSmallerIcon = () => {
  return (
    <>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute w-[70px] h-[70px] left-[40px] top-[40px] md:block hidden">
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
        className="absolute w-[100px] h-[100px] left-[450px] bottom-[0px] md:block hidden">
        <Image
        className="animate-spinning"
          src={image36}
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
        className="absolute w-[200px] h-[200px] right-[600px] top-[0px] md:block hidden">
        <Image
          src={image29}
          width="auto"
          height="auto"
          priority={true}
          alt="pic"
        />
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5,ease:"linear", duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute  w-[80px] h-[80px] right-[350px] bottom-[-30px] md:block hidden">
        <Image
          src={image6}
          width="auto"
          height="auto"
          priority={true}
          alt="pic"
        />
      </motion.div>

    </>
  );
};

export default HeroSmallerIcon;
