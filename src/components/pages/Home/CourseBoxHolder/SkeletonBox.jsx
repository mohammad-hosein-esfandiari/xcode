"use client";
import Skeleton from "@/components/common/Skeleton/Skeleton";
import { motion } from "framer-motion";
const SkeletonBox = ({ posts , array}) => {
    const toggleMenus = {
        close: {
          opacity: 0,
        },
      };
  return (
    <>
      {Array(array)
        .fill()
        .map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 1 }}
            whileInView={posts && toggleMenus.close}
            viewport={{ once: true }}
            transition={{ delay: index / 10 + 0.4, duration: 0.5 }}>
            <Skeleton />
          </motion.div>
        ))}
    </>
  );
};

export default SkeletonBox;
