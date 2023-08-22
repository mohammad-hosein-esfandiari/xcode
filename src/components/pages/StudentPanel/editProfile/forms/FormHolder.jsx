"use client";

import { motion} from "framer-motion";
import { swipeTabStudentPanel } from "@/constant/swipeTapItem";

import SwipeBox from "@/components/pages/CourseDetails/mainSection/rightSection/SwipeBox";
import PassHolder from "./PassHolder";
import InfoHolder from "./InfoHolder";


const FormHolder = ({user}) => {


  return (
    <div className="relative">
      <div className=" w-full ss:top-[-80px] top-[-40px] hlg:px-[75px]  md:px-[35px] z-0 mx-auto  absolute">
        <div className=" ss:pb-0 pb-4">
          <SwipeBox
            swipeItem={swipeTabStudentPanel}
            swipeClass="bg-[#a1a1a124] grid-cols-2"
            spanColor="bg-primary">
            <motion.div
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, x: 400 }}
              exit={{ opacity: 0, x: 400 }}
              animate={{ x: 0, opacity: 1 }}>
              <InfoHolder user={user} />
            </motion.div>
            <motion.div
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, x: 400 }}
              exit={{ opacity: 0, x: 400 }}
              animate={{ x: 0, opacity: 1 }}>
              <PassHolder  user={user}/>
            </motion.div>
          </SwipeBox>
        </div>
      </div>
    </div>
  );
};

export default FormHolder;
