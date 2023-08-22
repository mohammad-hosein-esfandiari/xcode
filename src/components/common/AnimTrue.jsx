"use client";

import { useAnimStore } from "@/context/animStore";
import { useEffect } from "react";


const AnimTrue = () => {
  const setAnim = useAnimStore((state) => state.setAnim);

  useEffect(() => {
    setTimeout(() => {
      setAnim(true);
    }, 1000);
  }, []);
  return null;
};

export default AnimTrue;
