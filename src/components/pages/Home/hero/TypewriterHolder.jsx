"use client";

import Typewriter from "typewriter-effect";
const TypewriterHolder = () => {
  return (
    <h1
      className="text-color-black 
      lg:text-[30px] 
      xl:text-[50px] 
      hlg:text-[40px] 
      md:text-[25px] 
      sm:text-[18px]
      xs:text-[30px]
      sss:text-[20px] 
      text-[15px]

      md:block

      hidden


      
      first-letter
      font-extrabold mt-6 ">
      <Typewriter
        onInit={(typeWriter) => {
          typeWriter
          .pauseFor(1800)
            .typeString("Your programming learning story starts here")
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
