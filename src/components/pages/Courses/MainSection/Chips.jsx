"use client";
import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";
import { IoMdClose } from "react-icons/io";
import { filterName } from "@/constant/filterName";
import { useRouter } from "next/navigation";
import { useSearchParamsStore } from "@/context/courseFilter";
import { filterNameArrange } from "@/constant/filteringCourses/arrangeAndPrice";
const Chips = ({href}) => {
  const setDeleteOther = useSearchParamsStore(state => state.setDeleteOther)
  const router = useRouter();
  const { queryArray, limit, page } = useSearchParamsInUrl();
  const deleteHandler = (index,query) => {
    setDeleteOther(query)
    const filteredArray = queryArray.filter(
      (item) => item !== queryArray[index]
    );
    
    router.push(
      `${href}?limit=${limit}&page=${page}&filter=${filteredArray.join("_")}`
    );
    if (queryArray.length - 1 < 1) {
      router.push(`${href}?limit=${limit}&page=${page}`);
    }
  };
  return (
    <ul className="flex">
      {queryArray?.slice(0, 3).map((query, index) => (
        <li
          key={index}
          name={query}
          className="bg-[#9d9d9d7d] mr-2 sm:flex hidden items-center text-[13px] text-mode-color px-3 py-[6px] rounded-[4px]">
          {filterName[query]}
          <IoMdClose
            onClick={() => deleteHandler(index,query)}
            className="mr-3 cursor-pointer bg-[#3e3e3e76] hover:scale-[1.1] hover:text-red-400 hover:bg-white transition-all duration-300 rounded-full h-[20px] w-[20px] p-1 text-white"
          />
        </li>
      ))}
      {queryArray?.length > 3 && (
        <li className="rounded-[4px] shadow-lg sm:block hidden text-white bg-color-orange mr-2 py-1 px-2">
          <>
            <span className="sm:hidden block">
              +{queryArray.length.toLocaleString("fa-IR")}
            </span>{" "}
            <span className="sm:block hidden">
              +{(queryArray.length - 3).toLocaleString("fa-IR")}
            </span>
          </>
        </li>
      )}
      {
        queryArray && (

      <li className="rounded-[4px] shadow-lg sm:hidden block text-white bg-color-orange mr-2 py-1 px-2">
        <span className="sm:hidden block">
          +{queryArray?.length.toLocaleString("fa-IR")}
        </span>
      </li>
        )
      }
    </ul>
  );
};

export default Chips;
