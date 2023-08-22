
import { Fragment } from "react";
import { counterBoxInfo } from "@/constant/counterboxInfo";

import CounterBox from "./CounterBox";

import '@/styles/odometer.css'
import { convertTopicToObj } from "@/core/utils/topicApiConvertor";


const Counters = ({posts,news}) => {
 
    
    const studentsArray =[...new Set(posts.flatMap(item => {
      return item.students.flatMap(el => {
        return el._id
      })
    }))]
  const lessonArray = posts.map(item => {
    return convertTopicToObj(item.lesson.topics) 
  })
  const lengthDetails = lessonArray.flatMap(item => {
    return item.flatMap(el=>{
      return el.details
    })
  })

  
    return (
        <section className="xl:container relative z-10  ss:px-[100px] px-[30px] ">      <div
        className="flex mx-auto ss:w-[100%] w-[90%] flex-row-reverse relative md:flex-nowrap flex-wrap  shadow-boxShadow bg-primary rounded-[4px] py-[60px]">
        <span className=" absolute border-gray-400 border-[1px] md:hidden right-[50%] top-12 sm:block hidden h-[80%]"></span>
        {counterBoxInfo.map((item, index) => (
          <Fragment key={item.id}>
            <CounterBox lengthDetails={lengthDetails.length} news={news.length} students={studentsArray.length} index={index} {...item} />
            {index !== counterBoxInfo.length-1 && 
              <span className="md:border-l-[1px] border-gray-400"></span>
            }
          </Fragment>
        ))}
      </div>
    </section>
    );
}

export default Counters;