"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

import CourseBox from "@/components/common/courseBox/CourseBox";

const SliderItems = ({ courses,courseDetail }) => {
  const arr = courses.filter(item => item.title.split('|')[1] === courseDetail.title.split('|')[1])
  const filteredArray = arr.filter(item => item._id !== courseDetail._id)

  return (
    <div className="mt-6  py-4 overflow-hidden">
      <Swiper
        style={{ width: "100%", overflow: "visible", paddingRight: "5px" }}
        spaceBetween={22}
        breakpoints={{
          620: {
            slidesPerView: 2.2,
          },
          1060: {
            slidesPerView: 3.2,
          }
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}>
        {courses.splice(0, 10).map((item, index) => (
       

          <SwiperSlide key={index} >
            <CourseBox  delay={index} {...item} />
          </SwiperSlide>
         
        ))}
      </Swiper>
    </div>
  );
};

export default SliderItems;
