'use client'
import { useRouter } from "next/navigation";
import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";
const FilterButton = ({href}) => {
    const router = useRouter()
    const {limit,page} = useSearchParamsInUrl()
  return (
    <div className="shadow-topShadow flex sm:justify-start justify-center items-center flex-row-reverse bg-mode-color p-4">
      <button onClick={()=> router.push(`${href}?limit=${limit}&page=${page}`)} className="text-red-400 px-6 py-1 ml-3 hover:scale-[1.02] transition-all duration-300 ">
        حذف همه{" "}
      </button>
    </div>
  );
};

export default FilterButton;
