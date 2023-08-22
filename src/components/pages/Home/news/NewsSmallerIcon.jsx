"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import image29 from "@/assets/images/smallerIcon/29.png"
import image30 from "@/assets/images/smallerIcon/30.png"
import image15 from "@/assets/images/smallerIcon/15.png"
import image31 from "@/assets/images/smallerIcon/31.png"


const NewsSmallerIcon = () => {
    return (
        <>
            <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:0.5 , duration:0.8}} viewport={{once:true}} className="absolute w-[300px] h-[300px] right-[200px] top-[-170px] md:block hidden">
                <Image src={image29} width='auto' height='auto' priority={true} alt="pic" />
            </motion.div>
            <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:0.5 , duration:0.8}} viewport={{once:true}}  className="absolute w-[140px] h-[140px] right-[100px] bottom-[-220px] md:block hidden">
                <Image src={image30} width='auto' height='auto' priority={true} alt="pic" />
            </motion.div>
            <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:0.5 , duration:0.8}} viewport={{once:true}}  className="absolute w-[100px] h-[100px] left-[300px] bottom-[-160px] md:block hidden">
                <Image src={image15} width='auto' height='auto' priority={true} alt="pic" />
            </motion.div>
            {/* News Register */}
            <motion.div whileInView={{opacity:1,y:[0,40,0]}} initial={{opacity:0,y:0}} transition={{delay:0.5 , duration:15,opacity:{duration:1},ease:"linear",repeatType:"loop",repeat:Infinity}} viewport={{once:true}}  className="absolute w-[100px] h-[100px] left-[100px] bottom-[-400px] md:block hidden">
                <Image src={image31} width='auto' height='auto' priority={true} alt="pic" />
            </motion.div>

        </>
    );
}

export default NewsSmallerIcon;