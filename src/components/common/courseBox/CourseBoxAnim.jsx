"use client";
import { motion } from "framer-motion";
import Tilt from "react-tilting";

const CourseBoxAnim = ({ children, delay }) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 20,
    perspective: 1000,
    scale: 1.02,
    speed: 500,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 10 + 0.4, duration: 0.5 }}
      className="relative z-1">
      <Tilt
        className="Tilt transition-transform duration-100 delay-0"
        options={defaultOptions}>
        {children}
      </Tilt>
    </motion.div>
  );
};

export default CourseBoxAnim;
