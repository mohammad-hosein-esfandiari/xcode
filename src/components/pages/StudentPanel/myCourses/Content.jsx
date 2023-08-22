import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";
import FourShowHolder from "./four/FourShowHolder";
import SixShowHolder from "./six/SixShowHolder";
import TwoShowHolder from "./two/TwoShowHolder";
import { useEffect, useState } from "react";
import { paginationFunc } from "@/core/utils/pagination";

const Content = ({ studentCourses, myCourses, setFilteredData }) => {
  const { limit, page } = useSearchParamsInUrl();

  // useEffect(() => {
  //   return () => setFilteredData([]);
  // }, []);

  return (
    <>
      <div className="w-full ss:px-8 px-4  flex-1 ">
        {limit == 6 && <SixShowHolder courses={studentCourses} />}
        {limit == 4 && <FourShowHolder courses={studentCourses} />}
        {limit == 2 && <TwoShowHolder courses={studentCourses} />}
      </div>
    </>
  );
};

export default Content;
