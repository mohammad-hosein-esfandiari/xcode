"use client";

import Pagination from "@/components/common/Pagination/PaginationBox";
import { useFilteredArrayCourses } from "@/context/filterdArrayCourses";
import PaginationSI from "./PaginationSI";
import PaginationBox from "@/components/common/Pagination/PaginationBox";
import Pagination2 from "@/components/common/Pagination/Pagination2";

const PaginationHolder = () => {
  const data = useFilteredArrayCourses((state) => state.data);
  const setFilteredData = useFilteredArrayCourses(
    (state) => state.setFilteredData
  );
  return (
    <div className=" relative mt-4">
      <PaginationSI/>
      <Pagination2 href="courses" posts={data} setArray={setFilteredData} />
    </div>
  );
};

export default PaginationHolder;
