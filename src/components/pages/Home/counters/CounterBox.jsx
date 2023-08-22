"use client"

import { useInView } from 'framer-motion';
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react';

let loadedCallback = null;
let loaded = false;

const Odometer = dynamic(async () => {
  const mod = await import("react-odometerjs");
  loaded = true;
  if (loadedCallback != null) {
    loadedCallback();
  }
  return mod;
}, {
  ssr: false,
  
});

const CounterBox = (props) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const [odometerValue, setOdometerValue] = useState(0);

  useEffect(() => {
    if(isInView){
      setTimeout(()=>{
        if(props.index === 0){
          setOdometerValue(props.students+214);
        }
        if(props.index === 1){
          setOdometerValue(props.count);
        }
        if(props.index === 2){
          setOdometerValue(props.news+142);
        }
        if(props.index === 3){
          setOdometerValue(props.lengthDetails);
        }
      },100)
    }

  }, [isInView]);
  
  return (
    <div ref={ref} dir='ltr' className="md:w-1/4 sm:w-1/2 w-full flex flex-col py-6 justify-center items-center">
      {props.icon}
      <span className=" text-[40px] text-white font-bold">
      <Odometer value={odometerValue} format="(,ddd)"
      theme="default"/>
      +
      </span>
      <p className="text-white px-2 md:text-[12px] font-bold">{props.desc}</p>
    </div>
  );
};

export default CounterBox;
