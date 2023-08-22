"use client"

import { motion } from "framer-motion";


const TextHodlerAnimate = ({children}) => {
    return (
        <motion.div className="lg:w-[40%] relative   py-16 pr-8 pl-6 " initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:1}}>
            {children}
        </motion.div>
    );
}

export default TextHodlerAnimate;