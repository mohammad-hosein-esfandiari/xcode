import { motion } from "framer-motion";
import Image from "next/image";
const PictureBox = (props) => {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{
        duration: 1,
        delay: props.boxDelay,
        type: "spring",
        stiffness: 20,
        damping: 10,
      }}
      className={props.className}>
      <div
        className={`relative  w-full h-full border-[${props.border}px] rounded-full ${props.overflow} border-white ${props.bgColor}`}>
        <motion.div
          animate={{ y: props.y, opacity: 1 }}
          initial={{ y: props.yy, opacity: 0 }}
          transition={{
            duration: 1,
            delay: props.ImgDelay,
            type: "spring",
            stiffness: 20,
            damping: 15,
          }}
          className="w-fit">
          <Image
            src={props.image}
            style={{ scale: props.scale }}
            className="block mr-[-1px] hlg:pt-[1.2px] lg:pt-[5.2px] md:pt-[8px]"
            alt=""
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PictureBox;
