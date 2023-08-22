'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { FreeMode } from "swiper";
import SliderItem from "./SliderItem";
import "swiper/swiper-bundle.min.css";



// import required modules

export default function Slider({posts}) {
  return (
    <div  className=" overflow-hidden pr-2 pb-6 border-[#b3b3b347] border-b-[1px] -mr-2">
      <Swiper
      style={{width: '100%',height: '100%',paddingBottom: '10px',paddingTop: '10px',overflow:'visible'}}
      breakpoints={{
        620: {
          slidesPerView: 2.4,
        },
        1440:{
          slidesPerView: 3.4,
        }
      }}
        spaceBetween={25}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter:true
        }}
        modules={[FreeMode,Autoplay]}
        className="mySwiper"
      >
        {
          posts.map(item => (

            <SwiperSlide key={item._id}><SliderItem {...item}/></SwiperSlide>
          ))
        }
     

      </Swiper>
    </div>
  );
}