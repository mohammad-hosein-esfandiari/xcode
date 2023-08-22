"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useFilteredArrayCourses } from "@/context/filterdArrayCourses";
import { useSearchParamsStore } from "@/context/courseFilter";
import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";
import { useSearchParams } from "next/navigation";
import { useCoursesGridShow } from "@/context/coursesGridShow";

import CourseBox from "@/components/common/courseBox/CourseBox";
import CourseBox2 from "@/components/common/courseBox2/CourseBox2";
import Skeleton from "@/components/common/Skeleton/Skeleton";
import Skeleton2 from "@/components/common/Skeleton/Skeleton2";
import { filteringTheCourses } from "@/core/utils/filteringBox";

const FIrstCourseBox = ({ posts }) => {
  const url = useSearchParams().get("filter");
  const { queryArray, limit, page } = useSearchParamsInUrl();
  const filter = useSearchParamsStore((state) => state.filter);
  const filteredData = useFilteredArrayCourses((state) => state.filteredData);

  const gridShow = useCoursesGridShow((state) => state.grid);
  useEffect(() => {
    filteringTheCourses(posts, queryArray, limit, page);
  }, [filter, page, limit, url]);
  const toggleMenus = {
    close: {
      opacity: 0,
    },
  };

  return (
    <div className="relative">
      <div
        className={` ${
          gridShow
            ? "grid gap-y-10 gap-x-6  xl:gap-x-8 grid-cols-1 ss:grid-cols-2 md:grid-cols-3 hlg:grid-cols-4 xl:grid-cols-4"
            : "grid md:grid-cols-2 gap-y-10 gap-x-6  xl:gap-x-8"
        } w-full`}>
        {Array(filteredData.length || Number(limit))
          .fill()
          .map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1 }}
              whileInView={filteredData && toggleMenus.close}
              viewport={{ once: true }}
              transition={{ delay: index / 10 + 0.4, duration: 0.5 }}>
              {gridShow ? <Skeleton /> : <Skeleton2 />}
            </motion.div>
          ))}
      </div>
      <motion.div
        className={`absolute w-full top-0 ${
          gridShow
            ? "grid gap-y-10 gap-x-6  xl:gap-x-8 grid-cols-1 ss:grid-cols-2 md:grid-cols-3 hlg:grid-cols-4 xl:grid-cols-4"
            : "grid md:grid-cols-2 gap-y-10 gap-x-6  xl:gap-x-8"
        } `}>
        {gridShow
          ? filteredData.map((item, index) => (
              <CourseBox key={item._id} delay={index} {...item} />
            ))
          : filteredData.map((item) => <CourseBox2 key={item._id} {...item} />)}
      </motion.div>
    </div>
  );
};

export default FIrstCourseBox;
