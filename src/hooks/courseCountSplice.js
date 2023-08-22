'use client'

import { useEffect } from "react";

export const useCourseCountSplice = () => {
    useEffect(()=>{

        window.addEventListener('resize',()=>{
            if (window.innerWidth > 1440) {
              return 8
            } else {
              return 6;
            }
        })
    },[])
};
