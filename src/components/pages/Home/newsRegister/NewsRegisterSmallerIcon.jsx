"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import image32 from "@/assets/images/smallerIcon/32.png"
import image33 from "@/assets/images/smallerIcon/33.png"
import image34 from "@/assets/images/smallerIcon/34.png"


const NewsRegisterSmallerIcon = () => {
    return (
        <>
            <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:0.5 , duration:0.8}} viewport={{once:true}}  className="absolute w-[100px] h-[100px] left-[370px] bottom-[30px] md:block hidden">
                <Image src={image32} width='auto' height='auto' priority={true} alt="pic" />
            </motion.div>
            <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:0.5 , duration:0.8}} viewport={{once:true}}  className="absolute w-[100px] h-[100px] right-[200px] top-[30px] md:block hidden">
                <Image src={image34} width='auto' height='auto' priority={true} alt="pic" />
            </motion.div>
            <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:0.5 , duration:0.8}} viewport={{once:true}}  className="absolute w-[100px] h-[100px] right-[20px] bottom-[30px] md:block hidden">
                <Image src={image33} width='auto' height='auto' priority={true} alt="pic" />
            </motion.div>
        </>
    );
}

export default NewsRegisterSmallerIcon;