"use client";

import { useEffect } from "react";

const ScrollBug = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => window.scrollTo(0, 0);
  }, []);
  return null;
};

export default ScrollBug;
