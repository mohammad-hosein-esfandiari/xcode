"use client";
import Hero from "@/components/common/hero/Hero";
import BlogsMainSection from "./mainSection/BlogsMainSection";
import PaginationBox from "@/components/common/Pagination/PaginationBox";
import Pagination2 from "@/components/common/Pagination/Pagination2";
import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";
import { useEffect, useState } from "react";
import { paginationFunc } from "@/core/utils/pagination";

const Blogs = ({ news ,lastCourses}) => {
  const { limit, page, category } = useSearchParamsInUrl();
  const [newsArray, setNewsArray] = useState([]);
  const [firstArray, setFirstArray] = useState([]);
  useEffect(() => {
    let copyArray = [...news];

    if (category !== "all") {
      copyArray = copyArray.filter(
        (item) => item.title.split("|")[1] == category
      );
    }
    setFirstArray(copyArray);
    const { paginatedArray } = paginationFunc(limit, page, copyArray);
    setNewsArray(paginatedArray);
  }, [limit, page, category]);

  return (
    <>
      <Hero title="اخبار و مقالات" />
      <section className="xl:container lg:px-[100px] px-5 mt-[70px] pb-6">
        <BlogsMainSection lastCourses={lastCourses} firstArray={firstArray} newsArray={newsArray} news={news} />
      </section>
      <div className="bg-linear1 h-[120px] ">
        <Pagination2 href="blogs" posts={firstArray} bgNone="py-10" />
      </div>
    </>
  );
};

export default Blogs;
