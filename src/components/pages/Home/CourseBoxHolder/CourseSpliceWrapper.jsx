'use client'

import { useEffect } from "react";
import { useCountSpliceShow } from "@/context/spliceCount";
const CourseSpliceWrapper = () => {
    const setCountShow = useCountSpliceShow(state => state.setCountShow)
    const count = useCountSpliceShow(state => state.count)
    const resizeHandler = ()=>{
        if(window.innerWidth > 1440){
            setCountShow(8)
        }else{
            setCountShow(6)
        }
        console.log(count)
    }
    useEffect(()=>{
        window.addEventListener('resize',resizeHandler)

    },[count])
    return null
}

export default CourseSpliceWrapper;