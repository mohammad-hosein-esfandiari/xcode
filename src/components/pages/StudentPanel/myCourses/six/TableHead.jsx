"use client";

import { useGridStudentPanel } from "@/context/studentPanelGridShow";
import { useUrlArray } from "@/hooks/useUrlArray";

const TableHead = () => {
  const {path} = useUrlArray()
  const grid = useGridStudentPanel((state) => state.grid);
  return (
    <ul className={`grid ${grid == 6 && path.includes("courses-list") ? 'sm:grid-cols-6':  'sm:grid-cols-7'}  grid-cols-3 px-2 [&>li]:text-center bg-[#bbbbbb87] py-3 mt-3 rounded-lg shadow-boxShadow text-mode-color`}>
      <li>نام دوره</li>
      <li>نام استاد</li>
      <li className="sm:block hidden">تاریخ شروع</li>
      <li className="sm:block hidden">تاریخ پایان</li>
      <li className="sm:block hidden">ظرفیت</li>
   
      <li className={`${grid === 6 ? "block" : "sm:block hidden"} `}>قیمت</li>
      {grid == 6 && path.includes("my-courses") && <li>مدیریت</li>}

    </ul>
  );
};

export default TableHead;
