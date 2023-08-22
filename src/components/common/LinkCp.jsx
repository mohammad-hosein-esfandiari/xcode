"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAnimStore } from "@/context/animStore";

const LinkCp = ({ href, text ,children,className}) => {
  const setAnim = useAnimStore((state) => state.setAnim);

  const navigate = useRouter();
  const clickHandler = (event) => {
    event.preventDefault();
    setAnim(false)
    setTimeout(() => {
      // window.location = href
      navigate.push(href);
    }, 1500);
  };
  return (
    <>
      <Link className={className} onClick={clickHandler} href={href}>
        {children}
      </Link>
    </>
  );
};

export default LinkCp;
