"use client";

import Typewriter from "typewriter-effect";
const TypewriterHolder = () => {
  return (
    <h1
      className="text-color-black 
      lg:text-[40px] 
      xl:text-[60px] 
      hlg:text-[50px] 
      md:text-[35px] 
      sm:text-[23px]
      xs:text-[40px]
      sss:text-[25px] 
      text-[15px]

      md:block

      hidden


      
      first-letter
      font-extrabold mt-6  sm:pl-[100px]">
      <Typewriter
        onInit={(typeWriter) => {
          typeWriter
          .pauseFor(1800)
            .typeString("داستان یادگیری برنامه نویسی شما از اینجا شروع میشه")
            .start()
            
            

        }}
        options={{
          delay:30,
        }}
    
      />
      
    </h1>
  );
};

export default TypewriterHolder;
