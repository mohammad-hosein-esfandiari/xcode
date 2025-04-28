"use client";

import { useGridStudentPanel } from "@/context/studentPanelGridShow";
import { useUrlArray } from "@/hooks/useUrlArray";

const TableHead = () => {
  const {path} = useUrlArray()
  const grid = useGridStudentPanel((state) => state.grid);
  console.log(grid)
  return (
    <ul className={`grid ${path.includes("courses-list") ? "sm:grid-cols-5" : "sm:grid-cols-6" } grid-cols-3 px-2 [&>li]:text-center bg-[#bbbbbb87] py-3 mt-3 rounded-lg shadow-boxShadow text-mode-color`}>
      <li>Course</li>
      <li>Teacher</li>
      <li className="sm:block hidden">Start Date</li>
      <li className="sm:block hidden">End Date</li>
   
      <li className={`${grid === 6 ? "block" : "sm:block hidden"} `}>Cost</li>
      {
        grid === 6 && path.includes("my-courses") && (
          <li className="sm:block hidden">Actions</li>
        )
      }


    </ul>
  );
};

export default TableHead;
