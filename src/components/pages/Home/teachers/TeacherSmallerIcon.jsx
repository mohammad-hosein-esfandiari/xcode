"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import image10 from "@/assets/images/smallerIcon/10.png"
import image5 from "@/assets/images/smallerIcon/5.png"
import image14 from "@/assets/images/smallerIcon/14.png"

const TeacherSmallerIcon = () => {
    return (
        <>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}  transition={{delay:0.5 , duration:0.8}} className="absolute rotate-[-90deg] w-[150px] h-[150px] right-[150px] top-[-230px] md:block hidden">
            <Image src={image10} width='auto' height='auto' priority={true} alt="pic" />
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}  transition={{delay:0.5 , duration:0.8}} className="absolute w-[120px] after: h-[120px] left-[40px] top-[10px] md:block hidden">
            <Image src={image5} width='auto' height='auto' priority={true} alt="pic" />
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:0.7}} viewport={{once:true}}  transition={{delay:0.5 , duration:0.8}} className="absolute w-[120px] h-[120px] z-8 left-[400px] top-[300px] md:block hidden">
            <Image src={image14} width='auto' height='auto' priority={true} alt="pic" />
        </motion.div>
        </>
    );
}

export default TeacherSmallerIcon;