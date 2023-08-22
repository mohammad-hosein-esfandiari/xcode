"use client";
import { useEffect, useState } from "react";
import { useGridStudentPanel } from "@/context/studentPanelGridShow";
import { changeUrlFilter, filteringTheCourses } from "@/core/utils/filteringBox";
import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";
import { useSearchParams } from "next/navigation";
import { useSearchParamsStore } from "@/context/courseFilter";

import PageToggle from "@/components/common/PageToggle/PageToggle";
import PanelHeading from "../PanelHeading";
import Pagination from "@/components/common/Pagination/PaginationBox";
import Content from "../myCourses/Content";
import RightFIlter from "../../Courses/MainSection/RightFilter";
import Pagination2 from "@/components/common/Pagination/Pagination2";
import PaginationBox from "@/components/common/Pagination/PaginationBox";
import { useFilteredArrayCourses } from "@/context/filterdArrayCourses";

const CourseList = ({ posts }) => {
  const [pageToggle, setPageToggle] = useState(false);
  const [pageShow, setPageShow] = useState(6);
  const setGridSix = useGridStudentPanel((state) => state.setGridSix);
  const filter = useSearchParamsStore((state) => state.filter);
  const filteredData = useFilteredArrayCourses(state => state.filteredData)
  const firstArray = useFilteredArrayCourses(state => state.data)
  const setFilteredData = useFilteredArrayCourses(state => state.setFilteredData)
  const url = useSearchParams().get("filter");
  const { queryArray, limit, page } = useSearchParamsInUrl();
  const numbers = [2,4,6]

  
  useEffect(() => {
    filteringTheCourses(posts, queryArray, limit, page);
  }, [filter, page, limit, url]);
  useEffect(() => {
    setGridSix();
  }, []);
  useEffect(()=>{
    changeUrlFilter(posts,numbers,queryArray,limit,page)
  },[url])


  return (
    <div className=" pb-2 overflow-y-scroll scrollbar-hide pt-2 w-full flex-col flex h-full ">
      <div className="ss:px-8 px-4">
        <PanelHeading title="لیست دوره ها" />
      </div>
      <div className="flex-1  pt-2 flex-col flex justify-between">
        <div className="flex-1 flex pb-1  flex-col">
          <div className="flex ss:px-8 px-4 justify-between">
            <RightFIlter posts={posts} href="student-panel/courses-list" />
            <PageToggle
              pageToggle={pageToggle}
              setPageShow={setPageShow}
              pageShow={pageShow}
              setPageToggle={setPageToggle}
              show1={2}
              show2={4}
              show3={6}
              href="/"
            />
          </div>
          
          <Content setFilteredData={setFilteredData} studentCourses={filteredData}  />
        
        </div>
        <div className="ss:px-8 px-4">
          <Pagination2 href="student-panel/courses-list" posts={firstArray} bgNone="scale-[0.8]  pt-2" />
        </div>
      </div>
    </div>
  );
};

export default CourseList;
