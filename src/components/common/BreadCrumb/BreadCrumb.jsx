"use client";
import { Fragment } from "react";
import { BiChevronLeft } from "react-icons/bi";
import {
  courseDetailsName,
  coursesName,
} from "@/constant/breadCrumbDictionary";
import Link from "next/link";
import { useUrlArray } from "@/hooks/useUrlArray";
const BreadCrumb = () => {
  const { pathname } = useUrlArray();

  return (
    <div className=" flex items-center">
      {pathname.map((item, index) =>
        index === 0 ? (
          <Fragment key={index}>
            <Link
              href="/"
              className="hover:underline hover:text-primary hover:underline-offset-2 xs:text-[16px] text-[14px] text-[#919191]">
              خانه
            </Link>
            <div className="px-3">
              <BiChevronLeft className="text-[#919191]" />
            </div>
          </Fragment>
        ) : index === 1 ? (
          <Fragment key={index}>
            <Link
              href={`/${
                coursesName[
                  Object.keys(coursesName).find((link) => link === item)
                ].href
              }`}
              className="hover:underline hover:text-primary hover:underline-offset-2 xs:text-[16px] text-[14px]  text-[#919191]">
              {
                coursesName[
                  Object.keys(coursesName).find((link) => link === item)
                ].title
              }
            </Link>
            {pathname[1] !== "blogs" && (
              <>
                {index !== pathname.length - 1 && (
                  <div className="px-3">
                    <BiChevronLeft className="text-[#919191]" />
                  </div>
                )}
              </>
            )}
          </Fragment>
        ) : (
          <Fragment key={index}>
            {pathname[1] !== "blogs" && (
              <>
                <Link
                  href={`/${
                    coursesName[
                      Object.keys(coursesName).find(
                        (link) => link === pathname[1]
                      )
                    ].href
                  }/${
                    courseDetailsName[
                      Object.keys(courseDetailsName).find(
                        (link) => link === item
                      )
                    ].href
                  }`}
                  className="hover:underline hover:text-primary hover:underline-offset-2 xs:text-[16px] text-[14px] text-[#919191]">
                  {
                    courseDetailsName[
                      Object.keys(courseDetailsName).find(
                        (link) => link === item
                      )
                    ].title
                  }
                </Link>
                {index !== pathname.length - 1 && (
                  <div className="px-3">
                    <BiChevronLeft className="text-[#919191]" />
                  </div>
                )}
              </>
            )}
          </Fragment>
        )
      )}
    </div>
  );
};

export default BreadCrumb;
