"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function HeaderWrapper ({ children }) {
  const [fix, setFix] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset >= 60 ? setFix(true) : setFix(false)
    );
  }, []);
  return (
    <motion.nav
      layoutId="underline"
      transition={{ duration: 0.8, delay: 0 }}
      className={`w-full  z-20 ${
        fix ? "fixed top-0  bg-mode-color shadow-boxShadow" : "absolute"
      }`}>
      <div className="xl:container mx-auto relative sm:z-[20] z-[18] justify-between py-[18px] flex items-center h-[80px] sm:px-8 px-4">
        {children}
      </div>
    </motion.nav>
  );
};
