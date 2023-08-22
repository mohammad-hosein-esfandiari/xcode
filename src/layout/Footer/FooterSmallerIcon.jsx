"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import image22 from "@/assets/images/smallerIcon/22.png"
import image23 from "@/assets/images/smallerIcon/23.png"


const FooterSmallerIcon = () => {
    return (
        <>
            <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:0.5 , duration:0.8}} viewport={{once:true}}  className="absolute w-[150px] h-[150px] left-[20px] top-[20px] md:block hidden">
                <Image src={image22} width='auto' height='auto' priority={true} alt="pic" />
            </motion.div>
            <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:0.5 , duration:0.8}} viewport={{once:true}}  className="absolute w-[120px] h-[120px] right-[400px] bottom-[20px] md:block hidden">
                <Image src={image23} width='auto' height='auto' priority={true} alt="pic" />
            </motion.div>
        </>
    );
}

export default FooterSmallerIcon;