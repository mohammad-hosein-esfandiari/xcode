'use client'
import { motion } from "framer-motion";
const AnimWrapper = ({children}) => {
    return (
        <motion.div
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0, x: 100 }}
        exit={{ opacity: 0, x: -100 }}
        animate={{ x: 0, opacity: 1 }}>
       {children}
      </motion.div>
    );
}

export default AnimWrapper;