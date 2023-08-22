"use client";
import { useEffect } from "react";
import { notFound } from "next/navigation";
import { useFilteredArrayCourses } from "@/context/filterdArrayCourses";
import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";
import { filterItemObj, levelItem } from "@/constant/filteringCourses/filterItemObj";
import { useSearchParamsStore } from "@/context/courseFilter";
import {
  filterNameArrange,
  filterNamePrice,
} from "@/constant/filteringCourses/arrangeAndPrice";
import { useSearchParams } from "next/navigation";
import LeftFilter from "./LeftFilter";
import RightFIlter from "./RightFilter";
import { changeUrlFilter } from "@/core/utils/filteringBox";

const FilteringRow = ({ posts }) => {
  const url = useSearchParams().get("filter");
  const { queryArray, limit,page } = useSearchParamsInUrl();

  const numbers = [12, 9, 6];

  useEffect(()=>{
    changeUrlFilter(posts,numbers,queryArray,limit,page)
  },[url])
  return (
    <div className="flex xl:container lg:px-[100px] sm:px-6 px-4 mt-[80px]  py-2  items-center justify-between">
      <RightFIlter posts={posts} href="/courses" />
      <LeftFilter />
    </div>
  );
};

export default FilteringRow;
